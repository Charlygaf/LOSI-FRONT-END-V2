import Image from "next/image";
import React from "react";

type ProductProps = {
  product: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  console.log(product.imageUrl);

  return (
    <div
      id="productCard"
      className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  hover:backdrop-blur-md   duration-300 ..."
    >
      <Image
        loader={() => `${product.imageUrl}`}
        src={`${product.imageUrl}`}
        alt={product.title}
        fill
      />
      {product.title}{" "}
    </div>
  );
};

export default ProductCard;
