import React from 'react'
// import './App.css'
import { useState } from 'react';
import { Routes , Route } from 'react-router'
import Header from './components/Header/Header'

function App() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Header  cartCount={cartCount} handleAddToCart={handleAddToCart} />} />
      </Routes>
    </>
  )
}

export default App
