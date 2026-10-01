import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { formatPrice } from '../utils/helpers';
import { mockAddresses } from '../data/mockData';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const { cart, getCartSummary, clearCart } = useCart();
  const { user } = useAuth();
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedAddress, setSelectedAddress] = useState(mockAddresses[0]);
  const [loading, setLoading] = useState(false);
  
  const cartSummary = getCartSummary();

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      Alert.alert(
        'Order Confirmed!',
        `Your order has been placed successfully. Order #${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        [
          {
            text: 'Continue Shopping',
            onPress: () => {
              clearCart();
              navigation.navigate('Home');
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const PaymentMethod = ({ method, title, icon, description }) => (
    <TouchableOpacity 
      className={`flex-row items-center p-4 rounded-2xl border-2 mb-3 ${
        paymentMethod === method ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
      onPress={() => setPaymentMethod(method)}
    >
      <Icon name={icon} size={24} color="#2563eb" />
      <View className="flex-1 ml-3">
        <Text className="text-gray-800 font-medium">{title}</Text>
        <Text className="text-gray-500 text-sm mt-1">{description}</Text>
      </View>
      {paymentMethod === method && (
        <Icon name="checkmark-circle" size={20} color="#2563eb" />
      )}
    </TouchableOpacity>
  );

  const AddressCard = ({ address, isSelected, onSelect }) => (
    <TouchableOpacity 
      className={`p-4 rounded-2xl border-2 mb-3 ${
        isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
      onPress={onSelect}
    >
      <View className="flex-row justify-between items-start mb-2">
        <Text className="font-semibold text-gray-800">{address.title}</Text>
        {address.isDefault && (
          <View className="bg-green-100 px-2 py-1 rounded-full">
            <Text className="text-green-800 text-xs font-medium">Default</Text>
          </View>
        )}
      </View>
      <Text className="text-gray-600">{address.fullName}</Text>
      <Text className="text-gray-600">{address.street}</Text>
      <Text className="text-gray-600">
        {address.city}, {address.state} {address.zipCode}
      </Text>
      <Text className="text-gray-600">{address.country}</Text>
      <Text className="text-gray-600 mt-2">{address.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Checkout"
        showBack={true}
      />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        {/* Shipping Address */}
        <View className="bg-white rounded-2xl mx-4 mt-4 p-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-4">Shipping Address</Text>
          
          {mockAddresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              isSelected={selectedAddress.id === address.id}
              onSelect={() => setSelectedAddress(address)}
            />
          ))}
          
          <Button 
            title="Add New Address"
            variant="outline"
            icon="add"
            className="mt-2"
          />
        </View>

        {/* Payment Method */}
        <View className="bg-white rounded-2xl mx-4 mt-4 p-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-4">Payment Method</Text>
          
          <PaymentMethod
            method="card"
            title="Credit/Debit Card"
            icon="card-outline"
            description="Pay with your credit or debit card"
          />
          
          <PaymentMethod
            method="paypal"
            title="PayPal"
            icon="logo-paypal"
            description="Pay with your PayPal account"
          />
          
          <PaymentMethod
            method="cash"
            title="Cash on Delivery"
            icon="cash-outline"
            description="Pay when you receive your order"
          />
        </View>

        {/* Order Summary */}
        <View className="bg-white rounded-2xl mx-4 mt-4 p-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-4">Order Summary</Text>
          
          {/* Order Items */}
          <View className="mb-4">
            {cart.items.map((item) => (
              <View key={item.id} className="flex-row justify-between items-center py-2 border-b border-gray-100">
                <View className="flex-1">
                  <Text className="text-gray-800 font-medium" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text className="text-gray-500 text-sm">
                    Qty: {item.quantity} × {formatPrice(item.price)}
                  </Text>
                </View>
                <Text className="text-gray-800 font-semibold">
                  {formatPrice(item.price * item.quantity)}
                </Text>
              </View>
            ))}
          </View>
          
          {/* Price Breakdown */}
          <View className="space-y-2">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Subtotal</Text>
              <Text className="text-gray-800 font-semibold">
                {formatPrice(cartSummary.subtotal)}
              </Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Shipping</Text>
              <Text className="text-gray-800 font-semibold">
                {cartSummary.hasFreeShipping ? 'Free' : formatPrice(cartSummary.shipping)}
              </Text>
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Tax</Text>
              <Text className="text-gray-800 font-semibold">
                {formatPrice(cartSummary.tax)}
              </Text>
            </View>
            
            <View className="flex-row justify-between pt-3 border-t border-gray-200">
              <Text className="text-lg font-bold text-gray-800">Total</Text>
              <Text className="text-lg font-bold text-blue-600">
                {formatPrice(cartSummary.total)}
              </Text>
            </View>
          </View>
        </View>

        {/* Additional Space */}
        <View className="h-20" />
      </ScrollView>

      {/* Place Order Button */}
      <View className="bg-white border-t border-gray-200 p-6">
        <Button 
          title={`Place Order - ${formatPrice(cartSummary.total)}`}
          onPress={handlePlaceOrder}
          loading={loading}
          disabled={cart.items.length === 0}
          size="large"
        />
        
        <Text className="text-gray-500 text-xs text-center mt-3">
          By placing your order, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;