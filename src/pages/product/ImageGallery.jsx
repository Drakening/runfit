import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <img src={currentImage} alt="Product" className="main-image" />
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => setCurrentImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
