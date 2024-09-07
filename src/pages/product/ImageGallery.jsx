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