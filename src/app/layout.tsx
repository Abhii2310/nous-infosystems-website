import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nous | AI Infrastructure for the Enterprise",
  description: "Build intelligence into everything. AI-led product engineering, data engineering, agentic automation, quality engineering, and cloud infrastructure.",
  keywords: ["enterprise AI", "AI transformation", "data engineering", "agentic workflows", "AI infrastructure"],
  openGraph: {
    title: "Nous — Build Intelligence Into Everything",
    description: "AI infrastructure for the next generation of enterprise products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0, background: '#fff', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
