import React, { useState } from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import "./Payment.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

function Payment() {
    const [{basket, user} ] = useStateValue()
    const stripe = useStripe();
    const elements = useElements();

  return (
    <div className="payment">
        <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} Items</Link>
            )
        </h1>
        <div className="payment__container">
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Deliver Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div class="payment__items">
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
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form action="">
                        <CardElement />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment