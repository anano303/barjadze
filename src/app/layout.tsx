import type { Metadata } from "next";
import { Syne, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-geo",
  subsets: ["georgian"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ninobarjadze.com";
const siteUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ნინო ბარჯაძე — UX/UI & Graphic Designer | Tbilisi, Georgia",
    template: "%s | ნინო ბარჯაძე",
  },
  description:
    "ნინო ბარჯაძე — პროფესიონალი UX/UI და გრაფიკული დიზაინერი თბილისიდან. მომხმარებელზე ორიენტირებული ციფრული გამოცდილებები, ბრენდინგი, ლოგოები და ვებ/მობაილ დიზაინი. Nino Barjadze — Professional UX/UI & Graphic Designer from Tbilisi, Georgia.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Graphic Designer",
    "Nino Barjadze",
    "ნინო ბარჯაძე",
    "Tbilisi",
    "Georgia",
    "Portfolio",
    "Branding",
    "Logo Design",
    "Web Design",
    "Mobile Design",
    "UX Research",
    "Freelance Designer",
    "საქართველო",
    "თბილისი",
    "დიზაინერი",
    "ბრენდინგი",
  ],
  authors: [{ name: "Nino Barjadze", url: siteUrl }],
  creator: "Nino Barjadze",
  publisher: "Nino Barjadze",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ნინო ბარჯაძე — UX/UI & Graphic Designer",
    description:
      "Professional UX/UI & Graphic Designer based in Tbilisi, Georgia. Creating user-centered digital experiences, branding and aesthetic design.",
    url: siteUrl,
    siteName: "Nino Barjadze Portfolio",
    images: [
      {
        url: "/230.jfif",
        width: 1200,
        height: 630,
        alt: "Nino Barjadze — UX/UI & Graphic Designer",
      },
    ],
    locale: "ka_GE",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ნინო ბარჯაძე — UX/UI & Graphic Designer",
    description:
      "Professional UX/UI & Graphic Designer based in Tbilisi, Georgia.",
    images: ["/230.jfif"],
    creator: "@ninobarjadze",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "ka-GE": `${siteUrl}/#ka`,
      "en-US": `${siteUrl}/#en`,
    },
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
      <body
        className={`${syne.variable} ${notoSansGeorgian.variable} antialiased noise-bg`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
