import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>#Stay Home</h2>
        <p>Save more with coupons and up to 70% off!</p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Product data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
