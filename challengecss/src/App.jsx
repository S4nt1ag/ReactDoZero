import './App.css'
import { CarDetails } from './components/CarDetails'
import fordLogo from './assets/fordLogo.jpg';
import hondaLogo from './assets/hondaLogo.jpg';
import toyotaLogo from './assets/toyotaLogo.jpg';
import mazdaLogo from './assets/mazdaLogo.jpg';
import chevroletLogo from './assets/hondaLogo.jpg';
import nissanLogo from './assets/nissanLogo.jpg';
import subaruLogo from './assets/subaruLogo.jpg';

function App() {

  const cars = [
    { id: 1, name: 'Focus', brand: 'Ford', newCar: 'Usado', img: fordLogo, year: 2009 },
    { id: 2, name: 'Civic', brand: 'Honda', newCar: 'Novo', img: hondaLogo, year: 2022 },
    { id: 3, name: 'Corolla', brand: 'Toyota', newCar: 'Usado', img: toyotaLogo, year: 2015 },
    { id: 4, name: 'Fusion', brand: 'Ford', newCar: 'Novo', img: fordLogo, year: 2023 },
    { id: 5, name: 'Mazda3', brand: 'Mazda', newCar: 'Usado', img: mazdaLogo, year: 2010 },
    { id: 6, name: 'Camry', brand: 'Toyota', newCar: 'Novo', img: toyotaLogo, year: 2021 },
    { id: 7, name: 'Accord', brand: 'Honda', newCar: 'Usado', img: hondaLogo, year: 2014 },
    { id: 8, name: 'Malibu', brand: 'Chevrolet', newCar: 'Novo', img: chevroletLogo, year: 2022 },
    { id: 9, name: 'Altima', brand: 'Nissan', newCar: 'Usado', img: nissanLogo, year: 2018 },
    { id: 10, name: 'Escape', brand: 'Ford', newCar: 'Novo', img: fordLogo, year: 2023 },
    { id: 11, name: 'Impreza', brand: 'Subaru', newCar: 'Usado', img: subaruLogo, year: 2011 },
    { id: 12, name: 'Avalon', brand: 'Toyota', newCar: 'Novo', img: toyotaLogo, year: 2020 },
    { id: 13, name: 'Sentra', brand: 'Nissan', newCar: 'Usado', img: nissanLogo, year: 2017 },
    { id: 14, name: 'Cruze', brand: 'Chevrolet', newCar: 'Novo', img: chevroletLogo, year: 2024 },
    { id: 15, name: 'Focus', brand: 'Ford', newCar: 'Usado', img: fordLogo, year: 2012 },
    { id: 16, name: 'Mazda6', brand: 'Mazda', newCar: 'Novo', img: mazdaLogo, year: 2021 },
    { id: 17, name: 'Camry', brand: 'Toyota', newCar: 'Usado', img: toyotaLogo, year: 2016 },
    { id: 18, name: 'Fusion', brand: 'Ford', newCar: 'Novo', img: fordLogo, year: 2022 },
    { id: 22, name: 'Fiesta', brand: 'Ford', newCar: 'Novo', img: fordLogo, year: 2024 },
    { id: 23, name: 'Civic', brand: 'Honda', newCar: 'Usado', img: hondaLogo, year: 2010 },
    { id: 24, name: 'Altima', brand: 'Nissan', newCar: 'Novo', img: nissanLogo, year: 2023 },
    { id: 25, name: 'Accord', brand: 'Honda', newCar: 'Usado', img: hondaLogo, year: 2017 },
    { id: 27, name: 'Rogue', brand: 'Nissan', newCar: 'Usado', img: nissanLogo, year: 2021 },
    {id: 26, name: 'Civic Si', brand: 'Honda', newCar: 'Novo', img: hondaLogo, year: 2023}
  ]

  return (

    <div className='container'>
      <div className='header'>
        <h1>CarHome</h1>
      </div>
      <div className='cards'>
        {cars.map((car) => (
          <CarDetails key={car.id} name={car.name} brand={car.brand} newCar={car.newCar} year={car.year} img={car.img} />
        ))}
      </div>
    </div>
  )
}

export default App
