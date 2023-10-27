import Home from './components/Home'
import Navigation from './components/Navigation'
import NavMobile from './components/NavMobile'
import background from './assets/back.png'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import { useRef, useState, useEffect } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import 'animate.css'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
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

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768
  const nav = isMobile ?  <NavMobile scrollToSection={scrollToSection} about={about} project={project} contact={contact} /> : <Navigation scrollToSection={scrollToSection} about={about} project={project} contact={contact} />


  return (
    <div>
      <BsChevronDoubleUp id="back" onClick={() => scrollToSection(home)} className="bouncer cursor-pointer fixed bottom-4 right-4 text-white text-4xl rounded-full border border-white z-10"></BsChevronDoubleUp>
      <div className="h-screen w-full">
        <div id="nav">
          {nav}
        </div>
        <div ref={home} className="bg-cover h-4/5 bg-center w-full md:h-full " style={{backgroundImage: `url(${background})` }} id="home">
          <Home/>
          <BsChevronDoubleDown className='mt-24 bouncer sm:mt-20 text-white text-6xl lg:mt-52 ml-auto mr-auto cursor-pointer' onClick={() => scrollToSection(about)} ></BsChevronDoubleDown>
        </div>
        <div ref={about} id="about" className="md:h-full">
          <About>
            <BsChevronDoubleDown className='bouncer sm:mt-20 text-white text-6xl cursor-pointer' onClick={() => scrollToSection(project)} ></BsChevronDoubleDown>
          </About>
        </div>
        <div ref={project} id="project" className="h-auto sm:mt-52 md:mt-96">
          <Project />
          <div ref={contact} id="contact" className="sm: mt-14">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
