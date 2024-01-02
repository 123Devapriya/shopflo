// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';
import ListingDetails from './ListingDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<ListingDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
