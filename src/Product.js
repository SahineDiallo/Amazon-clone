import React from 'react'
import './Product.css';

function Product({id, title, price, rating, image}) {
  return (
    <div className="product">
        <div class="product__info">
            <p class="product__desc">{title}</p>
            <p class="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div class="product__rating">
                {Array(rating).fill().map((_, i)=> (
                  <p>⭐</p>
                ))}
                
                
            </div>
        </div>
        <img src={image} alt="" />
        {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" /> */}
        <button>Add to card</button>
    </div>
  )
}

export default Product