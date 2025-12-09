import Hero from '../sections/Hero'
import About from '../sections/About'
import Pillars from '../sections/Pillars'
import ProjectsLink from '../sections/ProjectsLink'
import SiteFooter from '../sections/SiteFooter'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16 sm:px-10">
        <Hero />
        <About />
        <Pillars />
        <ProjectsLink />
        <SiteFooter />
      </div>
    </div>
  )
}

export default LandingPage
