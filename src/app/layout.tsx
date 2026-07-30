import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { ToastProvider } from "../components/ui/Toast/ToastProvider";
import { Nav } from "../components/Nav/Nav";

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "Design System Mars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <ThemeProvider>
        <ToastProvider>
          <body className="min-h-full flex flex-col">
            <Nav />
            {children}
          </body>
        </ToastProvider>
      </ThemeProvider>
    </html>
  );
}
