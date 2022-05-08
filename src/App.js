import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import { useEffect } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

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
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Checkout" element={<><Header /> <Checkout /></>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
