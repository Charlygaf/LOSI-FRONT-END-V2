import React, {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

export interface CartItem {
  quantity: number;
  id: number;
  price: number;
  title: string;
  discount: number;
  description: string;
  imageUrl: string;
  size: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

type ChildrenType = { children?: ReactNode };

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve cart state from local storage on component mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );
      if (existingItem) {
        // If the item is already in the cart, update the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...prevCart, { ...item }];
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
