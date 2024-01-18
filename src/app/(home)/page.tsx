
import { MainProducts } from "app/components/home/MainProducts/MainProducts";
import "./globals.css";

export default function Home() {
  return (
    <main className='flex flex-col w-[100%] items-center justify-center text-cyan-400'>
      <MainProducts />
    </main>
  );
}
