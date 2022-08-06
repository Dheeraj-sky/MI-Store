import React from 'react'

const Offer = ({link,index,src}) => {
  return   <a href={link}> <img src={src} alt={`${index} offer`} /></a>
    
  
}

export default Offer
