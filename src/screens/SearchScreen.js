import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/common/SearchBar';
import ProductCard from '../components/common/ProductCard';
import ProductList from '../components/product/ProductList';
import Header from '../components/common/Header';
import Loading from '../components/ui/Loading';
import EmptyState from '../components/ui/EmptyState';

const SearchScreen = () => {
  const navigation = useNavigation();
  const { searchProducts, products, loading } = useProducts();
  const { addToCart } = useCart();
  const { searchQuery, setSearchQuery } = useApp();
  
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(['Spark Plug', 'Brake Pads', 'Oil Filter', 'Air Filter']);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchProducts(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const handleRecentSearchPress = (searchTerm) => {
    setSearchQuery(searchTerm);
  };

  const addToRecentSearches = (term) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== term);
      return [term, ...filtered].slice(0, 5);
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  if (loading) {
    return <Loading message="Searching..." />;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header with Search */}
      <View className="px-6 pt-6 pb-4 bg-white border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="mr-4"
          >
            <Icon name="chevron-back" size={24} color="#374151" />
          </TouchableOpacity>
          <View className="flex-1">
            <SearchBar
              placeholder="Search for parts, brands, categories..."
              value={searchQuery}
              onChangeText={handleSearch}
              onClear={handleClearSearch}
              autoFocus={true}
              onSubmit={() => {
                if (searchQuery.trim()) {
                  addToRecentSearches(searchQuery);
                }
              }}
            />
          </View>
        </View>
      </View>

      {showResults ? (
        // Search Results
        <View className="flex-1">
          <View className="px-6 py-4 bg-white border-b border-gray-200">
            <Text className="text-gray-600">
              {searchResults.length} results for "{searchQuery}"
            </Text>
          </View>
          
          {searchResults.length > 0 ? (
            <ProductList
              products={searchResults}
              onProductPress={handleProductPress}
              onAddToCart={addToCart}
              variant="compact"
              className="flex-1"
            />
          ) : (
            <EmptyState
              title="No results found"
              description="Try different keywords or browse categories"
              icon="search"
              actionLabel="Browse Categories"
              onAction={() => navigation.navigate('Categories')}
            />
          )}
        </View>
      ) : (
        // Recent Searches and Suggestions
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <View className="px-6 py-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-semibold text-gray-800">Recent Searches</Text>
                <TouchableOpacity onPress={clearRecentSearches}>
                  <Text className="text-blue-600 font-medium">Clear All</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row flex-wrap">
                {recentSearches.map((search, index) => (
                  <TouchableOpacity 
                    key={index}
                    className="bg-white px-4 py-3 rounded-2xl mr-3 mb-3 shadow-sm"
                    onPress={() => handleRecentSearchPress(search)}
                  >
                    <Text className="text-gray-700 font-medium">{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Popular Categories */}
          <View className="px-6 pb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Popular Categories</Text>
            <View className="flex-row flex-wrap justify-between">
              {[
                { name: 'Engine Parts', icon: 'settings', count: '245' },
                { name: 'Brakes', icon: 'disc', count: '189' },
                { name: 'Suspension', icon: 'git-compare', count: '156' },
                { name: 'Electrical', icon: 'flash', count: '278' },
              ].map((category, index) => (
                <TouchableOpacity 
                  key={index}
                  className="w-1/2 p-2"
                  onPress={() => navigation.navigate('Categories')}
                >
                  <View className="bg-white rounded-2xl p-4 items-center shadow-sm">
                    <Icon name={category.icon} size={32} color="#2563eb" />
                    <Text className="text-gray-800 font-medium mt-2 text-center">
                      {category.name}
                    </Text>
                    <Text className="text-gray-500 text-xs mt-1">
                      {category.count} products
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Trending Products */}
          <View className="px-6 pb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-4">Trending Products</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.slice(0, 4).map((product) => (
                <View key={product.id} className="mr-4 w-48">
                  <ProductCard 
                    product={product}
                    onPress={() => handleProductPress(product)}
                    onAddToCart={addToCart}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;