import NavBar from "./views/NavBar/NavBar"
import Hero from "./views/Hero/Hero"
import { Feature } from "./views/Feature/Feature"

function App() {
  return (
    <div>
      {/* <NavBar className='dark' /> */}
      <NavBar />
      <Hero />
      <Feature />
    </div>
  )
}

export default App
