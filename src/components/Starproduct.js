import React from 'react'
import '../styles/starproduct.css'

const Starproduct = ({star}) => {
  return (
    <div className='starProduct'>
      <div>
        <a href={star[0].url}><img src={star[0].image} alt="1st product" /></a>
      </div>
      <div>
      <a href={star[1].url}><img src={star[1].image} alt="2nd product" /></a>
      <a href={star[2].url}><img src={star[2].image} alt="3rd product" /></a>
      <a href={star[3].url}><img src={star[3].image} alt="4th product" /></a>
      </div>
    </div>
  )
}

export default Starproduct
