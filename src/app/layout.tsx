import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RenderDrop — Stop chasing clients. Stop expired links.",
  description: "A persistent, branded upload portal for video teams—built for large files and busy clients.",
  openGraph: {
    title: "RenderDrop — Stop chasing clients. Stop expired links.",
    description: "A persistent, branded upload portal for video teams—built for large files and busy clients.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenderDrop — Stop chasing clients. Stop expired links.",
    description: "A persistent, branded upload portal for video teams—built for large files and busy clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
