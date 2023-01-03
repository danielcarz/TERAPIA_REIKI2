import './styles/app.css'

//COMPONENTS
import {Section_one} from "./components/sectionONE/section_one";
import {Section_two} from './components/sectionTWO/section_two'



function App() {
  

  return (
    <div className="App">
      <Section_one></Section_one>
      <Section_two></Section_two>
    </div>
  )
}

export default App
