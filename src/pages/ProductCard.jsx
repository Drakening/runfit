// ProductCard.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { toast } from 'react-toastify';

const ProductCard = ({ product, onRemove, onMoveToCart }) => {
  const { id, name, price, image } = product;
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(id);
    toast.success(`${name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${name} added to wishlist!`);
  };

  const handleOpenProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} onClick={handleOpenProduct} />
      <div className="product-info">
        <h3 onClick={handleOpenProduct}>{name}</h3>
        <p>R{price.toFixed(2)}</p>
        <div className="product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {onRemove && (
            <button className="remove-from-wishlist" onClick={onRemove}>
              Remove from Wishlist
            </button>
          )}
          {onMoveToCart && (
            <button className="move-to-cart" onClick={onMoveToCart}>
              Move to Cart
            </button>
          )}
          {!onRemove && (
            <button className="add-to-wishlist" onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
