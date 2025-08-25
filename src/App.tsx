import NavBar from "./views/NavBar/NavBar"
import Hero from "./views/Hero/Hero"
import { Feature } from "./views/Feature/Feature"
import Clients from "./views/Clients/Clients"

function App() {
  return (
    <div>
      {/* <NavBar className='dark' /> */}
      <NavBar />
      <Hero />
      <Feature />
      <Clients />
    </div>
  )
}

export default App
