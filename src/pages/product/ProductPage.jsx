import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import Reviews from "./Reviews";
import YouMayAlsoLike from "./YouMayAlsoLike";

const ProductPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <ImageGallery images={product.images} />
      <ProductInfo product={product} />
      <Reviews productId={product.id} />
      <YouMayAlsoLike currentProductId={product.id} />
    </div>
  );
};

export default ProductPage;
