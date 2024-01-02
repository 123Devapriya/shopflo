// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings';
const ITEMS_PER_PAGE = 4; // Number of cards per page

function Home() {
  const [accommodations, setAccommodations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}?page=${currentPage}&limit=${ITEMS_PER_PAGE}`)
      .then(response => response.json())
      .then(data => setAccommodations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [currentPage]);

  const totalPages = Math.ceil(accommodations.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="c1">
      {/* <h1>Accommodation Listing</h1> */}
      <div >
        <img src="https://i.pinimg.com/originals/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg" />
      </div>
      <div className="accommodation-grid vnn">
        {accommodations.map(accommodation => (
          <div key={accommodation.id} className="accommodation-card">
            <img src={accommodation.imageURL} alt={accommodation.name} />
            <h2>{accommodation.name}</h2>
            <p>{accommodation.description}</p>
            <p>Price: ${accommodation.price}</p>
          </div>
        ))}
  </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>    
  );
}

export default Home;
