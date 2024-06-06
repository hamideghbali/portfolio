import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Process } from "@/components/Process"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Process />
      <Footer />
    </div>
  )
}
