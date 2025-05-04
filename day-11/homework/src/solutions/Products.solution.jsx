import React, { useContext, useState } from "react";
import { CartContext } from "../app/Context/CartContext";

export const Products = ({ item }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // Check if item is already in cart
  const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  return (
    <div className='flex flex-row items-center justify-around h-[250px] bg-white rounded-lg shadow-md m-2 p-2'>
      <img src={item.image} alt={item.title} className='h-50 w-50' />

      <div className='flex flex-col gap-2'>
        <span className='text-gray-600'>Category: {item.category}</span>
        <span className='font-semibold'>{item.title}</span>
        <span className='font-bold text-xl'>${item.price}</span>

        <div className='flex items-center gap-2'>
          <label htmlFor='quantity'>Quantity:</label>
          <input
            type='number'
            id='quantity'
            min='1'
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className='w-16 p-1 border rounded'
          />
        </div>

        <button
          onClick={handleAddToCart}
          className='hover:bg-yellow-600 text-black bg-yellow-500 font-bold py-2 px-4 rounded'>
          {itemInCart ? "Add More 🛒" : "Add to cart 🛒"}
        </button>
      </div>
    </div>
  );
};
