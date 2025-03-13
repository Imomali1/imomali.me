import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A simple blog built with Next.js and Tailwind CSS",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter bg-gray-50 text-gray-800">
        <main className="min-h-screen">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}