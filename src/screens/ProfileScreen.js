import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Text } from '../components/GlobalText';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import { mockOrders, mockAddresses } from "../data/mockData";
import Button from "../components/common/Button";
import { useCustomAlert } from "../hooks/useCustomAlert";
import { theme } from "../styles/colors";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, logoutUser } = useAuth();
  const { showAlert, AlertComponent } = useCustomAlert()
  const logoutHandler = () => {
    logoutUser();
  };

  const handleLogout = () => {
    showAlert({
      title: 'تسجيل خروج',
      type: 'warning',
      message: 'هل انت متاكد انك تريد تسجيل الخروج',
      onConfirm: () =>{
        logoutUser()
      },
      showCancel: true,
      cancelText:'الغاء',
      confirmText: 'خروج'
    })
    };


  const MenuItem = ({ icon, title, subtitle, onPress, showArrow = true }) => (
    <TouchableOpacity
      className="flex-row-reverse items-center bg-white p-4 rounded-2xl mb-3 shadow-sm"
      onPress={onPress}
    >
      <View className="ml-2 bg-blue-50 w-12 h-12 rounded-2xl items-center justify-center" style={{backgroundColor: theme.background}}>
        <Icon name={icon} size={24} color={theme.praimary} />
      </View>
      <View className="flex-1 ml-4">
        <Text className="text-gray-800 font-tajawal-medium text-base">{title}</Text>
        {subtitle && (
          <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
        )}
      </View>
      {showArrow && <Icon name="chevron-back" size={20} color="#9ca3af" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* User Info Card */}
        <View className="bg-orange-100 rounded-2xl mx-4 p-6 shadow-sm mb-6 mt-4">
          <View className="flex-row-reverse items-center">
            <Image
              source={{
                uri:
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
              }}
              className="w-16 h-16 rounded-full"
            />
            <View className="flex-1 mr-4">
              <Text className="text-xl font-tajawal-bold text-gray-800">
                {"اسم المستخدم"}
              </Text>
              <Text className="text-gray-500 mt-1 text-right">
                {user?.email || "john.doe@example.com"}
              </Text>
              <Text className="text-gray-400 text-sm mt-1">
                عضو منذ {user?.joinDate || "2023"}
              </Text>
            </View>
            
          </View>
        </View>

        {/* Quick Stats */}
        <View className="flex-row px-4 mb-6">
          <View className="flex-1 bg-white rounded-2xl p-4 items-center shadow-sm mx-1">
            <Text className="text-2xl font-bold text-blue-600">
              {mockOrders.length}
            </Text>
            <Text className="text-gray-500 text-sm mt-1">Orders</Text>
          </View>
          <View className="flex-1 bg-white rounded-2xl p-4 items-center shadow-sm mx-1">
            <Text className="text-2xl font-bold text-green-600">2</Text>
            <Text className="text-gray-500 text-sm mt-1">Pending</Text>
          </View>
          <View className="flex-1 bg-white rounded-2xl p-4 items-center shadow-sm mx-1">
            <Text className="text-2xl font-bold text-purple-600">1</Text>
            <Text className="text-gray-500 text-sm mt-1">Addresses</Text>
          </View>
        </View>

        {/* Menu Sections */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">الملف الشخصي</Text>

          <MenuItem
            icon="person-outline"
            title="الملومات الشخصيه"
            subtitle="تعديل تفاصيل الملف الشخصي"
            onPress={() => navigation.navigate("PersonalInfo")}
          />

          <MenuItem
            icon="location-outline"
            title="عناوين الشحن"
            subtitle={`${mockAddresses.length} عنوان`}
            onPress={() => navigation.navigate("ShippingAddresses")}
          />

          <MenuItem
            icon="card-outline"
            title="طرق الدفع"
            subtitle="اداره طرق الدفع"
            onPress={() => navigation.navigate("PaymentMethods")}
          />
        </View>

        <View className="px-4 mb-6">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">
            الطلبات & الدعم
          </Text>

          <MenuItem
            icon="bag-outline"
            title="قائمه الطلبات السابقه"
            subtitle="عرض الطلبات السابقه"
            onPress={() => navigation.navigate("OrderHistory")}
          />

          <MenuItem
            icon="heart-outline"
            title="المفضله"
            subtitle="عرض قائمه المنتجات المفضله"
            onPress={() => navigation.navigate("Wishlist")}
          />

          <MenuItem
            icon="help-circle-outline"
            title="المساعده & الدعم"
            subtitle="مراسله الدعم و الاسئله المتكرره"
            onPress={() => navigation.navigate("HelpSupport")}
          />
        </View>

        <View className="px-4 mb-8">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">
            الاداء
          </Text>

          <MenuItem
            icon="notifications-outline"
            title="الاشعارات"
            subtitle="اداره الاشعارات"
            onPress={() => navigation.navigate("Notifications")}
          />

          <MenuItem
            icon="shield-checkmark-outline"
            title="الحمايه و الخصوصيه"
            onPress={() => navigation.navigate("PrivacySecurity")}
          />

          <MenuItem
            icon="settings-outline"
            title="الاعدادات"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>

        {/* Logout Button */}
         {/* Logout Button */}
        <Button 
          title="تسجيل خروج"
          variant="error"
          icon="log-out"
          onPress={handleLogout}
          className="mb-8 mx-6"
        />
      </ScrollView>
      <AlertComponent />
    </SafeAreaView>
  );
};

export default ProfileScreen;
