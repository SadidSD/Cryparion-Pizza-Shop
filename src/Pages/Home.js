import React from 'react'
import Pizza from '../pictures/pizza.png';
import '../Styles/Home.css'
import text from '../pictures/text.png'
import order from '../pictures/order.png'
import arrow from '../pictures/arrow.png'

function Home({onMenuClick, onAboutClick}) {
  return (
    <div className='home'>
      <div className="text"><img onClick={() => { onAboutClick(); }} src={text} alt="We make the best pizza in the town"/></div>
      <div className="pizza"> 
        <img id="order" onClick={() => { onMenuClick(); }} src={order} alt="pizza"/></div>
        <img id="arrow" src={arrow} alt="pizza"/>
        <img id="pizzapic" src={Pizza} alt="pizza"/>
    </div>
  )
}

export default Home
