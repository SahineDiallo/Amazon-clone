import React from 'react'
import './Product.css';

function Product() {
  return (
    <div className="product">
        <div class="product__info">
            <p class="product__desc">Clean description here</p>
            <p class="product__price">
                <small>$</small>
                <strong>12.99</strong>
            </p>
            <div class="product__rating">
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />
        <button>Add to card</button>
    </div>
  )
}

export default Product