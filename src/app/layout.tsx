import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everest Sustainability Foundation | ESF",
  description:
    "Empowering municipalities and communities in Nepal to achieve national and international climate goals through innovation, research, and climate governance. Non-profit organization focused on carbon initiatives, policy support, and sustainable development.",
  keywords:
    "sustainability, climate change, carbon reduction, Nepal, Himalayas, ESF, environmental conservation, Paris Agreement, Article 6, carbon accounting, climate governance, municipalities, sustainable development",
  authors: [{ name: "Everest Sustainability Foundation" }],
  creator: "Everest Sustainability Foundation",
  publisher: "Everest Sustainability Foundation",
  robots: "index, follow",
  openGraph: {
    title: "Everest Sustainability Foundation | ESF",
    description:
      "Empowering municipalities and communities in Nepal to achieve climate goals through innovation and sustainable development.",
    type: "website",
    locale: "en_US",
    siteName: "Everest Sustainability Foundation",
    images: [
      {
        url: "/logo/esf-logo.png",
        width: 1200,
        height: 630,
        alt: "Everest Sustainability Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Sustainability Foundation | ESF",
    description:
      "Empowering municipalities and communities in Nepal to achieve climate goals through innovation and sustainable development.",
    images: ["/logo/esf-logo.png"],
  },
  icons: {
    icon: "/logo/esf-logo.png",
    shortcut: "/logo/esf-logo.png",
    apple: "/logo/esf-logo.png",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`antialiased ${inter.className}`}
      >
        <I18nProvider>
          <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
