import { useState } from "react"

export const ConditionalRender = () => {

    const [x] = useState(true);

    const [name, setName] = useState('Santiago');
    
  return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p>se x for true, sim!</p> }
        {!x && <p>o x é falso!</p>}
        <div>
            <h1>Meu nome é santiago?</h1>
            {name === 'Santiago'? <p>sim meu nome é santiago</p> : <p>Não, meu nome é {name}</p> }

            <button onClick={() => {setName('Gabriel')}}>troca o nome</button>
        </div>
    </div>
  )
}
