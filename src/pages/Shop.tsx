import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import guestEndpoints from "../pages/api/guestEndpoints";
import ProductCard from "../components/ProductCard";

type ProductsProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.API_URL + guestEndpoints.showProducts.url}`
  );
  const products: ProductsProps[] = await response.json();

  if (!products) {
    return {
      notFound: true,
    };
  }
  console.log(products);

  return {
    props: {
      products,
    },
  };
};

const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="grid grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
