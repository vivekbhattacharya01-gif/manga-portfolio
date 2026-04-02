import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import InkSplashTransition from './components/InkSplashTransition'
import ChapterHero from './components/ChapterHero'
import ChapterAbout from './components/ChapterAbout'
import ChapterProjects from './components/ChapterProjects'
import ChapterExperience from './components/ChapterExperience'
import ChapterContact from './components/ChapterContact'
import Footer from './components/Footer'
import SpineIndicator from './components/SpineIndicator'

function App() {
  const { isTransitioning, theme } = useTheme()

  return (
    <div className="min-h-screen bg-manga-paper dark:bg-manga-charcoal text-manga-ink dark:text-manga-offwhite ink-grain transition-colors duration-500">
      {isTransitioning && <InkSplashTransition isDark={theme === 'dark'} />}
      <Navbar />
      <SpineIndicator />
      <main>
        <ChapterHero />
        <ChapterAbout />
        <ChapterProjects />
        <ChapterExperience />
        <ChapterContact />
      </main>
      <Footer />
    </div>
  )
}

export default App
