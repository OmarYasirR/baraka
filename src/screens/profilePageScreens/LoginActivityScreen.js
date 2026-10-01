import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const LoginActivityScreen = () => {
  const [loginSessions, setLoginSessions] = useState([
    {
      id: 1,
      device: 'iPhone 13 Pro',
      location: 'New York, NY',
      time: '2023-12-01 14:30',
      ip: '192.168.1.100',
      current: true,
      trusted: true
    },
    {
      id: 2,
      device: 'MacBook Pro',
      location: 'New York, NY',
      time: '2023-11-28 09:15',
      ip: '192.168.1.101',
      current: false,
      trusted: true
    },
    {
      id: 3,
      device: 'Samsung Galaxy S21',
      location: 'Chicago, IL',
      time: '2023-11-25 16:45',
      ip: '203.0.113.1',
      current: false,
      trusted: false
    },
    {
      id: 4,
      device: 'Windows Desktop',
      location: 'Miami, FL',
      time: '2023-11-20 11:20',
      ip: '198.51.100.1',
      current: false,
      trusted: true
    }
  ]);

  const handleLogoutDevice = (deviceId) => {
    Alert.alert(
      'Log Out Device',
      'Are you sure you want to log out this device?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out', 
          style: 'destructive',
          onPress: () => {
            setLoginSessions(prev => prev.filter(session => session.id !== deviceId));
            Alert.alert('Success', 'Device logged out successfully!');
          }
        }
      ]
    );
  };

  const handleLogoutAll = () => {
    Alert.alert(
      'Log Out All Devices',
      'This will log you out from all devices except this one.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out All', 
          style: 'destructive',
          onPress: () => {
            setLoginSessions(prev => prev.filter(session => session.current));
            Alert.alert('Success', 'All other devices logged out!');
          }
        }
      ]
    );
  };

  const LoginSessionCard = ({ session }) => (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="text-gray-800 font-medium text-lg mr-2">
              {session.device}
            </Text>
            {session.current && (
              <View className="bg-blue-100 px-2 py-1 rounded-full">
                <Text className="text-blue-800 text-xs font-medium">Current</Text>
              </View>
            )}
          </View>
          <Text className="text-gray-600 text-sm">{session.location}</Text>
          <Text className="text-gray-500 text-sm">{session.time}</Text>
          <Text className="text-gray-400 text-sm">IP: {session.ip}</Text>
        </View>
        
        {!session.trusted && (
          <View className="bg-red-100 px-2 py-1 rounded-full">
            <Text className="text-red-800 text-xs font-medium">Suspicious</Text>
          </View>
        )}
      </View>

      {!session.current && (
        <View className="flex-row space-x-3 pt-3 border-t border-gray-100">
          <Button 
            title="Log Out"
            variant="outline"
            size="small"
            onPress={() => handleLogoutDevice(session.id)}
            className="flex-1"
          />
          {!session.trusted && (
            <Button 
              title="Report"
              variant="error"
              size="small"
              onPress={() => Alert.alert('Reported', 'Suspicious activity reported to security team.')}
              className="flex-1"
            />
          )}
        </View>
      )}
    </View>
  );

  const suspiciousCount = loginSessions.filter(session => !session.trusted).length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Login Activity"
        showBack={true}
      />
      
      <ScrollView className="flex-1 p-6">
        {/* Security Status */}
        <View className={`rounded-2xl p-4 mb-6 ${
          suspiciousCount > 0 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
        }`}>
          <View className="flex-row items-start">
            <Icon 
              name={suspiciousCount > 0 ? 'warning' : 'shield-checkmark'} 
              size={20} 
              color={suspiciousCount > 0 ? '#dc2626' : '#16a34a'} 
              className="mr-3 mt-1"
            />
            <View className="flex-1">
              <Text className={`font-medium mb-1 ${
                suspiciousCount > 0 ? 'text-red-800' : 'text-green-800'
              }`}>
                {suspiciousCount > 0 ? 'Suspicious Activity Detected' : 'All Activity Looks Good'}
              </Text>
              <Text className={`text-sm ${
                suspiciousCount > 0 ? 'text-red-700' : 'text-green-700'
              }`}>
                {suspiciousCount > 0 
                  ? `We found ${suspiciousCount} suspicious login attempt(s). Please review and take action.`
                  : 'No unusual login activity detected in the last 30 days.'
                }
              </Text>
            </View>
          </View>
        </View>

        {/* Active Sessions */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Active Sessions</Text>
            <Text className="text-gray-500 text-sm">
              {loginSessions.length} device(s)
            </Text>
          </View>

          {loginSessions.map((session) => (
            <LoginSessionCard key={session.id} session={session} />
          ))}
        </View>

        {/* Quick Actions */}
        <View className="space-y-3">
          <Button 
            title="Log Out All Other Devices"
            variant="outline"
            onPress={handleLogoutAll}
          />
          
          <Button 
            title="Enable Login Alerts"
            variant="primary"
            onPress={() => Alert.alert('Enabled', 'Login alerts have been enabled.')}
          />
        </View>

        {/* Help Section */}
        <View className="bg-blue-50 rounded-2xl p-4 mt-6">
          <Text className="text-blue-800 font-medium mb-2">Security Tips</Text>
          <Text className="text-blue-700 text-sm mb-2">
            • Always log out from shared devices{'\n'}
            • Use strong, unique passwords{'\n'}
            • Enable two-factor authentication{'\n'}
            • Review this page regularly{'\n'}
          </Text>
          <Text className="text-blue-600 text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginActivityScreen;