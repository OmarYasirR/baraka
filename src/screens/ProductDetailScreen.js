import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useCart } from '../hooks/useCart';
import Header from '../components/common/Header';
import ProductDetail from '../components/product/ProductDetail';
import AddToCart from '../components/cart/AddToCart';
import TabView from '../components/ui/TabView';
import Button from '../components/common/Button';
import { useCustomAlert } from '../hooks/useCustomAlert';
import { Text } from '../components/GlobalText';

const ProductDetailScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToCart } = useCart();
  const { AlertComponent, showAlert } = useCustomAlert()
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = (product, qty = quantity) => {
    addToCart(product, { quantity: qty, showAlert: true });
    showAlert({
      title: ' تمت الاضافه الي العربه',
      message: `تمت اضافه ${product.name}!`
    })
  };

  const handleBuyNow = (product, qty = quantity) => {
    addToCart(product, { quantity: qty, showAlert: false });
    navigation.navigate('Checkout');
  };

  const tabs = [
    { id: 'description', title: 'الوصف' },
    { id: 'specifications', title: 'المواصفات' },
    { id: 'reviews', title: 'آراء العملاء' },
  ];

  // Sample reviews data
 const sampleReviews = [
  {
    id: 1,
    user: 'محمد أحمد',
    rating: 5,
    date: '2023-10-15',
    comment: 'منتج ممتاز! تركيب سهل وتحسن ملحوظ في الأداء.',
    verified: true
  },
  {
    id: 2,
    user: 'سارة محمد',
    rating: 4,
    date: '2023-10-10',
    comment: 'جودة جيدة وشحن سريع. سأنصح الآخرين به.',
    verified: true
  },
  {
    id: 3,
    user: 'أحمد خالد',
    rating: 5,
    date: '2023-10-08',
    comment: 'قطعة غيار أصلية وتعمل بشكل ممتاز. الشحن كان أسرع من المتوقع.',
    verified: true
  },
  {
    id: 4,
    user: 'فاطمة علي',
    rating: 4,
    date: '2023-10-05',
    comment: 'جيدة جداً بالنسبة للسعر. التركيب لم يستغرق أكثر من 30 دقيقة.',
    verified: true
  },
  {
    id: 5,
    user: 'خالد الخالدي',
    rating: 5,
    date: '2023-10-01',
    comment: 'مذهلة! فرق كبير في أداء السيارة. خدمة العملاء كانت محترفة.',
    verified: true
  },
  {
    id: 6,
    user: 'نورة السعد',
    rating: 3,
    date: '2023-09-28',
    comment: 'جيدة ولكن الشحن تأخر قليلاً. المنتج نفسه يعمل بشكل مقبول.',
    verified: true
  },
  {
    id: 7,
    user: 'عبدالله القحطاني',
    rating: 5,
    date: '2023-09-25',
    comment: 'أنصح الجميع بهذا المنتج. جودة عالية وسعر معقول.',
    verified: true
  },
  {
    id: 8,
    user: 'لطيفة الحربي',
    rating: 4,
    date: '2023-09-20',
    comment: 'منتج جيد ويستحق الثمن. التغليف كان ممتازاً.',
    verified: true
  }
];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color="#fbbf24"
      />
    ));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <View className="flex-1">
        <ScrollView 
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          <ProductDetail 
            product={product}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />

          {/* Additional Tabs */}
          <View className="mt-6">
            <TabView
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="mx-6"
            />
            
            <View className="p-6">
              {activeTab === 'description' && (
                <View>
                  <Text className="text-gray-600 leading-6">
                    {product.description}
                  </Text>
                  <View className="mt-4">
                    <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">
                      المزايا الرئيسية
                    </Text>
                    {product.features.map((feature, index) => (
                      <View key={index} className="flex-row-reverse items-center mb-2">
                        <Icon name="checkmark-circle" size={20} color="#10b981" />
                        <Text className="text-gray-600 ml-2">{feature}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
              
              {activeTab === 'specifications' && product.specifications && (
                <View className="bg-gray-50 rounded-2xl p-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <View key={key} className="flex-row justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <Text className="text-gray-600 font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Text>
                      <Text className="text-gray-800">{value}</Text>
                    </View>
                  ))}
                </View>
              )}
              
              {activeTab === 'reviews' && (
                <View>
                  <View className="flex-row-reverse items-center justify-between mb-4">
                    <View className="flex-row-reverse items-center">
                      <Icon name="star" size={24} color="#fbbf24" />
                      <Text className="text-2xl font-bold ml-2">{product.rating}</Text>
                      <Text className="text-gray-500 ml-2">({product.reviews} رائ)</Text>
                    </View>
                    <Button 
                      title="كتابه رائ"
                      variant="outline"
                      size="small"
                    />
                  </View>
                  
                  {/* Reviews List */}
                  <View className="space-y-4">
                    {sampleReviews.map((review) => (
                      <View key={review.id} className="bg-orange-50 rounded-2xl p-4">
                        <View className="flex-row-reverse justify-between items-start mb-2">
                          <View>
                            <Text className="font-semibold text-gray-800">{review.user}</Text>
                            <View className="flex-row items-center mt-1">
                              {renderStars(review.rating)}
                              {review.verified && (
                                <View className="flex-row items-center ml-2">
                                  <Icon name="checkmark-circle" size={14} color="#10b981" />
                                  <Text className="text-green-600 text-xs ml-1">Verified</Text>
                                </View>
                              )}
                            </View>
                          </View>
                          <Text className="text-gray-400 text-sm">{review.date}</Text>
                        </View>
                        <Text className="text-gray-600 leading-5">{review.comment}</Text>
                      </View>
                    ))}
                  </View>

                  {/* Load More Reviews */}
                  <Button 
                    title="عرض اراء اكثر"
                    variant="outline"
                    className="mt-4"
                  />
                </View>
              )}
            </View>
          </View>

          {/* Related Products Section */}
          <View className="px-6 pb-8">
            <Text className="text-lg font-tajawal-bold text-gray-800 mb-4">منتجات ذات صله</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3].map((item) => (
                <View key={item} className="mr-4 w-48">
                  <ProductDetail 
                    product={product}
                    onPress={() => console.log('Related product pressed')}
                    onAddToCart={handleAddToCart}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Add to Cart Section */}
        <AddToCart
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          initialQuantity={quantity}
        />
      </View>
      <AlertComponent />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;