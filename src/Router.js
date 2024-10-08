import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Signup from './Pages/Auth/Signup';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup/>} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Router>
   
  );
}

export default Routing;
       
       
       
       

