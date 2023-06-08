import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { ItemArray } from "../types";

const ProductCard = ({ item }: ItemArray) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    return (event: React.MouseEvent) => {
      router.push({ pathname: `/ProductDetail`, query: { itemId: id } });
      event.preventDefault();
    };
  };

  return (
    <div
      className="relative text-center text-gray rounded-xl
       transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  hover:backdrop-blur-md   duration-300 ..."
    >
      <button onClick={handleClick(item.id)}>
        <h3>{item.title}</h3>
        <div>
          <Image
            className="object-contain overflow-hidden cardImage "
            loader={() => `${item.imageUrl}`}
            src={`${item.imageUrl}`}
            alt={item.title}
            fill
          />
        </div>
      </button>{" "}
    </div>
  );
};

export default ProductCard;
