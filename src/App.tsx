import { Box } from '@chakra-ui/react'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { About } from './components/About.tsx'
import { Experience } from './components/Experience.tsx'
import { Projects } from './components/Projects.tsx'
import { Contact } from './components/Contact.tsx'

function App() {
  return (
    <Box minH="100vh" w="100%" overflowX="hidden">
      <Header />
      <Box as="main" w="100%">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Box>
    </Box>
  )
}

export default App
