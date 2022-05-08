import React from 'react'
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  var total_price = basket?.reduce((total, basket)=> total + basket.price, 0)
  const navigate = useNavigate();
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p> Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small>
                        <input type="checkbox" name="" id="" />
                        This order contains a Gift
                    </small>
                    <button onClick={()=> navigate("/payment")}>Proceed to Checkout</button>
                </>

            )}
            decimalScale={2}
            value={total_price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
    </div>
  )
}

export default Subtotal