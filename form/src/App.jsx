import './App.css'
import { MyForm } from './components/MyForm'

function App() {

  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{ name: 'josias', email: 'josias@gmail.com', bio: 'sou um advogado', role: 'admin' }} />
    </div>
  )
}

export default App
