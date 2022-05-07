import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, rating, image}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeToBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  };
  return (
    <div className="checkoutProduct">
        <img src={image} alt="" />
        <div  key={id} className="checkoutProduct__info">
            <p className="checkoutProduct__desc">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_, i)=> (
                  <p key={i}>⭐</p>
                ))}               
            </div>
            <button onClick={removeToBasket}>Remove from Basket</button>
        </div>
        
        {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" /> */}
    </div>
  )
}

export default CheckoutProduct