import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://lyfix.tech"),
  title: { default: "Lyfix Technologies | Creative, Technology, AI & Operations Agency", template: "%s | Lyfix Technologies" },
  description: "Lyfix Technologies is an end-to-end business agency for web design and development, AI automation, conversational websites and agents, ChatGPT Ads, Meta Ads, branding, packaging, UGC, video, and operational systems.",
  keywords: ["Lyfix Technologies", "AI automation agency India", "conversational website development", "ChatGPT Ads agency", "Meta Ads agency", "web development agency Jaipur", "Shopify development", "WordPress development", "AI voice agents", "WhatsApp AI agents", "branding and packaging design", "AI UGC video", "business operations automation"],
  authors: [{ name: "Lyfix Technologies", url: "https://lyfix.tech" }],
  creator: "Lyfix Technologies", publisher: "Lyfix Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://lyfix.tech", siteName: "Lyfix Technologies",
    title: "Lyfix Technologies | Business, fixed forward.",
    description: "One team for creative, technology, growth, AI, and operations. We build the systems businesses need next.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Lyfix Technologies, Business fixed forward" }],
  },
  twitter: { card: "summary_large_image", title: "Lyfix Technologies | Business, fixed forward.", description: "Creative, technology, growth, AI, and operations in one connected agency.", images: ["/og.svg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "technology",
}

export const viewport: Viewport = { themeColor: "#090909", width: "device-width", initialScale: 1 }

const schema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://lyfix.tech/#organization",
  name: "Lyfix Technologies", url: "https://lyfix.tech", email: "hello@lyfix.tech",
  description: "End-to-end creative, technology, AI, marketing, and business operations agency.",
  areaServed: ["IN", "Worldwide"],
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  knowsAbout: ["Web Design", "Web Development", "AI Automation", "Conversational AI", "ChatGPT Advertising", "Meta Advertising", "Shopify", "WordPress", "Brand Identity", "Packaging Design", "Video Production", "UGC Content", "Business Process Automation"],
  slogan: "Business, fixed forward.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>
}
