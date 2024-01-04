import './App.css'
import { Challenge } from './components/Challenge'
import { Events } from './components/Events'
import { FirstComponent } from './components/FirstComponent'
import { TemplateExpressions } from './components/TemplateExpressions'

function App() {

  return (
    <>
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
    </>
  )
}

export default App
