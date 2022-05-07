import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
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
