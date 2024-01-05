import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import SearchResults from '../components/product/SearchResults';
function SearchResultsPage() {
  const { products } = useContext(ShopContext);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [products, searchQuery]);
  

  return (
    <div>
      <h1 className="p-4">Search Results for "{searchQuery}"</h1>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default SearchResultsPage;
