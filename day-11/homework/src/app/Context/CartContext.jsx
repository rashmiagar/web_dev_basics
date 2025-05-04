import React, { createContext, useEffect, useState } from "react";

/*
 * CartContext: A React Context for managing shopping cart state globally
 * Learning objectives:
 * - Understanding Context API for global state management
 * - Practice useState with complex state objects
 * - Implementing cart operations (add, remove, update quantity)
 */
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // TODO: Implement cart items state
  // Should be an array of objects with structure:
  // { id, title, price, quantity }
  const [cartItems, setCartItems] = useState([]);

  // TODO: Implement total items count state
  const [itemsCount, setItemsCount] = useState(0);

  // TODO: Implement total price state
  const [totalPrice, setTotalPrice] = useState(0);

  // TODO: Implement addToCart function
  // Should handle:
  // 1. Adding new items to cart
  // 2. Updating quantity for existing items
  // 3. Updating total price and count
  const addToCart = (product, quantity=1) => {
    console.log("Adding to cart...:", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        );
        //

      } else {
        // Add new item
        return [...prevItems,  product];
      }
    });
  };

  
  useEffect(() => {
    updateTotalPrice();
    updateItemsCount();
  }, [cartItems]);

  const updateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  };

  const updateItemsCount = () => {  
    const newItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setItemsCount(newItemsCount);
  }

  // TODO: Implement removeFromCart function
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
   
    console.log("Removing from cart...:", productId);
  };

  // TODO: Implement updateQuantity function
  const updateQuantity = (productId, newQuantity) => {
    // Your code here
    setCartItems(cartItems.map((item) => {
      if(item.id === productId){
        return {...item, quantity: newQuantity}
      }
      return item
    }))
  };

  // TODO: Implement clearCart function
  const clearCart = () => {
    setCartItems([]);
    setItemsCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemsCount,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};