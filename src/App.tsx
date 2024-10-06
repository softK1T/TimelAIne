import { useState } from "react";
import { Event } from "@/utils/prompts";
import { formatDate } from "@/utils/dateFormatter";
import "./globals.css";
import { Timeline } from "@/components/Timeline/Timeline";
import { Form } from "@/components/Form/Form";
import { startOrContinue } from "@/utils/timelineUtils";
import { useOptions } from "@/hooks/useOptions";

function App() {
  const [response, setResponse] = useState<Event[]>([]);
  const [message, setMessage] = useState<string>("");

  const { options, handleOptionChange } = useOptions();

  const handleStartOrContinue = (continueStory: boolean) =>
    startOrContinue(continueStory, message, options, response, setResponse);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center">
      <div className="m-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl">TimelAIne</h1>
        <p className="text-xl md:text-2xl">Create your own history</p>
      </div>
      <div className="flex flex-col items-center p-5 bg-card w-full md:w-2/3">
        <Form
          message={message}
          setMessage={setMessage}
          options={options}
          handleOptionChange={handleOptionChange}
          handleStartOrContinue={handleStartOrContinue}
        />
        {response.length > 0 && (
          <Timeline
            response={response}
            formatDate={formatDate}
            onContinue={() => handleStartOrContinue(true)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
