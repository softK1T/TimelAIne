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
      <p className="pb-2 sm:text-xl">What happened?</p>
      <div className="w-full lg:w-3/4">
        <Textarea
          className="sm:text-lg m-auto items-center mb-2 border border-border rounded-2xl p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Start your story..."
        />
        <div className=" flex flex-wrap gap-2.5 my-2 flex-1">
          <Select
            value={options.reality as string}
            onValueChange={(val) => handleOptionChange("reality", val)}
          >
            <SelectTrigger className="max-w-[100px] sm:text-md">
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
            <SelectTrigger className="max-w-[100px] sm:text-md">
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
            <label htmlFor="detailed" className="text-sm sm:text:md">
              Detailed
            </label>
          </div>
          <div className="flex items-center gap-1 mx-1">
            <Checkbox
              id="population"
              checked={options.population as boolean}
              onCheckedChange={(checked) =>
                handleOptionChange("population", checked)
              }
            />
            <label htmlFor="population" className="text-sm sm:text:md">
              Population
            </label>
          </div>
        </div>
      </div>
      <Button
        className="sm:w-[100px] mb-2 rounded-2xl"
        onClick={() => handleStartOrContinue(false)}
      >
        Start
      </Button>
    </>
  );
}
