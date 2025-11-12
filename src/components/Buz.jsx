import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const cars = [
  {
    id: 1,
    name: 'Tesla',
    description: 'Electric vehicle with edge technology.',
    price: 25000,
    image: '/image/car1.jfif'
  },
  {
    id: 2,
    name: 'Honda CR-V',
    description: 'Reliable SUV with excellent efficiency.',
    price: 35000,
    image: '/image/car2.jfif'
  },
  {
    id: 3,
    name: 'Mustang',
    description: 'Iconic American muscle car with powerful.',
    price: 45000,
    image: '/image/car3.jfif'
  },
  {
    id: 4,
    name: 'corolla',
    description: 'Reliable fuel-efficient compact sedan.',
    price: 20000,
    image: '/image/car4.jfif'
  },
  {
    id: 5,
    name: 'Highlander',
    description: 'Spacious SUV with advanced features.',
    price: 60000,
    image: '/image/car5.jfif'
  },
  {
    id: 6,
    name: 'Toyota camry',
    description: 'Comfortable sedan with excellent reliability.',
    price: 30000,
    image: '/image/car6.jpg'
  },
  {
    id: 7,
    name: 'Toyota Avenis',
    description: 'Stylish sedan with advanced technology.',
    price: 40000,
    image: '/image/car7.jfif'
  },
  {
    id: 8,
    name: 'Hyundai',
    description: 'Affordable and reliable vehicles.',
    price: 55000,
    image: '/image/car8.jpg'
  },
  {
    id: 9,
    name: 'GLE 2018',
    description: 'Luxury midsize with advanced technology.',
    price: 18000,
    image: '/image/car9.jfif'
  },
  {
    id: 10,
    name: 'Peugeout 408',
    description: 'Stylish fastback sedan with European design.',
    price: 38000,
    image: '/image/car10.jfif'
  },
  {
    id: 11,
    name: 'Almera',
    description: 'Compact and economical sedan.',
    price: 32000,
    image: '/image/car11.jfif'
  },
  {
    id: 12,
    name: 'Range rover',
    description: 'Luxury SUV with off-road capability.',
    price: 70000,
    image: '/image/car12.jfif'
  }
];

export { cars };

// Car Item Component
function CarItem({ car, onAddToCart }) {
  return (
    <div className="car-item">
      {/* Image wrapped in a Link so each car can have its own detail page */}
      <Link to={`/cars/${car.id}`} className="car-link">
        <img className="car-image" src={car.image} alt={car.name} />
      </Link>
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <p className="car-price">${car.price}</p>
      <button className="add-btn" onClick={() => onAddToCart(car)}>Add to Cart</button>
    </div>
  )
}

// Cart Item Component
function CartItem({ item, onRemoveFromCart, index }) {
  return (
    <div className="cart-item">
      <span className="cart-item-text">{item.name} - ${item.price}</span>
      <button className="remove-btn" onClick={() => onRemoveFromCart(index)}>✕</button>
    </div>
  )
}

// Main Buz Component
function Buz() {
  const [cart, setCart] = useState([])

  const addToCart = (car) => {
    setCart(prev => [...prev, car])
  }

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((item, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="buz-container">
      <h1>🚗 Festybam Car Dealership</h1>
      <p>Browse our selection of cars and add them to your cart to "buy"!</p>
      <h2>Available Cars</h2>

      {/* Car List */}
      <section className="cars-section">
        {/* <h2>Available Cars</h2> */}
        {cars.map(car => (
          <CarItem key={car.id} car={car} onAddToCart={addToCart} />
        ))}
      </section>

      {/* Shopping Cart */}
      <section className="cart-section">
        <h2>Shopping Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>
        ) : (
          <>
            {cart.map((item, index) => (
              // use index in key if duplicates of same id are allowed; otherwise item.id is fine
              <CartItem key={index} item={item} onRemoveFromCart={removeFromCart} index={index} />
            ))}
            <div className="total">Total: ${total}</div>
            <button className="checkout-btn" onClick={() => alert(`Purchase successful from festybam car dealership! Total: $${total}. (Thanks for the deal!.)`)}>
              Click to Purchase
            </button>
          </>
        )}
      </section>
    </div>
  )
}

export default Buz
