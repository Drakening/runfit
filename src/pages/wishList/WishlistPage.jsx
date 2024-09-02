// WishlistPage.js
import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import { ShopContext } from '../context/shop-context';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, moveToCart } = useContext(ShopContext);
  const [localWishlist, setLocalWishlist] = useState([]);

  useEffect(() => {
    setLocalWishlist(wishlist);
  }, [wishlist]);

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {localWishlist.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onRemove={() => removeFromWishlist(product.id)}  // Pass remove function to ProductCard
            onMoveToCart={() => moveToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
