import React from 'react';

const CartButton = ({ onAddToCart }) => {
  return (
    <button onClick={onAddToCart}>Add to Cart</button>
  );
};

export default CartButton;