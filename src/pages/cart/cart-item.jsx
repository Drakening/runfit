// CartItem.js
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, moveToWishlist } = useContext(ShopContext);

  const handleClearItem = () => {
    updateCartItemCount(0, id);
  };

  const handleMoveToWishlist = () => {
    moveToWishlist(id);
    updateCartItemCount(0, id); // Remove from cart
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt="product" />
      <div className="description">
        <p className="title-x">
          <b>{productName}</b>
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <p className="price-x"> Price: R{price}</p>
        <button onClick={handleClearItem} className="clear-item-button">
          Delete
        </button>
        <button onClick={handleMoveToWishlist} className="move-to-wishlist-button">
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};
