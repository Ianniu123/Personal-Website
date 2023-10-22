import Home from './components/Home'
import Navigation from './components/Navigation'
import background from './assets/dark.png'
import Project from './components/Project'

const App = () => {
  return (
   <div className="h-screen">
    <div>
      <Navigation />
    </div>
    <div className="bg-cover bg-center h-full" style={{backgroundImage: `url(${background})` }} id="home">
      <Home />
    </div>
    <div id="project">
      <Project />
    </div>
   </div>
  )
}

export default App;
