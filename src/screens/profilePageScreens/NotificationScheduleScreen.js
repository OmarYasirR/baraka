import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const NotificationScheduleScreen = () => {
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [startTime, setStartTime] = useState('22:00');
  const [endTime, setEndTime] = useState('07:00');
  const [days, setDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  });

  const toggleDay = (day) => {
    setDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const DayToggle = ({ day, label }) => (
    <TouchableOpacity 
      className={`flex-1 items-center py-3 rounded-2xl mx-1 ${
        days[day] ? 'bg-blue-600' : 'bg-gray-100'
      }`}
      onPress={() => toggleDay(day)}
    >
      <Text className={`font-medium ${
        days[day] ? 'text-white' : 'text-gray-600'
      }`}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Quiet Hours"
        showBack={true}
      />
      
      <ScrollView className="flex-1 p-6">
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-200">
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <Text className="text-gray-800 font-medium">Enable Quiet Hours</Text>
              <Text className="text-gray-500 text-sm mt-1">
                Silence notifications during specified times
              </Text>
            </View>
            <Switch
              value={scheduleEnabled}
              onValueChange={setScheduleEnabled}
              trackColor={{ false: '#f1f5f9', true: '#dbeafe' }}
              thumbColor={scheduleEnabled ? '#2563eb' : '#f8fafc'}
            />
          </View>
        </View>

        {scheduleEnabled && (
          <>
            {/* Time Selection */}
            <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-200">
              <Text className="text-gray-800 font-medium mb-4">Quiet Hours Time</Text>
              
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-1">
                  <Text className="text-gray-600 text-sm mb-2">Start Time</Text>
                  <TouchableOpacity className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200">
                    <Text className="text-gray-800 text-center">{startTime}</Text>
                  </TouchableOpacity>
                </View>
                
                <Text className="text-gray-400 mx-4">to</Text>
                
                <View className="flex-1">
                  <Text className="text-gray-600 text-sm mb-2">End Time</Text>
                  <TouchableOpacity className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200">
                    <Text className="text-gray-800 text-center">{endTime}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Days Selection */}
            <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-200">
              <Text className="text-gray-800 font-medium mb-4">Active Days</Text>
              
              <View className="flex-row space-x-1 mb-2">
                <DayToggle day="monday" label="Mon" />
                <DayToggle day="tuesday" label="Tue" />
                <DayToggle day="wednesday" label="Wed" />
                <DayToggle day="thursday" label="Thu" />
                <DayToggle day="friday" label="Fri" />
              </View>
              
              <View className="flex-row space-x-1">
                <View className="flex-1" />
                <DayToggle day="saturday" label="Sat" />
                <DayToggle day="sunday" label="Sun" />
                <View className="flex-1" />
              </View>
            </View>

            {/* Exceptions */}
            <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <Text className="text-gray-800 font-medium mb-4">Exceptions</Text>
              
              <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
                <View>
                  <Text className="text-gray-800">Important Alerts</Text>
                  <Text className="text-gray-500 text-sm mt-1">
                    Allow critical security and order updates
                  </Text>
                </View>
                <Switch
                  value={true}
                  onValueChange={() => {}}
                  trackColor={{ false: '#f1f5f9', true: '#dbeafe' }}
                  thumbColor={'#2563eb'}
                />
              </View>
              
              <View className="flex-row items-center justify-between py-3">
                <View>
                  <Text className="text-gray-800">Emergency Contacts</Text>
                  <Text className="text-gray-500 text-sm mt-1">
                    Allow notifications from saved contacts
                  </Text>
                </View>
                <Switch
                  value={false}
                  onValueChange={() => {}}
                  trackColor={{ false: '#f1f5f9', true: '#dbeafe' }}
                  thumbColor={'#f8fafc'}
                />
              </View>
            </View>
          </>
        )}

        <Button 
          title="Save Schedule"
          onPress={() => {}}
          className="mt-6"
        />

        {!scheduleEnabled && (
          <View className="bg-yellow-50 rounded-2xl p-4 mt-6">
            <Text className="text-yellow-800 text-sm">
              When disabled, you will receive notifications at any time based on your other notification settings.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScheduleScreen;