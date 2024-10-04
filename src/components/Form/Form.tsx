import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface FormProps {
  message: string;
  setMessage: (message: string) => void;
  reality: string;
  setReality: (reality: string) => void;
  brutality: string;
  setBrutality: (brutality: string) => void;
  handleStartOrContinue: (continueStory: boolean) => void;
}

export function Form({
  setMessage,
  reality,
  setReality,
  brutality,
  setBrutality,
  handleStartOrContinue,
}: FormProps) {
  return (
    <>
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
    </>
  );
}
