import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from '../common/ProductCard';
import Loading from '../../components/ui/Loading';
import EmptyState from '../../components/ui/EmptyState';

const ProductList = ({ 
  products, 
  onProductPress, 
  onAddToCart,
  loading = false,
  variant = 'default', // 'default' | 'compact'
  emptyTitle = "No products found",
  emptyDescription = "Try adjusting your search or filters",
  className = "",
  ...flatListProps
}) => {
  if (loading) {
    return <Loading message="Loading products..." />;
  }

  if (!products || products.length === 0) {
    return (
      <EmptyState 
        title={emptyTitle}
        description={emptyDescription}
        icon="search"
      />
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View className="px-4 mb-3">
          <ProductCard 
            product={item} 
            onPress={() => onProductPress(item)}
            onAddToCart={onAddToCart}
            variant={variant === 'compact' ? 'horizontal' : 'default'}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ 
        paddingVertical: 8,
      }}
      {...flatListProps}
    />
  );
};

export default ProductList;