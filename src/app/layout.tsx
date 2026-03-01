import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nous Infosystems – Digital Product Engineering for Complex Enterprises",
  description: "Nous Infosystems delivers enterprise-grade digital product engineering, AI & automation, cloud transformation, and quality engineering for banking, insurance, healthcare, retail, and logistics industries.",
  keywords: "Digital Product Engineering, AI Automation, Cloud Transformation, Quality Engineering, CMMI Level 5, Enterprise IT Services",
  openGraph: {
    title: "Nous Infosystems – Leveraging Intellect",
    description: "Your partner for digital product engineering in highly regulated industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
