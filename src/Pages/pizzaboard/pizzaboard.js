import React from 'react'
import Board from './pizzaboard.png';
import './pizzaboard.css'

function pizzaboard(props) {
  return (
    <div>
      <div className="board">
        <img className='pizzaboard' src={Board} alt='board'/>
        <div className="content">
        <img className='pizzapic' src={props.image} alt='Pizza'/>
        <h2>{props.pizzaname}</h2>
        <p className='price'>{props.price}</p>
        <button>Order Now</button>
        </div>
        </div>
      

    </div>
  )
}

export default pizzaboard
