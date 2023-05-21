import React, { useContext } from "react";
import ProductDescription from "../SingleProductComponents/ProductDescription";
import ProductButton from "../SingleProductComponents/ProductButton";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <ProductDescription prod={prod} />
      <ProductButton prod={prod} />
    </div>
  );
};

export default SingleProduct;
