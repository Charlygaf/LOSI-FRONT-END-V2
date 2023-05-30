import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Item } from "@/types";
import guestEndpoints from "./api/guestEndpoints";

function ProductDetail() {
  const router = useRouter();
  const { itemId } = router.query;
  const [product, setProduct] = useState<Item | null>(null);
  console.log(process.env.API_URL);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          process.env.API_URL +
            guestEndpoints.showProductDetail.url +
            `/${itemId}`,
          {
            cache: "no-store",
          }
        );
        const item: Item = await response.json();

        if (!item) {
          return {
            notFound: true,
          };
        }

        return setProduct(item);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (itemId) {
      fetchProductData();
    }
  }, [itemId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {product ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-2">Price: ${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          {/* Render other product details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
