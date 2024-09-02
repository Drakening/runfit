// ProductInfo.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const ProductInfo = ({ product }) => {
  const { addToCart, addToWishlist, wishlist } = useContext(ShopContext);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart" onClick={() => addToCart(product.id)}>
        Add to Cart
      </button>
      <button 
        className={`wishlist-button ${isInWishlist ? 'in-wishlist' : ''}`}
        onClick={handleAddToWishlist}
      >
        {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default ProductInfo;
