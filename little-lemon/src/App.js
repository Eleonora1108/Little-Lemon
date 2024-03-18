import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import './CSS/Nav.css';
import './CSS/Body.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import LogIn from './pages/LogIn';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/menu' exact Component={Menu}/>
          <Route path='/reservations' exact Component={Reservations}/>
          <Route path='/order-online' exact Component={OrderOnline}/>
          <Route path='/log-in' exact Component={LogIn}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
