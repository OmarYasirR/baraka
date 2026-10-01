import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from './ProductCard';

const ProductGrid = ({ 
  products, 
  onProductPress, 
  onAddToCart,
  numColumns = 2 
}) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View className={`${numColumns === 2 ? 'w-1/2' : 'w-1/3'} p-2`}>
          <ProductCard 
            product={item} 
            onPress={() => onProductPress(item)}
            onAddToCart={onAddToCart}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default ProductGrid;