import { Footer } from "app/components/shared/Footer/Footer";
import { Header } from "app/components/shared/Hesder/Header";


import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"]
});

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
      <body className={roboto.className}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
