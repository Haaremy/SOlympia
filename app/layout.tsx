import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./navigation";
import SessionProvider from "./session-provider";
import "./globals.css";
import Footer from "./footer";
import Head from 'next/head';
import { UIProvider } from "./context/UIContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Training der Olympia",
  description: "Sommerfest des Fachschaftsrat INS der Hochschule Anhalt. Website und Implementierung von @Haaremy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <Head>
        {/* Favicon als SVG setzen */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
        
      <body
        className={`${geistSans.variable} dark ${geistMono.variable} antialiased`}
      >
              
          <SessionProvider>
            <UIProvider>
              <Navigation/>
              {children}
              <Footer/>
            </UIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
