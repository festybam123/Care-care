import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { cars } from './Buz'

function CarDetails() {
  const { id } = useParams()
  const car = cars.find(car => car.id === parseInt(id))

  if (!car) {
    return <div>Car not found</div>
  }

  return (
    <div className="car-details">
      <Link to="/buz" className="back-link">← Back to Cars</Link>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} className="car-detail-image" />
      <p className="car-description">{car.description}</p>
      <p className="car-price">Price: ${car.price}</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  )
}

export default CarDetails