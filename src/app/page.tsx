import { Description } from "app/components/home/Description/Description";
import { Hero } from "app/components/home/Hero/Hero";
import { MainProducts } from "app/components/home/MainProducts/MainProducts";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-center text-cyan-400" >
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
