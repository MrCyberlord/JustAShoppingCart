import React from "react";
import "../components/styles.css";

const ProductDescription = ({ prod }) => {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span> ₹ {prod.price.substring(0, 3)}</span>
      </div>
    </div>
  );
};

export default ProductDescription;
