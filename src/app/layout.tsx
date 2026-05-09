import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CanvasBackground from "@/components/CanvasBackground";
import PageTransition from "@/components/PageTransition";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Mahad | Full Stack Developer",
  description: "Mahad - Full Stack Web and Mobile App Developer portfolio. Crafting premium digital solutions with passion and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CanvasBackground />
          <Navbar />
          <main className={styles.mainContent}>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
