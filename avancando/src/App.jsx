import './App.css'
import Pato1 from './assets/imgPATO1.jpg'
import { ListRender } from './components/ListRender'
import { ManegeData } from './components/ManageData'

function App() {
  return (
    <div>
      <h1>Avançando em React</h1>
      <div>
        <img src="/imgPATO2.png" alt="patoDeBorracha" />
      </div>
      <div>
        <img src={Pato1} alt="pato" />
      </div>
      <ManegeData />
      <ListRender/>
    </div>
  )
}

export default App
