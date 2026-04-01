import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Judgeathon 2026 | Dunki Technologies",
  description:
    "The world's first hackathon whose sole purpose is to get you an O1. No hackers. No teams. Just you, your judgements and an O1 letter waiting at the finish line.",
  openGraph: {
    title: "Judgeathon 2026 | The World's First Hackathon for O1",
    description:
      "The world's first hackathon whose sole purpose is to get you an O1. No hackers. No teams. Just you, your judgements and an O1 letter waiting at the finish line.",
    url: "https://judgeathon.devfolio.co",
    siteName: "Judgeathon 2026",
    type: "website",
    images: [
      {
        url: "https://judgeathon.devfolio.co/og-image.jpg",
        alt: "Judgeathon 2026 - The World's First Hackathon for O1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Judgeathon 2026 | The World's First Hackathon for O1",
    description:
      "The world's first hackathon whose sole purpose is to get you an O1. No hackers. No teams. Just you, your judgements and an O1 letter waiting at the finish line.",
    images: ["https://judgeathon.devfolio.co/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
