import React from 'react'
import './Product.css';

function Product({id, title, price, rating, image}) {
  return (
    <div className="product" >
        <div  key={id} className="product__info">
            <p className="product__desc">{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=> (
                  <p key={i}>⭐</p>
                ))}               
            </div>
        </div>
        <img src={image} alt="" />
        {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" /> */}
        <button>Add to Basket</button>
    </div>
  )
}

export default Product