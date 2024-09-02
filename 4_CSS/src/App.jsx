import { useState } from 'react';
import './App.css'
import { MyComponent } from './components/MyComponent'
import { Title } from './components/Title';

function App() {

  const [n, setN] = useState(15);
  const [redTitle, setRedTitle] = useState(true);

  return (
    <div className='App'>
      <h1> React com css</h1>
      <MyComponent />
      <p>esse paragrafo do app jsx</p>
      <p style={{ color: "blue", padding: "25px", borderTop: '2px solid red' }}>
        este elemento foi inline
      </p>
      <h2 style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>css dinamico</h2>
      <button onClick={() => { setN(9) }}>troca cor</button>
      <h2 className={redTitle ? "red-title" : "title"}>este titulo vai ter classe dinamica</h2>
      <button onClick={() => { setRedTitle(false) }}>troca modo</button>
      <Title/>
    </div>

  )
}

export default App
