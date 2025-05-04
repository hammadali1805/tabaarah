import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && item.name === product.name
      );
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id && item.name === product.name 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, id: Date.now(), quantity }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      totalItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);