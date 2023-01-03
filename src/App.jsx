import './styles/app.css'

//COMPONENTS
import {Section_one} from "./components/sectionONE/section_one";
import {Section_two} from './components/sectionTWO/section_two'
import {Section_three} from './components/sectionTHREE/section_three'
import {Section_four} from './components/sectionFOUR/section_four'
import {Section_five} from './components/sectionFIVE/section_five'



function App() {
  

  return (
    <div className="App">
      <Section_one></Section_one>
      <Section_two></Section_two>
      <Section_three></Section_three>
      <Section_four></Section_four>
      <Section_five></Section_five>
    </div>
  )
}

export default App
