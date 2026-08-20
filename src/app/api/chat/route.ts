import { NextRequest, NextResponse } from "next/server";
import { siteConfig, about, skills, experience, projects, education } from "@/lib/data";

function buildContext() {
  const skillsText = skills.map((s) => `${s.category}: ${s.skills.join(", ")}`).join("\n");
  const projectsText = projects
    .map((p) => `- ${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(", ")}`)
    .join("\n");
  const experienceText = experience.map((e) => `${e.role} at ${e.org} (${e.date})`).join("\n");
  const educationText = education
    .map((e) => `${e.program} at ${e.school} (${e.date}) — ${e.score}`)
    .join("\n");

  return `You are the AI assistant embedded in ${siteConfig.name}'s portfolio website.
You ONLY answer questions about ${siteConfig.name} — his skills, projects, experience, education, and how to contact him.

Bio: ${about.story}

Skills:
${skillsText}

Projects:
${projectsText}

Experience:
${experienceText}

Education:
${educationText}

Contact: ${siteConfig.email} · GitHub: ${siteConfig.github} · LinkedIn: ${siteConfig.linkedin}

Rules:
- Only answer questions about ${siteConfig.name} and the information above.
- If asked something unrelated (general knowledge, coding help, other people, etc.), politely decline and redirect to his portfolio.
- Keep answers to 2-4 sentences, friendly and concise.
- Never invent facts not listed above — if you don't know, suggest the visitor email him directly.`;
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.length > 500) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: buildContext() },
          { role: "user", content: message },
        ],
        temperature: 0.4,
        max_tokens: 300,
      }),
    });

    if (!res.ok) {
  const errorBody = await res.text();
  console.error("Groq API error:", res.status, errorBody);
  return NextResponse.json({ error: "Failed to get a response", detail: errorBody }, { status: 502 });
}

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}