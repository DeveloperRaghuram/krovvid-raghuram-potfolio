import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Learning } from '@/components/sections/learning'
import { Contact } from '@/components/sections/contact'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted-foreground md:flex-row md:px-8">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
