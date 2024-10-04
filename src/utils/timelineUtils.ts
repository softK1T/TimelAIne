// src/utils/timelineUtils.ts

import { Event } from "./prompts"; // Make sure the path is correct
import { callOpenAI } from "./api";

export async function handleStartOrContinue(
  continueStory: boolean,
  message: string,
  response: Event[],
  brutality: string,
  reality: string,
  setResponse: React.Dispatch<React.SetStateAction<Event[]>>
): Promise<void> {
  let promptMessage = message;

  if (!continueStory) {
    setResponse([]); // Clear response on new story input
  }

  if (continueStory && response.length > 0) {
    const lastYear = getLastYear(response);
    promptMessage = `Continue the timeline from the year ${lastYear}. Here is what happened so far: ${response
      .map((event) => `${event.dt}: ${event.evt}`)
      .join(". ")}. Provide 5 new key events after ${lastYear}.`;
  }

  const apiResponse = await callOpenAI(promptMessage, brutality, reality);

  const cleanResponse = apiResponse.replace(/```json/g, "").replace(/```/g, "");

  try {
    const parsedResponse: Event[] = JSON.parse(cleanResponse);
    setResponse((prev) => [...prev, ...parsedResponse]); // Append the new events to the previous state
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

export function getLastYear(events: Event[]): string {
  const lastEvent = events[events.length - 1];
  return lastEvent.dt.split("-")[0]; // Extracts the year from the date
}
