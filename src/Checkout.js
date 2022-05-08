import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            <h4>{user?.email}</h4>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            { basket.map((b, i) => (
               <CheckoutProduct key={i} 
                id={b.id}
                title={b.title} 
                rating={b.rating}
                price={b.price} 
                image={b.image} />
              ))
            }          
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout