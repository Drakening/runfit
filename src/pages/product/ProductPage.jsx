// ProductPage.js
import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import Reviews from './Reviews';
import YouMayAlsoLike from './YouMayAlsoLike';

const ProductPage = ({ product }) => {
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

// ImageGallery.js
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="image-gallery">
      <img src={images[currentImage]} alt="Product" className="main-image" />
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

// ProductInfo.js
import React from 'react';

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductInfo;

// Reviews.js
import React from 'react';

const Reviews = ({ productId }) => {
  // Fetch reviews based on productId
  const reviews = []; // This would be populated with actual review data

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="stars">{/* Render star rating */}</div>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;