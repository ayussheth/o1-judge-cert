import { put, list, getDownloadUrl } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, instagram, expertise, experience, motivation } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const submission = {
      name,
      email,
      instagram: instagram || null,
      expertise: expertise || null,
      experience: experience ? Number(experience) : null,
      motivation: motivation || null,
      submitted_at: new Date().toISOString(),
    };

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn("Blob store not configured — submission not stored.");
      return NextResponse.json({ ok: true });
    }

    const filename = `submissions/${Date.now()}-${email.replace(/[^a-z0-9]/gi, "_")}.json`;
    await put(filename, JSON.stringify(submission), {
      access: "private",
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
