import React, { createContext, useContext, useState, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  weight: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.weight === item.weight);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.weight === item.weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id.split("__")[0] && i.weight === id.split("__")[1])));
  }, []);

  const updateQuantity = useCallback((compositeId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => `${i.id}__${i.weight}` !== compositeId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (`${i.id}__${i.weight}` === compositeId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
