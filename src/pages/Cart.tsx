import React, { useContext } from "react";
import { CartContext } from "../cartContext";
import CartProductCard from "@/components/CartProductCard";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <div className=" text-center">
        <div className="text-2xl">Carrito</div>
        <div className=" text-center border rounded-lg border-gray-500 hover:border-indigo-300 ">
          {cart.length >= 0
            ? cart.map((item) => (
                <CartProductCard key={item.id} CartItem={item} />
              ))
            : "Carrito Vacio"}
        </div>
      </div>
    </>
  );
};

export default Cart;
