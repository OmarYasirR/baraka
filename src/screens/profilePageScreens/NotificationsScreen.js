import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';

const NotificationsScreen = () => {
  const navigation = useNavigation();
  
  const [notificationSettings, setNotificationSettings] = useState({
    // Push Notifications
    pushOrders: true,
    pushPromotions: true,
    pushSecurity: true,
    pushStock: false,
    
    // Email Notifications
    emailOrders: true,
    emailPromotions: false,
    emailSecurity: true,
    emailNewsletter: false,
    
    // SMS Notifications
    smsOrders: false,
    smsPromotions: false,
    smsSecurity: true,
  });

  const toggleSwitch = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const NotificationSection = ({ title, settings }) => (
    <View className="mb-8">
      <Text className="text-lg font-bold text-gray-800 mb-4">{title}</Text>
      <View className="bg-white rounded-2xl shadow-sm border border-gray-200">
        {settings.map((setting, index) => (
          <View key={setting.key}>
            <View className={`flex-row items-center justify-between px-4 py-4 ${
              index !== settings.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium">{setting.title}</Text>
                <Text className="text-gray-500 text-sm mt-1">{setting.description}</Text>
              </View>
              <Switch
                value={notificationSettings[setting.key]}
                onValueChange={() => toggleSwitch(setting.key)}
                trackColor={{ false: '#f1f5f9', true: '#dbeafe' }}
                thumbColor={notificationSettings[setting.key] ? '#2563eb' : '#f8fafc'}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const pushNotifications = [
    {
      key: 'pushOrders',
      title: 'Order Updates',
      description: 'Order confirmations, shipping updates, and delivery notifications'
    },
    {
      key: 'pushPromotions',
      title: 'Promotions & Offers',
      description: 'Special discounts, sales, and promotional offers'
    },
    {
      key: 'pushSecurity',
      title: 'Security Alerts',
      description: 'Login attempts and account security notifications'
    },
    {
      key: 'pushStock',
      title: 'Stock Alerts',
      description: 'Notifications when out-of-stock items become available'
    }
  ];

  const emailNotifications = [
    {
      key: 'emailOrders',
      title: 'Order Updates',
      description: 'Order confirmations and shipping notifications'
    },
    {
      key: 'emailPromotions',
      title: 'Promotional Emails',
      description: 'Special offers and product recommendations'
    },
    {
      key: 'emailSecurity',
      title: 'Security Notifications',
      description: 'Important account security updates'
    },
    {
      key: 'emailNewsletter',
      title: 'Newsletter',
      description: 'Weekly newsletter with tips and updates'
    }
  ];

  const smsNotifications = [
    {
      key: 'smsOrders',
      title: 'Order Updates',
      description: 'Important order and delivery updates via SMS'
    },
    {
      key: 'smsPromotions',
      title: 'Promotional SMS',
      description: 'Exclusive deals and flash sales'
    },
    {
      key: 'smsSecurity',
      title: 'Security Alerts',
      description: 'Critical security notifications'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Notifications"
        showBack={true}
      />
      
      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6">
          Manage how you receive notifications and stay updated with your orders.
        </Text>

        <NotificationSection 
          title="Push Notifications"
          settings={pushNotifications}
        />

        <NotificationSection 
          title="Email Notifications"
          settings={emailNotifications}
        />

        <NotificationSection 
          title="SMS Notifications"
          settings={smsNotifications}
        />

        {/* Notification Preferences */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-800 mb-4">Notification Preferences</Text>
          <View className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <TouchableOpacity 
              className="px-4 py-4 border-b border-gray-100"
              onPress={() => navigation.navigate('NotificationSchedule')}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-gray-800 font-medium">Quiet Hours</Text>
                  <Text className="text-gray-500 text-sm mt-1">Set times when you don't want to be disturbed</Text>
                </View>
                <Text className="text-gray-400">→</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="px-4 py-4"
              onPress={() => navigation.navigate('NotificationCategories')}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-gray-800 font-medium">Notification Categories</Text>
                  <Text className="text-gray-500 text-sm mt-1">Manage notification types and priorities</Text>
                </View>
                <Text className="text-gray-400">→</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Help Section */}
        <View className="bg-blue-50 rounded-2xl p-4">
          <Text className="text-blue-800 font-medium mb-2">Need Help?</Text>
          <Text className="text-blue-700 text-sm">
            If you're not receiving notifications, make sure they're enabled in your device settings and check your internet connection.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;