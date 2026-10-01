import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { searchProducts } from '../data/products';

export const useLocalSearch = (initialQuery = '', delay = 300) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      const searchResults = searchProducts(debouncedQuery);
      setResults(searchResults);
      setLoading(false);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return {
    query,
    setQuery,
    results,
    loading,
    clearSearch,
    hasResults: results.length > 0,
  };
};