import React from 'react'
import '../Styles/Menu.css'
import Pizzaboard from './pizzaboard/pizzaboard.js'
import Bianca from '../pictures/Bianca.png'
import Siena from '../pictures/Siena.png'
import Marinara from '../pictures/Marinara.png'

function Menu() {
  return (
    <>
    <div>
        <div className="page">
          <Pizzaboard pizzaname={'Bianca'}price={'$12.95'} image={Bianca}/>
          <Pizzaboard pizzaname={'Siena'} price={'$12.80'} image={Siena}/>
          <Pizzaboard pizzaname={'Marinara'} price={'$10.95'} image={Marinara}/>
        </div>
      
    </div> 
    </>
  )
}

export default Menu
