"use client";

import React from "react";
import { RiAddLine } from "react-icons/ri";

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  return (
    <button className="p-2 bg-white cart-button rounded-full text-xs flex gap-2 items-center">
      <RiAddLine className="w-5 h-5" />
      Add to cart
    </button>
  );
};

export default CartButton;
