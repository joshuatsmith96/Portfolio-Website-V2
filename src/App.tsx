import './App.css'
import Test from './components/Test'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className="App">
      <Test Speed={2} Size={100}></Test>
      <Spacer></Spacer>
    </div>
  )
}

export default App;
