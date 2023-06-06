import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Item, Stock } from "@/types";
import { Menu } from "@headlessui/react";
import Button from "../components/Button";
import guestEndpoints from "./api/guestEndpoints";
import { CartContext } from "@/cartContext";
import Error from "next/error";

function ProductDetail() {
  const router = useRouter();
  const { itemId } = router.query;
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Item>();
  const { addToCart } = useContext(CartContext);
  console.log(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          guestEndpoints.showProductDetail.url + `/${itemId}`,
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
  }, []);

  const handleAddToCart = (stock: Stock) => {
    if (product?.id) {
      const selectedProduct = {
        id: product.id,
        title: product.title,
        size: stock.size,
        price: product.price,
        quantity,
        imageUrl: product.imageUrl,
        description: product.description,
      };
      addToCart(selectedProduct);
    } else {
      // Handle the case where the product ID is undefined or null
      console.error("Product ID is not available");
      // Optionally, you can show an error message or perform any other necessary action
    }
  };
  return (
    <div className="container">
      {product ? (
        <div className=" p-5 grid grid-cols-2  ">
          <div className="flex-initial ">
            <Image
              className="object-contain overflow-hidden cardImage "
              loader={() => `${product.imageUrl}`}
              unoptimized={true}
              src={`${product.imageUrl}`}
              alt={product.title}
              fill
            />
          </div>
          <div className=" grid grid-rows-3">
            <div>
              <h2 className=" text-xl">{product.title}</h2>
              <h2 className=" text-gray-700">${product.price}</h2>
            </div>
            <div>
              <h2>Descripcion:</h2>
              <p className="font-serif">{product.description}</p>
            </div>
            <div>
              {product?.Stocks && (
                <Menu>
                  <Menu.Button>
                    <Button
                      className={
                        "border border-gray-500 hover:border-indigo-300 w-24"
                      }
                    >
                      {"Talles"}
                    </Button>
                  </Menu.Button>

                  <Menu.Items>
                    {product?.Stocks.map((stock) => (
                      <Menu.Item key={stock.id}>
                        <div>
                          <Button
                            onClick={() => handleAddToCart(stock)}
                            className={
                              "border border-gray-500 hover:border-indigo-300 w-24"
                            }
                          >
                            {stock.size}
                          </Button>
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
