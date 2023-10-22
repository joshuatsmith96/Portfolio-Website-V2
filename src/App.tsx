import './App.css'
import ScrollAnimations from './components/ScrollAnimations'
import HeaderBar from './components/HeaderBar'
import Hero from './components/Hero'
import CardHolder from './components/Cards/CardHolder'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className="App">
      <ScrollAnimations />
      <HeaderBar />
      <Hero />
      <CardHolder />
      <Spacer />
    </div>
  )
}

export default App;
