// CardComponent.jsx
import React from "react";
import "./CardComponent.css"; // Import CSS file for styling

const CardComponent = ({ title, imageUrl, description, rating, onRate }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? "filled" : ""}`}
              onClick={() => onRate(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
