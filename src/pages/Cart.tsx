import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
