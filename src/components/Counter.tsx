import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface QuantityCounterProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  quantity,
  onQuantityChange,
}) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex items-center  mt-4">
      <button
        type="button"
        className=" p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={handleDecrease}
      >
        <FontAwesomeIcon icon={faMinus} className="text-gray-600" />
      </button>
      <span className="mx-2 text-xl">{quantity}</span>
      <button
        type="button"
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={handleIncrease}
      >
        <FontAwesomeIcon icon={faPlus} className="text-gray-600" />
      </button>
    </div>
  );
};

export default QuantityCounter;
