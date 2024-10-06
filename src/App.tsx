import { useEffect, useState } from "react";
import { Event } from "@/utils/prompts";
import { formatDate } from "@/utils/dateFormatter";
import "./globals.css";
import { Timeline } from "@/components/Timeline/Timeline";
import { Form } from "@/components/Form/Form";
import { startOrContinue } from "@/utils/timelineUtils";
import { useOptions } from "@/hooks/useOptions";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [response, setResponse] = useState<Event[]>([]);
  const [message, setMessage] = useState<string>("");

  const { options, handleOptionChange } = useOptions();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleStartOrContinue = (continueStory: boolean) =>
    startOrContinue(continueStory, message, options, response, setResponse);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="m-3 absolute">
        <ModeToggle />
      </div>

      <div className="bg-background text-foreground min-h-screen flex flex-col items-center">
        <div className="mt-3 flex flex-col items-center">
          <h1 className="text-4xl lg:text-6xl">TimelAIne</h1>
          <p className="text-xl md:text-2xl">Create your own history</p>
          <Separator className="mt-2" />
        </div>
        <div className="flex flex-col items-center p-5 pt-3 w-full md:w-2/3">
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
    </ThemeProvider>
  );
}

export default App;
