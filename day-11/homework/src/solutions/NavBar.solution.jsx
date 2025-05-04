import React, { useContext, useState } from "react";
import { CartContext } from "../app/Context/CartContext";

const NavBar = () => {
  const { itemsCount, totalPrice, cartItems } = useContext(CartContext);
  const [showPreview, setShowPreview] = useState(false);

  const renderCartSummary = () => {
    if (!showPreview || cartItems.length === 0) return null;

    return (
      <div className='absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4'>
        <h3 className='font-bold mb-2'>Cart Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className='flex justify-between mb-1'>
            <span className='truncate'>{item.title}</span>
            <span>x{item.quantity}</span>
          </div>
        ))}
        <div className='border-t mt-2 pt-2'>
          <div className='font-bold text-right'>
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className='bg-white shadow-md p-4 relative'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>E-Commerce Store</h1>

        <div
          className='flex items-center gap-4 cursor-pointer'
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}>
          <span>Items in cart: {itemsCount}</span>
          <span className='font-bold'>Total: ${totalPrice.toFixed(2)}</span>
          <span className='text-2xl'>🛒</span>
          {renderCartSummary()}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
