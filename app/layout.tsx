import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "سماوة | تقرير الأصول الإعلامية 2025",
  description: "تقرير استراتيجي حصري يكشف كيف تحول ميزانيتك التسويقية من مصروفات مستنزفة إلى أصول إعلامية مستدامة ترفع قيمة شركتك.",
  keywords: ["تسويق", "إعلام", "أصول إعلامية", "تقرير استراتيجي", "سماوة", "إنتاج مرئي", "السعودية", "2025"],
  openGraph: {
    title: "سماوة | تقرير الأصول الإعلامية 2025",
    description: "هل ميزانيتك التسويقية استثمار أم استنزاف؟ حمل التقرير الاستراتيجي لعام 2025.",
    url: "https://samawah.com.sa",
    siteName: "سماوة للإنتاج",
    images: [
      {
        url: "/report-cover-2025.png", // Ensure this image is suitable for OG
        width: 1200,
        height: 630,
        alt: "تقرير سماوة 2025",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سماوة | تقرير الأصول الإعلامية 2025",
    description: "تقرير استراتيجي حصري لمدراء المستقبل.",
    images: ["/report-cover-2025.png"],
    creator: "@Samawah_1",
  },
};

import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P6XD66SZJX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P6XD66SZJX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
