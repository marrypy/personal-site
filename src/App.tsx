import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Awards from "./sections/Awards"
import Footer from "./sections/Footer"
import Container from "./components/Container"

export default function App() {
  return (
    <>
      <Navbar />

      {/* subtle top padding */}
      <div style={{ paddingTop: "1rem" }}>
        <Hero />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Projects />
        <hr />
        <Awards />
      </div>

      <Footer />

      {/* tiny spacer */}
      <Container>
        <div style={{ height: 18 }} />
      </Container>
    </>
  )
}
