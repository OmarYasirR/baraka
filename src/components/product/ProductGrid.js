import React from 'react';
import { FlatList, View, Animated } from 'react-native';
import ProductCard from '../common/ProductCard';
import Loading from '../../components/ui/Loading';
import EmptyState from '../../components/ui/EmptyState';

const ProductGrid = ({
  products = [],
  onProductPress,
  onAddToCart,
  numColumns = 2,
  loading = false,
  emptyTitle = "No products found",
  emptyDescription = "Try adjusting your search or filters",
  className = "",
  keyProp, // new prop to handle layout switching
  ...flatListProps
}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  // Smooth fade-in animation when view/layout changes
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [keyProp]);

  //  Loading state
  if (loading) {
    return <Loading message="Loading products..." />;
  }

  // Empty state
  if (!products || products.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        icon="search"
      />
    );
  }

  // Product grid/list
  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <FlatList
        key={keyProp} // Forces FlatList to fully remount when layout changes
        data={products}
        numColumns={numColumns}
        renderItem={({ item, index }) => (
          <View
            className={`
              ${numColumns === 2 ? 'w-1/2' : 'w-full'} 
              p-2
              ${index % numColumns === 0 ? 'pl-4' : ''}
              ${index % numColumns === numColumns - 1 ? 'pr-4' : ''}
            `}
          >
            <ProductCard
              product={item}
              onPress={() => onProductPress(item)}
              onAddToCart={onAddToCart}
              variant={numColumns === 1 ? 'horizontal' : 'default'}
            />
          </View>
        )}
        keyExtractor={(item, index) =>
          item.id?.toString() ?? index.toString()
        } // prevents duplicate key warnings
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingTop: 8,
        }}
        columnWrapperStyle={numColumns > 1 ? { marginBottom: 8 } : null}
        {...flatListProps}
      />
    </Animated.View>
  );
};

export default ProductGrid;
