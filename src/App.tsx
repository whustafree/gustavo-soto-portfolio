import './index.css'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { FutureProjectsSection } from './components/FutureProjectsSection'
import { GitHubStats } from './components/GitHubStats'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import { SkipToContent } from './components/SkipToContent'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 custom-cursor-active">
      <SkipToContent />
      <CustomCursor />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubStats />
        <FutureProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
