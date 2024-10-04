export async function callOpenAI(
  message: string,
  brutality: string,
  reality: string
): Promise<string> {
  console.log("Fetching...");
  try {
    console.log(
      JSON.stringify({
        message: message,
        reality: reality,
        brutality: brutality,
      })
    );

    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        reality: reality,
        brutality: brutality,
      }),
    });
    // Check if the response is not OK
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Response data:", data); // Log the response data
    return data.response;
  } catch (error) {
    console.error("Error:", error);
    return "Error: Unable to fetch response";
  }
}
