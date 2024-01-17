import { Footer } from "app/components/shared/Footer/Footer";
import { Header } from "app/components/shared/Hesder/Header";

import type { Metadata } from "next";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs-store",
  description: "This is the nextjs-store a s tore for practic nextjs 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="bg-slate-900 flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
