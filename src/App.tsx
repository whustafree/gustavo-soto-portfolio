import './index.css'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { FutureProjectsSection } from './components/FutureProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FutureProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
