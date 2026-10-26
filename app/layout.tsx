import type { Metadata } from "next";
import "./globals.css";
import { artistProfile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  metadataBase: new URL(artistProfile.siteUrl),
  title: `${artistProfile.name} — ${artistProfile.headline} | Live Illustration, Murals & Figurative Art`,
  description:
    "Multidisciplinary artist portfolio featuring live wedding & event illustration, bespoke hand-painted café and restaurant murals, fashion and figure drawing, and observational drawing workshops.",
  keywords: [
    "live wedding illustration",
    "event illustrator",
    "cafe murals",
    "hand-painted interior murals",
    "fashion illustration",
    "figure drawing",
    "drawing workshops",
    "artist portfolio",
  ],
  authors: [{ name: artistProfile.name }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${artistProfile.name} — ${artistProfile.headline}`,
    description: artistProfile.supportingText,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-main-sketchbook.jpg",
        width: 1200,
        height: 1500,
        alt: `${artistProfile.name} — Live illustration, murals, and figure drawing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${artistProfile.name} — ${artistProfile.headline}`,
    description: artistProfile.supportingText,
    images: ["/images/hero-main-sketchbook.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('inaru-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
