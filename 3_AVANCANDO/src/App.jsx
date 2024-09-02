import { useState } from 'react'
import './App.css'
import Pato1 from './assets/imgPATO1.jpg'
import { CarDetails } from './components/CarDetails'
import { ConditionalRender } from './components/ConditionalRender'
import { Fragment } from './components/Fragment'
import { ListRender } from './components/ListRender'
import { ManegeData } from './components/ManageData'
import { ShowUserName } from './components/ShowUserName'
import { Container } from './components/Container'
import { ExecuteFunction } from './components/ExecuteFunction'
import { Message } from './components/Message'
import { ChangeMessageState } from './components/ChangeMessageState'
import { UserDetails } from './components/UserDetails'

function App() {

  const [name] = useState('Santiago');
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const people = [
    { id: 1, name: 'Santiago', age: 18, profession: 'Programador' },
    { id: 2, name: 'Maria', age: 25, profession: 'Engenheira' },
    { id: 3, name: 'Pedro', age: 30, profession: 'Professor' },
    { id: 4, name: 'Ana', age: 42, profession: 'Médica' },
    { id: 5, name: 'Lucas', age: 55, profession: 'Advogado' },
    { id: 6, name: 'Isabel', age: 63, profession: 'Arquiteta' },
    { id: 7, name: 'Carlos', age: 77, profession: 'Empresário' },
    { id: 8, name: 'Camila', age: 14, profession: 'Estudante' },
  ];

  const cars = [
    { id: 1, brand: 'Ferrari', km: 0, color: 'Roxo', newCar: true },
    { id: 2, brand: 'VW', km: 1000000, color: 'Roxo', newCar: false },
    { id: 3, brand: 'Cadilac', km: 0, color: 'Roxo', newCar: true },
  ];

  function showMessage() {
    console.log('evento do componente pai')
  };

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
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails brand='Audi' km={0} color='Roxo' newCar={true} />
      <CarDetails brand='Ford' km={1000000} color='Roxo' newCar={false} />
      <CarDetails brand='Porche' km={0} color='Roxo' newCar={true} />
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}
      <Fragment propFragment='teste' />
      <Container>
        <p>E esse é o conteudo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {people.map((person) => (
        <UserDetails key={person.id} name={person.name} age={person.age} profession={person.profession}/>
      ))}
    </div>

  )
}

export default App
