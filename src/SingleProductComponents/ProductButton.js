import React, { useContext } from "react";
import { cartContext } from "../Context";

const ProductButton = ({ prod }) => {
  const { cart, setCart } = useContext(cartContext);

  return cart.includes(prod) ? (
    <button
      className="add"
      onClick={() => {
        setCart(cart.filter((c) => c.id !== prod.id));
      }}
    >
      Remove from cart
    </button>
  ) : (
    <button
      className="add"
      onClick={() => {
        setCart([...cart, prod]);
      }}
    >
      Add to cart
    </button>
  );
};

export default ProductButton;
