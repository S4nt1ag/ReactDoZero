import { Fragment, useState } from 'react'
import './App.css'
import Pato1 from './assets/imgPATO1.jpg'
import { ConditionalRender } from './components/ConditionalRender'
import { ListRender } from './components/ListRender'
import { ManegeData } from './components/ManageData'
import { ShowUserName } from './components/ShowUserName'
import { CarDetails } from './components/CarDetails'

function App() {

  const [name] = useState('Santiago');

  const cars = [
    { id: 1, brand: 'Ferrari', km: 0, color: 'Roxo', newCar: true },
    { id: 2, brand: 'VW', km: 1000000, color: 'Roxo', newCar: false },
    { id: 3, brand: 'Cadilac', km: 0, color: 'Roxo', newCar: true },
  ];

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
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}
      <Fragment />
    </div>
  )
}

export default App
