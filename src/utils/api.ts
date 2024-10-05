export async function callOpenAI(
  message: string,
  options: {
    reality: string;
    brutality: string;
    detailed: boolean;
    population: boolean;
  }
): Promise<string> {
  try {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, ...options }),
    });

    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Error:", error);
    return "Error: Unable to fetch response";
  }
}
