// src/components/ListingCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ accommodation }) {
  return (
    <Link to={`/details/${accommodation.id}`} className="listing-card">
      <img src={accommodation.imageURL} alt={accommodation.name} />
      <h2>{accommodation.name}</h2>
      <p>{accommodation.description}</p>
      <p>Price: ${accommodation.price}</p>
    </Link>
  );
}

export default ListingCard;
