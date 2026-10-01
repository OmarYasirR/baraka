import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';

const TermsOfServiceScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Terms of Service"
        showBack={true}
      />
      
      <ScrollView className="flex-1 p-4">
        <Text className="text-lg font-bold text-gray-800 mb-6">
          Terms and Conditions
        </Text>

        <View className="space-y-6">
          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Account Registration</Text>
            <Text className="text-gray-600 leading-6">
              After creating an account. You are responsible 
              for maintaining the confidentiality of your account and password and for 
              restricting access to your computer or device.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Product Information</Text>
            <Text className="text-gray-600 leading-6">
              We strive to provide accurate product information, but we do not warrant 
              that product descriptions, pricing, or other content is accurate, complete, 
              reliable, current, or error-free.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Pricing and Payment</Text>
            <Text className="text-gray-600 leading-6">
              All prices are in US dollars. We reserve the right to change prices at any 
              time. Payment must be made at the time of order. We accept major credit cards 
              and PayPal.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Shipping and Delivery</Text>
            <Text className="text-gray-600 leading-6">
              Shipping times are estimates and not guaranteed. Risk of loss and title for 
              items purchased from us pass to you upon delivery of the items to the carrier.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Returns and Refunds</Text>
            <Text className="text-gray-600 leading-6">
              Please review our Return Policy for detailed information about returns and 
              refunds. Some items may not be returnable for safety or hygiene reasons.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Intellectual Property</Text>
            <Text className="text-gray-600 leading-6">
              All content included on this site, such as text, graphics, logos, images, 
              and software, is the property of AutoParts Pro or its content suppliers and 
              protected by international copyright laws.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Limitation of Liability</Text>
            <Text className="text-gray-600 leading-6">
              AutoParts Pro shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of or inability 
              to use the service.
            </Text>
          </View>

          <View className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200 mb-9">
            <Text className="text-lg font-semibold text-yellow-800 mb-3">Governing Law</Text>
            <Text className="text-yellow-700 leading-6">
              These terms shall be governed by and construed in accordance with the laws 
              of the State of California, without regard to its conflict of law provisions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsOfServiceScreen;