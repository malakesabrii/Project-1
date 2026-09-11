import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KidsMeals | غذای سالم و گرم برای کودکان",
  description:
    "KidsMeals؛ راهی ساده‌تر برای تأمین غذای گرم، خوشمزه و متناسب با سن کودکان و نوجوانان.",
  keywords: [
    "KidsMeals",
    "غذای کودک",
    "غذای سالم",
    "تغذیه کودک",
    "غذای گرم",
    "غذای نوجوان",
  ],
  openGraph: {
    title: "KidsMeals | غذای سالم و گرم برای کودکان",
    description:
      "KidsMeals؛ راهی ساده‌تر برای تأمین غذای گرم، خوشمزه و متناسب با سن کودکان و نوجوانان.",
    type: "website",
    locale: "fa_IR",
    siteName: "KidsMeals",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2E7D32" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
