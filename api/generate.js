export default async function handler(req, res) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY not found");
      return res.status(500).json({ error: "Missing API key" });
    }

    const prompt = "Give me a short, thoughtful motivational quote. Nothing cheesy. Something soft, grounded, and warm.";

    const openAIRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 60,
        temperature: 0.8
      })
    });

    const data = await openAIRes.json();

    if (data.error) {
      console.error("OpenAI error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    const quote = data.choices?.[0]?.message?.content || "You're doing great. Keep going.";
    res.status(200).json({ quote });
  } catch (err) {
    console.error("Catch error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}