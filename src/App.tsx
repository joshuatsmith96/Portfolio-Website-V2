import './App.css'
import HeaderBar from './components/HeaderBar'
import Hero from './components/Hero'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <Hero></Hero>
      <Spacer></Spacer>
    </div>
  )
}

export default App;
