import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

/*
 * NavBar Component: Displays cart summary and navigation elements
 * Learning objectives:
 * - Practice using useContext to access cart state
 * - Display dynamic content based on context values
 * - Handle cart summary display
 */
const NavBar = () => {
  // TODO: Extract required values from CartContext
  // Hint: You'll need itemsCount, totalPrice, and cartItems
  const { itemsCount, totalPrice, cartItems } = useContext(CartContext);

  // TODO: Implement a cart summary preview
  const renderCartSummary = () => {
    // Your code here:
    // 1. Show total items
    // 2. Show total price
    // 3. Maybe show a list of items (optional)
    return cartItems.map((item) => {
      return (
        <div key={item.id} className='flex flex-col'>
          <span>{item.title}</span>
          <span>Quantity: {item.quantity}</span>
          <span>Price: ${item.price}</span>
        </div>
      );
    });

  };

  return (
    <nav className='bg-white shadow-md p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>E-Commerce Store</h1>

        {/* TODO: Implement cart summary display */}
        <div className='flex items-center gap-4'>
          <span>Items in cart: {itemsCount}</span>
          <span>Total Price: {totalPrice} </span>
          {renderCartSummary()}
        </div>
      </div>
   
    </nav>
  );
};

export default NavBar;
