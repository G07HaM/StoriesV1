import React from 'react';
import { useLocation } from 'react-router-dom';
import StoriesList from './StoriesList';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Search Results for "{query}"</h1>
      <StoriesList searchTerm={query} />
    </div>
  );
};

export default SearchResults;