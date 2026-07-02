import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zero Theorys | Elite AI & Full-Stack Systems Architecture Agency",
  description: "Zero Fluff. Zero Theories. Just Production-Ready Code. Top-tier engineering team designing autonomous AI agents, multi-agent frameworks, scalable full-stack clouds, and high-performance cross-platform mobile systems.",
  keywords: ["Next-Gen AI Core", "Autonomous AI Agents", "Full-Stack Ecosystems", "Mobile Application Engineering", "Enterprise Software Agency"],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="ambient-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="app-shell" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <main className="main-content" style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
