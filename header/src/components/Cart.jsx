import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  return (
    <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
      <FaShoppingCart className="text-xl mr-2" />
      <span>Cart</span>
    </div>
  );
};

export default Cart;
