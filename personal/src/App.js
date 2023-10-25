import Home from './components/Home'
import Navigation from './components/Navigation'
import background from './assets/back.png'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import { useRef } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { BiUpArrowCircle } from 'react-icons/bi'

const App = () => {
  const home = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex-col h-screen">
      <div id="nav">
        <Navigation scrollToSection={scrollToSection} about={about} project={project} contact={contact} />
      </div>
      <div ref={home} className="bg-cover bg-center h-full" style={{backgroundImage: `url(${background})` }} id="home">
        <Home/>
        <BsChevronDoubleDown className='text-white text-6xl mt-52 ml-auto mr-auto cursor-pointer' onClick={() => scrollToSection(about)} ></BsChevronDoubleDown>
      </div>
      <div ref={about} id="about" className="h-full">
        <About>
          <BsChevronDoubleDown className='text-white text-6xl cursor-pointer' onClick={() => scrollToSection(project)} ></BsChevronDoubleDown>
        </About>
      </div>
      <div ref={project} id="project" className="h-auto" current='project'>
        <Project />
        <div ref={contact} id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;
