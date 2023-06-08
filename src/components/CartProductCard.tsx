import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { CartItem } from "@/cartContext";

interface CartItemArray {
  CartItem: CartItem;
}

const CartProductCard = ({ CartItem }: CartItemArray) => {
  const router = useRouter();

  return (
    <div className="p-5 grid grid-cols-2 space-x-10 ">
      <div>
        <Image
          className="object-contain overflow-hidden cardImage "
          loader={() => `${CartItem.imageUrl}`}
          src={`${CartItem.imageUrl}`}
          alt={CartItem.title}
          width={100}
          height={100}
        />
      </div>{" "}
      <div>
        <h3>{CartItem.title}</h3>
        <p> Cantidad: {CartItem.quantity}</p>
        <p> Precio unitario: {CartItem.price}</p>
      </div>
    </div>
  );
};

export default CartProductCard;
