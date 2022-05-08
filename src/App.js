import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Payment from './Payment';
import { useEffect } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51KxHdpKOGCow9kJbCOzH1q7Tm9QkhgSvROm5H2fSIk1F0r3ItvxsvtqqhrXeTSI9Hp7LFpJ1a7svW491WCvGEhzP00G9pnennA')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null
      })
    })
  }, [])

  return (
    <Router>
      <div className="App">
          
          <Routes>           
            <Route exact path="/" element={<><Header /> <Home /> </> }/>
            <Route exact path="/payment" element={<><Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements> 
             </> }/>
            <Route exact path="/login" element={<Login />} />
            
            <Route exact path="/Checkout" element={<><Header /> <Checkout /></>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
