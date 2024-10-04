import { useState } from "react";
import { formatDate } from "./utils/dateFormatter"; // Import the date formatting function
import "./globals.css";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { callOpenAI } from "./utils/api";
import { callPrompt } from "./utils/prompts"; // Import the modified callPrompt function
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<any[]>([]); // Store events as an array
  const [reality, setReality] = useState("");
  const [brutality, setBrutality] = useState("");

  async function handleStartOrContinue(continueStory: boolean = false) {
    let promptMessage = message;

    // Clear response when "Go" button is clicked
    if (!continueStory) {
      setResponse([]); // Clear response on new story input
    }

    if (continueStory && response.length > 0) {
      const lastYear = getLastYear(response);
      promptMessage = `Continue the timeline from the year ${lastYear}. Here is what happened so far: ${response
        .map((event) => `${event.dt}: ${event.evt}`)
        .join(". ")}. Provide 5 new key events after ${lastYear}.`;
    }

    // Call the modified callPrompt function with reality and brutality parameters
    const apiResponse = await callOpenAI(
      callPrompt(promptMessage, reality, brutality)
    );

    const cleanResponse = apiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "");

    try {
      const parsedResponse = JSON.parse(cleanResponse);
      setResponse((prev) => [...prev, ...parsedResponse]);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  // Helper function to get the latest year from the timeline events
  function getLastYear(events: any[]): string {
    const lastEvent = events[events.length - 1];
    return lastEvent.dt.split("-")[0]; // Extracts the year from the date
  }

  return (
    <div className="bg-background text-foreground">
      <div className="m-10">
        <h1 className="text-6xl">TimelAIne</h1>
        <p className="text-2xl">Create your own history</p>
      </div>
      <div className="border border-border items-center flex flex-col p-5 bg-card">
        <p>What happened?</p>
        <Textarea
          className="w-1/2 items-center mb-2 border border-border rounded-md p-2"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Start your story..."
        />
        <div className="flex gap-2 my-2">
          {/* Dropdown for reality selection */}
          <Select value={reality} onValueChange={setReality}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Reality Level" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="unreal">Unrealic</SelectItem>
              <SelectItem value="real">Realistic</SelectItem>
            </SelectContent>
          </Select>

          {/* Dropdown for brutality selection */}
          <Select value={brutality} onValueChange={setBrutality}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Brutality Level" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="brutal">Brutal</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="sfw">Safe for Work</SelectItem>
              <SelectItem value="most_brutal">
                The Most Brutal in the World
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-15 my-1"
          onClick={() => handleStartOrContinue(false)}
        >
          Start
        </Button>

        {response.length > 0 && (
          <>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {response.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-event">
                    <span style={{ fontSize: "24px" }}>{event.emj}</span>{" "}
                    {/* Emoji size adjustment */}
                    <span>{event.evt}</span>
                  </div>
                  <span className="timeline-year">{formatDate(event.dt)}</span>{" "}
                  {/* Formatted date */}
                </div>
              ))}
            </div>
            <Button
              className="w-15 mt-4"
              onClick={() => handleStartOrContinue(true)}
            >
              Continue the Story
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
