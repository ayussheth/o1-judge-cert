import { list, get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Blob store not configured." }, { status: 500 });
  }

  try {
    const { blobs } = await list({
      prefix: "submissions/",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const submissions = await Promise.all(
      blobs.map(async (blob) => {
        const blobToken = process.env.BLOB_READ_WRITE_TOKEN!;
        const blobData = await get(blob.pathname, { token: blobToken });
        if (!blobData) return null;
        const res = await fetch(blobData.url);
        return await res.json();
      })
    );

    const filtered = submissions.filter(Boolean);
    filtered.sort((a, b) =>
      new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    );

    return NextResponse.json({ submissions: filtered });
  } catch (err) {
    console.error("Admin route error:", err);
    return NextResponse.json({ error: "Failed to load submissions." }, { status: 500 });
  }
}
