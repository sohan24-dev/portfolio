import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const chatCompletion =
      await client.chat.completions.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    return Response.json({
      reply:
        chatCompletion.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}