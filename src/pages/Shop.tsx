import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import guestEndpoints from "../pages/api/guestEndpoints";
import ProductCard from "../components/ProductCard";
import { Item } from "@/types";

console.log(guestEndpoints.showProducts.url);

export const getStaticProps = async () => {
  const response = await fetch(`${guestEndpoints.showProducts.url}`, {
    cache: "no-store",
  });
  const items: Item[] = await response.json();

  if (!items) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      items,
    },
  };
};

const Shop = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
