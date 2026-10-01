import React, { useEffect, useLayoutEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Text } from '../components/GlobalText';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import SearchBar from '../components/common/SearchBar';
import ProductCard from '../components/common/ProductCard';
import CategoryCard from '../components/common/CategoryCard';
import Loading from '../components/ui/Loading';
import Banner from '../components/ui/banner'

const HomeScreen = () => {
  const navigation = useNavigation();
  const { featuredProducts, popularProducts, categories, loading } = useProducts();
  const { addToCart } = useCart();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('Categories', { 
      screen: 'CategoriesMain',
      params: { initialCategory: category.slug }
    });
  };

  if (loading) {
    return <Loading message="Loading products..." />;
  }

  
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >

        {/* Search Bar */}
        <View className="px-6 py-4">
          <SearchBar 
            placeholder={'  البحث عن قطع غيار'}
            onFocus={() => navigation.navigate('Search')}
          />
        </View>

        {/* Promo Banner */}
        <Banner />

        {/* Categories */}
        <View className="pb-6">
          <View className={`flex-row-reverse justify-between items-center px-6 mb-4`}>
            <Text className="text-xl font-tajawal-bold text-gray-800">الفئات</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Text className="text-red-500 font-semibold">عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className="px-6"
            contentContainerStyle={{
              paddingLeft: 18,
          }}
          >
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                category={category}
                onPress={() => handleCategoryPress(category)}
                className="mr-1"
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="pb-6">
          <View className="flex-row-reverse justify-between items-center px-6 mb-4">
            <Text className="text-lg font-tajawal-bold text-gray-800">عروض خاصة</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Text className="text-red-500 font-semibold">عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className="px-6"
            contentContainerStyle={{
              paddingLeft: 20
          }}
          >
            {featuredProducts.map((product) => (
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

        {/* Popular Products */}
        <View className="pb-8">
          <View className="flex-row-reverse justify-between items-center px-6 mb-4">
            <Text className="text-lg font-tajawal-bold text-gray-800">رائج هذا الاسبوع</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Text className="text-red-600 font-semibold">عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20
            }}
            className="px-6"
          >
            {popularProducts.map((product) => (
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

        {/* Services Section */}
        <View className="px-6 pb-8">
          <Text
            className="font-tajawal-extrabold text-2xl text-red-600 mb-4">لماذا تختارنا</Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="w-1/2 p-2">
              <View className="bg-white rounded-2xl p-4 items-center shadow-sm">
                <Icon name="shield-checkmark" size={32} color="#10b981" />
                <Text className="font-tajawal-extrabold text-gray-800 font-semibold mt-2 text-center">ضمان يصل سنتين</Text>
                <Text className="text-gray-500 text-xs mt-1 text-center">في اغلب المنتجات</Text>
              </View>
            </View>
            <View className="w-1/2 p-2">
              <View className="bg-white rounded-2xl p-4 items-center shadow-sm">
                <Icon name="rocket" size={32} color="#3b82f6" />
                <Text className="font-tajawal-extrabold text-gray-800 font-semibold mt-2 text-center">تسوق سريع</Text>
                <Text className="text-gray-500 text-xs mt-1 text-center">شحن مجاني للطلبات فوق ٥٠ الف</Text>
              </View>
            </View>
            <View className="w-1/2 p-2">
              <View className="bg-white rounded-2xl p-4 items-center shadow-sm">
                <Icon name="headset" size={32} color="#f59e0b" />
                <Text className="font-tajawal-extrabold text-gray-800 font-semibold mt-2 text-center">دعم فني متخصص</Text>
                <Text className="text-gray-500 text-xs mt-1 text-center">خدمة متاحة طوال الوقت</Text>
              </View>
            </View>
            <View className="w-1/2 p-2">
              <View className="bg-white rounded-2xl p-4 items-center shadow-sm">
                <Icon name="return-up-back" size={32} color="#ef4444" />
                <Text className="text-gray-800 font-tajawal-extrabold font-semibold mt-2 text-center">سياسة إرجاع ميسرة</Text>
                <Text className="text-gray-500 text-xs mt-1 text-center">ضمان لمدة 30 يوم</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;