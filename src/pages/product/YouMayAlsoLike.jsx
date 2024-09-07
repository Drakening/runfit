import React from 'react';
import ProductCard from '../ProductCard';
import { PRODUCTS } from '../../products'; // Make sure to import the PRODUCTS data

const YouMayAlsoLike = ({ currentProductId }) => {
  // Fetch related products based on currentProductId
  // Filtering out the current product and selecting the first 4 related products
  const relatedProducts = PRODUCTS
    .filter(product => product.id !== currentProductId) // Exclude the current product
    .slice(0, 4); // Limit to the first 4 products

  return (
    <div className="you-may-also-like">
      <h2>You May Also Like</h2>
      <div className="related-products">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
