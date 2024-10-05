import { Event } from "./prompts";
import { callOpenAI } from "./api";

export async function startOrContinue(
  continueStory: boolean,
  message: string,
  options: {
    reality: string;
    brutality: string;
    detailed: boolean;
    population: boolean;
  },
  response: Event[],
  setResponse: React.Dispatch<React.SetStateAction<Event[]>>
): Promise<void> {
  const promptMessage =
    continueStory && response.length > 0
      ? `Continue the timeline from the year ${getLastYear(
          response
        )}. Here is what happened so far: ${response
          .map((event) => `${event.dt}: ${event.evt}`)
          .join(". ")}. Provide 5 new key events after ${getLastYear(
          response
        )}.`
      : message;

  if (!continueStory) setResponse([]); // Clear response on new story input

  const apiResponse = await callOpenAI(promptMessage, options);
  const cleanResponse = apiResponse.replace(/```json/g, "").replace(/```/g, "");

  try {
    const parsedResponse: Event[] = JSON.parse(cleanResponse);
    setResponse((prev) => [...prev, ...parsedResponse]);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

function getLastYear(events: Event[]): string {
  return events[events.length - 1].dt.split("-")[0];
}
