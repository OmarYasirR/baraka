import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import colors, { theme } from '../../styles/colors';
import { Text } from '../../components/GlobalText';


const Header = ({ title, showCart = true, onCartPress, showBack }) => {
  const navigation = useNavigation()
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();
  const backHandler = () => {
    navigation.goBack()
  }
  

  return (
    <View
      className={`flex-row-reverse items-center justify-between pr-2 py-4 border-b border-orange-200`}
      style={{backgroundColor: `${theme.background}`}}
      >
      <View className="flex-row-reverse items-center">
        {showBack && (
          <TouchableOpacity onPress={backHandler} className="mr-4">
            <Icon name="chevron-forward" size={24} color={theme.praimary} />
          </TouchableOpacity>
        )}
        <Text
          className={`text-xl font-tajawal`}
          style={{color: `${theme.praimary}`}}
        >{title}</Text>
      </View>

      {showCart && (
        <TouchableOpacity 
          className="relative"
          onPress={onCartPress}
        >
          <Icon name="cart-outline" size={24} color={theme.praimary} />
          {cartItemsCount > 0 && (
            <View className="absolute -top-2 -right-2 rounded-full w-5 h-5 items-center justify-center" style={{ backgroundColor: '#ef4444' }}>
              <Text className="text-white text-xs font-bold">{cartItemsCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;