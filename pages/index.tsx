import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-indigo-900/40 via-indigo-700/20 to-slate-900/40 w-full h-auto min-h-full overflow-auto">
      <NavBar />
      <HeroSection />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div >
  )
}
