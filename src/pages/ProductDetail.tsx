import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Item, Stock } from "@/types";
import { Menu } from "@headlessui/react";
import Button from "../components/Button";
import guestEndpoints from "./api/guestEndpoints";
import { CartContext } from "@/cartContext";
import QuantityCounter from "../components/Counter";
import Error from "next/error";
import { log } from "console";

function ProductDetail() {
  const router = useRouter();
  const { itemId } = router.query;
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [product, setProduct] = useState<Item>();
  const { addToCart } = useContext(CartContext);

  const { cart } = useContext(CartContext);

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
  }, [itemId]);

  const handleselectedQuantityChange = (newSelectedQuantity: number) => {
    setSelectedQuantity(newSelectedQuantity);
  };

  const handleAddToCart = (
    selectedQuantity: number,
    selectedSize: string | undefined
  ) => {
    if (product?.id && selectedSize) {
      const selectedProduct = {
        id: product.id,
        title: product.title,
        size: selectedSize,
        price: product.price,
        discount: product.discount,
        quantity: selectedQuantity,
        imageUrl: product.imageUrl,
        description: product.description,
      };
      console.log(selectedProduct);

      console.log("cart", cart);

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
        <div className=" p-5 grid grid-cols-1  md:grid-cols-2 space-x-10 ">
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
          <div className=" grid  content-center space-y-5  ">
            <div className="grid-rows-4 ">
              <div>
                <h2 className=" text-xl">{product.title}</h2>
                <h2 className=" text-gray-700">${product.price}</h2>
              </div>
              <div>
                <h2>Descripcion:</h2>
                <p className="font-serif">{product.description}</p>
              </div>

              <QuantityCounter
                quantity={selectedQuantity}
                onQuantityChange={handleselectedQuantityChange}
              />
              <div>
                {product?.Stocks.length ? (
                  <Menu>
                    <Menu.Button>
                      <Button
                        className={
                          "border border-gray-500 hover:border-indigo-300 w-24"
                        }
                      >
                        {!selectedSize ? "Talles" : selectedSize}
                      </Button>
                    </Menu.Button>

                    <Menu.Items>
                      {product?.Stocks.map((stock) => (
                        <Menu.Item key={stock.id}>
                          <div>
                            <Button
                              onClick={() => setSelectedSize(stock.size)}
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
                ) : (
                  "AGOTADO :("
                )}
              </div>

              <div>
                <Button
                  onClick={() =>
                    handleAddToCart(selectedQuantity, selectedSize)
                  }
                  className={
                    "mt-10 border border-gray-500 hover:border-indigo-300 "
                  }
                >
                  Agregar al carrito
                </Button>
              </div>
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
