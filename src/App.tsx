import { useState } from "react";
import { formatDate } from "@/utils/dateFormatter";
import "./globals.css";
import { Timeline } from "@/components/Timeline/Timeline";
import { Form } from "@/components/Form/Form";
import { handleStartOrContinue } from "@/utils/timelineUtils"; // Import the new utility functions
import { Event } from "@/utils/prompts";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<Event[]>([]);
  const [reality, setReality] = useState("");
  const [brutality, setBrutality] = useState("");

  async function startOrContinue(continueStory: boolean = false) {
    await handleStartOrContinue(
      continueStory,
      message,
      response,
      brutality,
      reality,
      setResponse
    );
  }

  return (
    <div className="bg-background text-foreground">
      <div className="m-10">
        <h1 className="text-6xl">TimelAIne</h1>
        <p className="text-2xl">Create your own history</p>
      </div>
      <div className="border border-border items-center flex flex-col p-5 bg-card">
        <Form
          message={message}
          setMessage={setMessage}
          reality={reality}
          setReality={setReality}
          brutality={brutality}
          setBrutality={setBrutality}
          handleStartOrContinue={startOrContinue} // Update this line
        />
        {response.length > 0 && (
          <Timeline
            response={response}
            formatDate={formatDate}
            onContinue={() => startOrContinue(true)} // Update this line
          />
        )}
      </div>
    </div>
  );
}

export default App;
