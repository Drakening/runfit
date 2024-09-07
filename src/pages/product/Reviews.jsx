import React from 'react';
import './Reviews.css'; // Importing CSS for styling

const Reviews = () => {
  const reviews = [
    { text: "Great quality and fit!", rating: 5 },
    { text: "Satisfied with the product.", rating: 4 },
    { text: "Decent product but shipping was slow.", rating: 3 }
  ];

  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="stars">{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</div>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
