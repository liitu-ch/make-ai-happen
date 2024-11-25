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
  title: "Make AI Happen | KI-Check für Ihr Unternehmen",
  description: "Make AI Happen ist ein interaktiver Reifegradassistent, der Unternehmen auf ihrer KI-Transformationsreise begleitet. Durch eine strukturierte Selbsteinschätzung und reflektierte Analyse hilft das Tool, den aktuellen Stand der KI-Adoption zu bewerten und konkrete nächste Schritte zu definieren.",
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
