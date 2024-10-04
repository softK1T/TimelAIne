export type PromptType = "default" | "continue"; // Ensure PromptType is defined

export interface Event {
  emj: string; // Emoji representation
  dt: string; // Date of the event
  evt: string; // Description of the event
}

export interface Prompts {
  [key: string]: string; // Define the structure for prompts
}

export function callPrompt(
  message: string,
  realityType: string, // Type for realityType
  brutalityType: string, // Type for brutalityType
  type: PromptType = "default"
): string {
  const reality: Record<string, string> = {
    unreal:
      "unreal and just interesting to read, imagine something very uncommon",
    real: "close to reality",
  };

  const brutality: Record<string, string> = {
    brutal: "brutal",
    light: "light",
    sfw: "safe",
    most_brutal: "the most brutal in the world", // New option
  };

  const prompts: Prompts = {
    default: `Create me an alternative timeline. This event happened: ${message} (Use the language provided here).
    Give me 5 key events in the whole world that would likely happen in this imaginary timeline and date when. 
    Remember: that timeline must be ${reality[realityType]}. Key events must be short (150 characters max). Story must be ${brutality[brutalityType]}.
    Add emojis related to events from any emoji page.
    Format: key-value JSON string with no excessive words. 
    [{evt: event,dt: date,emj: emoji }, ...]`,
    continue:
      "Continue the story in the same format from the year you ended. (Use the language provided here)",
  };

  // Return the requested prompt type or fall back to the default
  return prompts[type] || prompts["default"];
}
