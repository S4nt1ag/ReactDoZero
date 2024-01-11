import React from 'react'

export const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
        </ul>
        {age >= 18? <p>Está autorizado a tirar a carteira</p> : <p>Não está autorizado a tirar a carteira</p> }
    </div>
  )
}
