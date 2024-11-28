import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@/app/globals.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Make AI Happen | KI-Check für Organisationen",
  description: "Make AI Happen unterstützt Organisationen dabei, ihre Position im KI-Transformationsprozess zu bestimmen. Durch eine strukturierte Selbsteinschätzung ermitteln Sie Ihren KI-Score und erhalten einen Vergleich mit anderen Organisationen."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
