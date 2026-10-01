import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Text } from '../components/GlobalText';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import SearchBar from "../components/common/SearchBar";
import ProductGrid from "../components/product/ProductGrid";
import { theme } from "../styles/colors";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    products,
    categories,
    getProductsByCategory,
    setSelectedCategory,
    selectedCategory,
  } = useProducts();
  const { addToCart } = useCart();

  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState("default"); // sorting state
  const [showSortMenu, setShowSortMenu] = useState(false); // toggle sort menu
  const [key, setKey] = useState("grid");

  const initialCategory = route.params?.initialCategory;

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category.slug);
  };

  // Filtered Products by Category
  const filteredProducts = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : products;

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // default = featured or original order
        sorted = filteredProducts;
    }

    return sorted;
  }, [filteredProducts, sortBy]);

  const sortOptions = [
    { id: "default", title: "مميزه" },
    { id: "price-low", title: "سعر: اقل" },
    { id: "price-high", title: "سعر: اعلى" },
    { id: "rating", title: "اعلي تقييم" },
    { id: "name", title: "الاسم" },
  ];

  useEffect(() => {
    // Update key only when viewMode changes
    setKey(`${viewMode}-${Date.now()}`);
  }, [viewMode]);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Search Bar */}
      <View className="px-6 py-4">
        <SearchBar
          placeholder="البحث في الفئات "
          onFocus={() => navigation.navigate("Search")}
        />
      </View>

      {/* Category Scroll */}
      <View className="pb-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-6"
          contentContainerStyle={{
            paddingLeft: 18,
            paddingRight: 10,
            flexDirection: "row-reverse",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: !selectedCategory
                ? theme.praimary
                : theme.background,
            }}
            className="px-4 py-3 rounded-2xl mr-3 shadow-sm"
            onPress={() => setSelectedCategory(null)}
          >
            <Text
              className={`font-tajawal ${
                !selectedCategory ? "text-white font-tajawal-bold" : "text-gray-700"
              }`}
            >
              كل المنتجات
            </Text>
          </TouchableOpacity>

          {categories.map((category, i) => (
            <TouchableOpacity
              key={category.id}
              style={{
                backgroundColor:
                  selectedCategory === category.slug
                    ? theme.praimary
                    : theme.background,
              }}
              className="px-4 py-3 rounded-2xl mr-3 shadow-sm"
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                className={`font-medium ${
                  selectedCategory === category.slug
                    ? "text-white font-tajawal-bold"
                    : "text-gray-700"
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Toolbar */}
      <View className="flex-row-reverse justify-between items-center px-6 pb-4">
        <Text className="text-gray-600">{sortedProducts.length} منتج</Text>

        <View className="flex-row-reverse items-center space-x-3">
          {/* Sort Dropdown */}
          <View>
            <TouchableOpacity
              className="flex-row-reverse items-center"
              onPress={() => setShowSortMenu(!showSortMenu)}
            >
              <Text className="text-gray-600 font-tajawal-extrabold mr-1">ترتيب:  </Text>
              <Text style={{ color: theme.praimary }} className="font-medium">
                {sortOptions.find((opt) => opt.id === sortBy)?.title ||
                  "Featured"}
              </Text>
              <Icon
                name={showSortMenu ? "chevron-up" : "chevron-down"}
                size={16}
                color={theme.praimary}
              />
            </TouchableOpacity>

            {showSortMenu && (
              <View className="absolute top-8 right-0 bg-white rounded-xl shadow-md z-10">
                {sortOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    className="px-4 py-2"
                    onPress={() => {
                      setSortBy(option.id);
                      setShowSortMenu(false);
                    }}
                  >
                    <Text
                      className={`${
                        sortBy === option.id
                          ? "font-semibold text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {option.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/*View Toggle */}
          <View className="flex-row-reverse bg-white rounded-2xl p-1 shadow-sm">
            <TouchableOpacity
              className={`p-2 rounded-xl`}
              style={{
                backgroundColor:
                  viewMode === "grid" ? theme.background : "white",
              }}
              onPress={() => setViewMode("grid")}
            >
              <Icon
                name="grid"
                size={16}
                color={viewMode === "grid" ? theme.praimary : "#6b7280"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-2 rounded-xl`}
              style={{
                backgroundColor:
                  viewMode === "list" ? theme.background : "white",
              }}
              onPress={() => setViewMode("list")}
            >
              <Icon
                name="list"
                size={16}
                color={viewMode === "list" ? theme.praimary : "#6b7280"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Products */}
      <ProductGrid
        key={viewMode}
        products={sortedProducts}
        onProductPress={handleProductPress}
        onAddToCart={addToCart}
        numColumns={viewMode === "grid" ? 2 : 1}
        className="flex-1"
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
