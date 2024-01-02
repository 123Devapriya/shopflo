// src/ListingDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}?id=11`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(error => console.error('Error fetching listing details:', error));
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-details">
      <img src={listing.imageURL} alt={listing.name} />
      <h2>{listing.name}</h2>
      <p>{listing.description}</p>
      <p>Price: ${listing.price}</p>
      <button>Call to Action</button>
    </div>
  );
};

export default ListingDetails;
