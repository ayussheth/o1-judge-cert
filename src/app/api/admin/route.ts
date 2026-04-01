import { list, getDownloadUrl } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return NextResponse.json({ error: "Blob store not configured." }, { status: 500 });
  }

  try {
    const { blobs } = await list({
      prefix: "submissions/",
      token: blobToken,
    });

    const submissions = await Promise.all(
      blobs.map(async (blob) => {
        const downloadUrl = await getDownloadUrl(blob.pathname, { token: blobToken });
        const res = await fetch(downloadUrl);
        return await res.json();
      })
    );

    submissions.sort((a, b) =>
      new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    );

    return NextResponse.json({ submissions });
  } catch (err) {
    console.error("Admin route error:", err);
    return NextResponse.json({ error: "Failed to load submissions." }, { status: 500 });
  }
}
