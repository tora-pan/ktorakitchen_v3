import './App.css'
import Calendar from "./components/Calendar"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import TopBar from "./components/TopBar"

function App() {

  return (
   <div className="app">
    <TopBar />
    <Hero />
    <Menu />
    <Calendar />
   </div>
  )
}

export default App
