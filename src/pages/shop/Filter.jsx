// WishlistPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const moveToCart = (product) => {
    // Implement logic to move item to cart
    removeFromWishlist(product.id);
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onRemove={() => removeFromWishlist(product.id)}
            onMoveToCart={() => moveToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;