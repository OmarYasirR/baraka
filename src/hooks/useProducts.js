import { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { products, searchProducts, getProductsByCategory, filterProducts, sortProducts } from '../data/products';
import { categories } from '../data/categories';

import { debounce } from '../utils/helpers';

export const useProducts = () => {
  const { setLoading, setError, searchQuery, filters } = useApp();
  
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('default');

  // Search products with debounce
  const searchProductsDebounced = useMemo(
    () => debounce((query, productsList) => {
      if (!query.trim()) {
        return productsList;
      }
      return searchProducts(query);
    }, 300),
    []
  );

  // Filter products based on current filters
  const applyFilters = (productsList) => {
    let filtered = productsList;

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply brand filter
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    // Apply price range filter
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice);
    }

    // Apply in stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply rating filter
    if (filters.minRating) {
      filtered = filtered.filter(product => product.rating >= filters.minRating);
    }

    return filtered;
  };

  // Sort products
  const applySorting = (productsList) => {
    return sortProducts(productsList, sortBy);
  };

  // Update filtered products when dependencies change
  useEffect(() => { 
    // console.log(products)
    const updateProducts = async () => {
      try {
        setLoading(true);
        
        let result = allProducts;

        // Apply search
        if (searchQuery) {
          result = await new Promise((resolve) => {
            searchProductsDebounced(searchQuery, allProducts, (filtered) => {
              resolve(filtered);
            });
          });
        }

        // Apply filters
        result = applyFilters(result);

        // Apply sorting
        result = applySorting(result);

        setFilteredProducts(result);
      } catch (error) {
        setError('Failed to filter products');
        console.error('Product filtering error:', error);
      } finally {
        setLoading(false);
      }
    };

    // updateProducts();
  }, [allProducts, searchQuery, filters, sortBy, searchProductsDebounced, setLoading, setError]);

  const getFeaturedProducts = () => {
    return allProducts
      .filter(product => product.rating >= 4.7 && product.reviews > 500)
      .slice(0, 6);
  };

  const getPopularProducts = () => {
    return allProducts
      .filter(product => product.inStock)
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, 8);
  };

  const getNewArrivals = () => {
    return allProducts
      .sort((a, b) => b.id - a.id)
      .slice(0, 6);
  };

  const getProductsByCategorySlug = (categorySlug) => {
    return getProductsByCategory(categorySlug);
  };

  const getProductById = (id) => {
    return allProducts.find(product => product.id === parseInt(id));
  };

  const getRelatedProducts = (product, limit = 4) => {
    return allProducts
      .filter(p => 
        p.id !== product.id && 
        (p.category === product.category || p.brand === product.brand)
      )
      .slice(0, limit);
  };

  const getBrands = () => {
    const brands = [...new Set(allProducts.map(product => product.brand))];
    return brands.map(brand => ({
      name: brand,
      count: allProducts.filter(product => product.brand === brand).length,
    })).sort((a, b) => b.count - a.count);
  };

  const getPriceRanges = () => {
    const prices = allProducts.map(p => p.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    
    return {
      min,
      max,
      ranges: [
        { label: 'Under $25', min: 0, max: 25 },
        { label: '$25 - $50', min: 25, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: 'Over $200', min: 200, max: Infinity },
      ],
    };
  };

  const getCategoriesWithCounts = () => {
    console.log(categories)
    return categories.map(category => ({
      ...category,
      count: allProducts.filter(product => product.category === category.slug).length,
    }));
  };

  const refreshProducts = () => {
    // In a real app, this would fetch from API
    setAllProducts([...products]);
  };

  return {
    // State
    products: filteredProducts,
    allProducts: allProducts,
    categories: getCategoriesWithCounts(),
    featuredProducts: getFeaturedProducts(),
    popularProducts: getPopularProducts(),
    newArrivals: getNewArrivals(),
    selectedCategory,
    sortBy,
    
    // Actions
    setSelectedCategory,
    setSortBy,
    refreshProducts,
    getProductsByCategory: getProductsByCategorySlug,
    getProductById,
    getRelatedProducts,
    getBrands,
    getPriceRanges,
    
    // State helpers
    hasProducts: filteredProducts.length > 0,
    productCount: filteredProducts.length,
    isLoading: false, // You can connect this to your loading state
  };
};