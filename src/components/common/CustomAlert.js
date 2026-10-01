import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../../components/GlobalText';


const CustomAlert = ({
  visible = false,
  type = 'success', // 'success', 'error', 'warning', 'info'
  title,
  message,
  onConfirm,
  confirmText = 'OK',
  showCancel = false,
  cancelText = 'Cancel',
  onCancel,
  autoClose = false,
  duration = 3000,
}) => {
  const scaleValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      if (autoClose) {
        setTimeout(() => {
          handleConfirm();
        }, duration);
      }
    } else {
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue: 0,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const getIconConfig = () => {
    switch (type) {
      case 'success':
        return { name: 'check-circle', color: '#10B981', bgColor: '#ECFDF5' };
      case 'error':
        return { name: 'alert-circle', color: '#EF4444', bgColor: '#FEF2F2' };
      case 'warning':
        return { name: 'alert', color: '#F59E0B', bgColor: '#FFFBEB' };
      case 'info':
        return { name: 'information', color: '#3B82F6', bgColor: '#EFF6FF' };
      default:
        return { name: 'information', color: '#3B82F6', bgColor: '#EFF6FF' };
    }
  };

  const iconConfig = getIconConfig();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
            opacity: opacityValue,
          }}
          className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl"
        >
          {/* Icon */}
          <View className="items-center mb-4">
            <View 
              className="w-16 h-16 rounded-full items-center justify-center mb-3"
              style={{ backgroundColor: iconConfig.bgColor }}
            >
              <Icon name={iconConfig.name} size={32} color={iconConfig.color} />
            </View>
          </View>

          {/* Title */}
          {title && (
            <Text className="text-xl font-tajawal-bold text-gray-900 text-center mb-2">
              {title}
            </Text>
          )}

          {/* Message */}
          {message && (
            <Text className="text-base text-gray-600 text-center leading-6 mb-6">
              {message}
            </Text>
          )}

          {/* Buttons */}
          <View className={`flex-row ${showCancel ? 'space-x-3' : ''}`}>
            {showCancel && (
              <TouchableOpacity
                onPress={handleCancel}
                className="flex-1 border-2 border-gray-300 rounded-xl py-3 items-center active:bg-gray-50"
              >
                <Text className="text-gray-700 text-base font-semibold">
                  {cancelText}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={handleConfirm}
              className={`${showCancel ? 'flex-1' : 'w-full'} bg-red-600 rounded-xl py-3 items-center active:bg-red-700`}
            >
              <Text className="text-white text-base font-semibold">
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomAlert;