import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { New } from "@/components/New";
import { Aws } from "@/components/Aws";

export default function Home() {
  return (
    <div>
      <Hero />
      <Aws />
      <New />
      <Process />
    </div>
  );
}
