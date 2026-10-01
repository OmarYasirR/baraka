import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Privacy Policy"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-4">
        <Text className="text-lg font-bold text-gray-800 mb-6">
          Your Privacy Matters
        </Text>

        <View className="space-y-6">
          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Information We Collect</Text>
            <Text className="text-gray-600 leading-6">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This includes your name, email address, 
              shipping address, payment information, and vehicle details.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">How We Use Your Information</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Process and fulfill your orders</Text>
              <Text className="text-gray-600">• Provide customer support</Text>
              <Text className="text-gray-600">• Send order confirmations and updates</Text>
              <Text className="text-gray-600">• Personalize your shopping experience</Text>
              <Text className="text-gray-600">• Improve our products and services</Text>
            </View>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Data Security</Text>
            <Text className="text-gray-600 leading-6">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. All payment 
              transactions are encrypted using SSL technology.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Third-Party Services</Text>
            <Text className="text-gray-600 leading-6">
              We may share your information with trusted third parties who assist us in operating 
              our website, conducting our business, or servicing you, so long as those parties 
              agree to keep this information confidential.
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Your Rights</Text>
            <View className="space-y-2">
              <Text className="text-gray-600">• Access and update your personal information</Text>
              <Text className="text-gray-600">• Opt-out of marketing communications</Text>
              <Text className="text-gray-600">• Request deletion of your account</Text>
              <Text className="text-gray-600">• Export your data</Text>
            </View>
          </View>

          <View className="bg-red-50 rounded-2xl mb-9 p-4 border border-red-200">
            <Text className="text-lg font-semibold text-red-800 mb-3">Contact Us</Text>
            <Text className="text-red-700 leading-6">
              If you have any questions about this Privacy Policy, please contact us at:
              {'\n'}privacy@autoparts-pro.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;