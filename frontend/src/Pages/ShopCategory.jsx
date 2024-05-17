import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";

function ShopCategory({ banner }) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={banner} alt="" />
    </div>
  );
}

export default ShopCategory;
