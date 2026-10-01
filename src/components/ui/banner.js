import React, { useRef, useEffect, useState } from 'react';
import { View, Image, ScrollView, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors, { theme } from '../../styles/colors';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: 1,
    title: 'Performance You Can Feel',
    subtitle: 'Upgrade your ride with top-tier engine parts.',
    image: require('../../assets/banner (1).png'),
  },
  {
    id: 2,
    title: 'Brake with Confidence',
    subtitle: 'Premium brake kits from trusted brands.',
    image: require('../../assets/banner (2).png'),
  },
  {
    id: 3,
    title: 'Shine on the Road',
    subtitle: 'Lighting and accessories to make your car stand out.',
    image: require('../../assets/banner (3).png'),
  },
];

const AutoBanner = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View className="relative h-52 mt-2 mb-3 bg-white">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      >
        {banners.map((banner) => (
          <View key={banner.id} style={{ width }}>
            <Image
              source={banner.image}
              className="w-full h-52 rounded-2xl"
              resizeMode=""
            />
            
            <View className="absolute inset-0 bg-black/40 rounded-2xl" />
            <View className="absolute bottom-5 left-5  p-2 py-1">
              <Text className="text-white text-xl font-bold">{banner.title}</Text>
              <Text className="text-gray-200 text-sm mt-1">{banner.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Dots Indicator */}
      <View className="absolute bottom-2 w-full flex-row justify-center space-x-2">
        {banners.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full ${i === currentIndex ? 'w-6' : 'w-2'}`}
            style={{backgroundColor: i === currentIndex? theme.praimary : theme.background }}
          />
        ))}
      </View>
    </View>
  );
};

export default AutoBanner;
