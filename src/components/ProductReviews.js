import React from 'react'
import ProductReviewscard  from '../components/ProductReviewscard.js'
import '../styles/ProductReviews.css'
const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
      {
        ProductReviews.map((item,index)=>
        <ProductReviewscard  price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>  
        )
      }
    </div>
  )
}

export default ProductReviews
