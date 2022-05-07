import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>           
            <Route exact path="/" element={<Home /> }/>
            <Route exact path="/Checkout" element={<Checkout />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
