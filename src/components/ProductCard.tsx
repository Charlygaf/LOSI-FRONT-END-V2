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
      className="relative h-96 text-center text-gray rounded-xl
       transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  hover:backdrop-blur-md   duration-300 ..."
    >
      <Image
        className="object-contain overflow-hidden"
        loader={() => `${product.imageUrl}`}
        unoptimized={true}
        src={`${product.imageUrl}`}
        alt={product.title}
        fill
      />
      {product.title}{" "}
    </div>
  );
};

export default ProductCard;
