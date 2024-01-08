import { useState } from "react"

export const ManegeData = () => {

    let numero = 10;
    const [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Numero: {numero}</p>
                <button onClick={() => (numero = 15)}>Alterar valor</button>
            </div>
            <div>
                <p>Numero: {number}</p>
                <button onClick={() => setNumber(10)}>Alterar valor</button>
            </div>
        </div>
    )
}