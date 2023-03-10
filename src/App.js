import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './comonents/home';
import Menu from './comonents/menu';
import OrderOnline from './comonents/orderOnline';
import Reservations from './comonents/reservations';
import SpecialOffers from './comonents/specialOffers';
import ErrorPage from './comonents/errorPage';
import Orders from './comonents/orders';

function App() {
  const [orders, setOrders] = useState([])
  const newOrder = (order) => {
    setOrders([order, ...orders])
  }
  return (
    <div className="App">
      <Router>
        <header>
          <Link to='/'><h1>Roll With It </h1></Link>
          <nav>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/orderOnline'> Order Online </Link>
            <Link to='/reservations'> Reservations </Link>
            <Link to='/specialOffers'> Special Offers </Link>
            <Link to='/orders'> Orders </Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/orderOnline' element={<OrderOnline newOrder={newOrder}/>}/>
          <Route path='/reservations' element={<Reservations />}/>
          <Route path='/specialOffers' element={<SpecialOffers />}/>
          <Route path='/orders' element={<Orders orders={orders}/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
      <footer>
        <h3>Contact us!</h3>
        <h6> Email: sushi32@sushi.com<br/> Phone: 123-123-1234</h6>
      </footer>
    </div>
  );
}

export default App;
