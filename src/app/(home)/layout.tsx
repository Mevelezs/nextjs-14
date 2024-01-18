import { Description } from "app/components/home/Description/Description";
import { Hero } from "app/components/home/Hero/Hero";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      <Description />
      { children }
    </div>
  );
}
