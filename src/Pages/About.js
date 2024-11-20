import React from 'react'
import '../Styles/About.css'
import shop from '../pictures/shop.webp'
import paper from '../pictures/paper.png'

function About() {
  return (
    <div>
      <div className="page1">
        <div className="shop">
          <img src={shop} alt='Shop'></img>
        </div>
        <div className="paper">
          <img src={paper} alt='paper'></img>
          <h2>About the shop</h2>
          <p>At Cryparion Pizza Shop, we’re all about authentic flavors and <br/>quality ingredients. Our cozy, rustic space is the perfect place to<br/> enjoy 
          delicious, freshly made pizzas crafted with love. Join us for<br/> a slice of  tradition and a taste you’ll remember!






</p>
        </div>
      </div>
    </div>
  )
}

export default About
