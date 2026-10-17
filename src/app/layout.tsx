import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sibam Sasmal | Developer • Engineer • Builder",
  description:
    "Editorial portfolio of Sibam Sasmal. Engineering scalable web platforms, real-time computer vision models, and resilient backend systems. Winner of Hacktriad 2.0.",
  keywords: [
    "Sibam Sasmal",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Computer Vision",
    "Next.js",
    "React",
    "Python",
    "Django",
    "OpenCV",
    "Portfolio",
  ],
  authors: [{ name: "Sibam Sasmal", url: "https://github.com/sasmalshivam" }],
  creator: "Sibam Sasmal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivamsasmalportfolio.vercel.app",
    title: "Sibam Sasmal | Developer • Engineer • Builder",
    description:
      "A human perspective on intelligent technology. Scalable web systems, real-time computer vision, and machine learning solutions.",
    siteName: "Sibam Sasmal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibam Sasmal | Developer • Engineer • Builder",
    description:
      "Editorial portfolio featuring intelligent web systems and computer vision solutions.",
    creator: "@sasmalshivam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth bg-black">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased selection:bg-neon-green/30 selection:text-white`}
      >
        {/* Film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
