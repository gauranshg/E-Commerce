import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>only on best seller products</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}
