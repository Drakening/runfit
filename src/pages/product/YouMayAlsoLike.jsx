import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import './YouMayAlsoLike.css';  // Importing CSS

const YouMayAlsoLike = ({ currentProductId }) => {
  const navigate = useNavigate();
  
  const relatedProducts = PRODUCTS.filter(product => product.id !== currentProductId).slice(0, 4);

  return (
    <div className="you-may-also-like">
      <h2>You May Also Like</h2>
      <div className="related-products">
        {relatedProducts.map(product => (
          <div key={product.id} className="related-product" onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.productImage} alt={product.productName} />
            <p>{product.productName}</p>
            <p>R{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
