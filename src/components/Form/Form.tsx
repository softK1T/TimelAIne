import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming Checkbox component exists

type FormProps = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  options: Record<string, string | boolean>;
  handleOptionChange: (key: string, value: string | boolean) => void;
  handleStartOrContinue: (continueStory: boolean) => void;
};

export function Form({
  message,
  setMessage,
  options,
  handleOptionChange,
  handleStartOrContinue,
}: FormProps) {
  return (
    <>
      <p className="pb-2 text-xl">What happened?</p>
      <Textarea
        className="w-1/2 text-lg items-center mb-2 border border-border rounded-2xl p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Start your story..."
      />
      <div className="flex gap-2 my-2">
        <Select
          value={options.reality as string}
          onValueChange={(val) => handleOptionChange("reality", val)}
        >
          <SelectTrigger className="w-max-400px text-md">
            <SelectValue placeholder="Select Reality Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="unreal">Unrealistic</SelectItem>
            <SelectItem value="real">Realistic</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={options.brutality as string}
          onValueChange={(val) => handleOptionChange("brutality", val)}
        >
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
            <SelectItem value="hell">Hell</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 mx-1">
          <Checkbox
            id="detailed"
            checked={options.detailed as boolean}
            onCheckedChange={(checked) =>
              handleOptionChange("detailed", checked)
            }
          />
          <label htmlFor="detailed">Detailed</label>
        </div>
        <div className="flex items-center gap-1 mx-1">
          <Checkbox
            id="population"
            checked={options.population as boolean}
            onCheckedChange={(checked) =>
              handleOptionChange("population", checked)
            }
          />
          <label htmlFor="population">Population</label>
        </div>
      </div>
      <Button
        className="w-15 my-1 rounded-2xl"
        onClick={() => handleStartOrContinue(false)}
      >
        Start
      </Button>
    </>
  );
}
