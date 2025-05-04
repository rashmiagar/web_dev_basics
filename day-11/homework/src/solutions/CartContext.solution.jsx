import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Update existing item quantity
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity }];
      }
    });

    // Update total count and price
    setItemsCount((prev) => prev + quantity);
    setTotalPrice((prev) => prev + product.price * quantity);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) {
        setItemsCount((prev) => prev - itemToRemove.quantity);
        setTotalPrice(
          (prev) => prev - itemToRemove.price * itemToRemove.quantity
        );
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 0) return;

    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === productId) {
          const quantityDiff = newQuantity - item.quantity;
          setItemsCount((prev) => prev + quantityDiff);
          setTotalPrice((prev) => prev + item.price * quantityDiff);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setItemsCount(0);
    setTotalPrice(0);
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
