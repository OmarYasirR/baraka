import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const TabView = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'default', // 'default' | 'scrollable' | 'pills'
  className = "",
}) => {
  const isScrollable = variant === 'scrollable';
  const isPills = variant === 'pills';

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={tab.id || index}
        className={`
          flex-1 items-center py-3 px-4
          ${isPills ? 'rounded-full mx-1' : ''}
          ${activeTab === tab.id ? 
            (isPills ? 'bg-red-600' : 'border-b-2 border-red-600') : 
            (isPills ? 'bg-gray-100' : '')
          }
        `}
        onPress={() => onTabChange(tab.id)}
      >
        <Text className={`
          font-tajawal-bold text-base
          ${activeTab === tab.id ? 
            (isPills ? 'text-white' : 'text-red-600') : 
            'text-gray-500'
          }
        `}>
          {tab.title}
        </Text>
      </TouchableOpacity>
    ));
  };

  if (isScrollable) {
    return (
      <View className={`border-b border-gray-200 ${className}`}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, minWidth: '100%' }}
        >
          {renderTabs()}
        </ScrollView>
      </View>
    );
  }

  return (
    <View className={`flex-row border-b border-gray-200 ${className}`}>
      {renderTabs()}
    </View>
  );
};

export default TabView;