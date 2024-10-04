import { callPrompt } from "./prompts";

export async function callOpenAI(message: string): Promise<string> {
  console.log("Fetching...");
  const prompt = callPrompt(message, "default"); // Use the current message to generate a prompt
  try {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Ensure the backend receives the "message" field with the updated story
      body: JSON.stringify({ message: prompt }),
    });

    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Error:", error);
    return "Error: Unable to fetch response";
  }
}
