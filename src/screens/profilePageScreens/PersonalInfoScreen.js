import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import { Text } from '../../components/GlobalText';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import { formatPhoneNumber } from "../../utils/formatters";
import { formatDate } from "../../utils/formatters";
import { theme } from "../../styles/colors";

const PersonalInfoScreen = () => {
  const [isEditing, setisEditing] = useState(false);
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleEditProfile = () => {
    navigation.navigate("editPersonalInformation");
  };

  const InfoRow = ({ icon, label, value, onPress, isLast = false }) => (
    <TouchableOpacity
      className={`flex-row-reverse items-center justify-between py-4 ${
        !isLast ? "border-b border-gray-200" : ""
      } ${onPress ? "active:bg-gray-50" : ""}`}
      onPress={onPress}
      disabled={!onPress}
    >
      <View className="flex-row-reverse items-center flex-1">
        <View className="w-8 items-center">
          <Icon name={icon} size={20} color={theme.praimary} />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-gray-500 text-sm">{label}</Text>
          <Text className="text-gray-800 font-medium mt-1 text-right">
            {value || "Not set"}
          </Text>
        </View>
      </View>
      {onPress && (
        <Icon name="chevron-back" size={20} color={theme.praimary} />
      )}
    </TouchableOpacity>
  );

  const Section = ({ title, children }) => (
    <View className="mb-6">
      <Text className="text-lg font-tajawal-bold text-gray-800 mb-4">{title}</Text>
      <View className="bg-orange-50 p-1-2 rounded-2xl shadow-sm">{children}</View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="البيانات الشخصيه" showBack={true} showCart={false} />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Profile Header */}
        <View className="bg-red-50 rounded-2xl mx-4 mt-4 p-4 py-6 shadow-sm mb-6">
          <View className="flex-row-reverse items-start">
            <Image
              source={{
                uri:
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
              }}
              className="w-24 h-24 rounded-full"
            />
            <View className="flex-1 mr-4">
              <Text className="font-tajawal-medium text-gray-800">
                { "اسم المستخدم"}
              </Text>
              <Text className="text-gray-500 mt-1 text-right">
                {user?.email || "No Email"}
              </Text>
              <Text className="text-red-600 font-tajawal-medium text-sm mt-2">
                تاريخ الانضمام{" "}
                {user?.joinDate ? formatDate(user.joinDate) : "N/A"}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={() => handleEditProfile()}
            >
              <Icon name="pencil" size={19} color={theme.praimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal Information Section */}
        <View className="px-4">
          <Section title="البيانا الشخصيه">
            <InfoRow
              icon="person"
              label="الاسم كامل"
              value={"اسم المستخدم"}
              onPress={handleEditProfile}
            />
            <InfoRow
              icon="mail"
              label="البريد الالكتروني"
              value={user?.email}
              onPress={handleEditProfile}
            />
            <InfoRow
              icon="call"
              label="رقم الهاتف"
              value={user?.phone ? formatPhoneNumber(user.phone) : null}
              onPress={handleEditProfile}
            />
            <InfoRow
              icon="calendar"
              label="تاريخ الانضمام"
              value={user?.joinDate ? formatDate(user.joinDate) : null}
              isLast={true}
            />
          </Section>
          
          {/* Statistics Section */}
          <Section title="الاحصائيات">
            <View className="flex-row py-4 border-b border-gray-100">
              <View className="flex-1 items-center">
                <Text className="text-2xl font-bold text-blue-600">12</Text>
                <Text className="text-gray-500 text-sm mt-1">جمله الطلبات</Text>
              </View>
              <View className="flex-1 items-center border-l border-r border-gray-100">
                <Text className="text-2xl font-bold text-green-600">8</Text>
                <Text className="text-gray-500 text-sm mt-1">المكتمله</Text>
              </View>
              <View className="flex-1 items-center">
                <Text className="text-2xl font-bold text-yellow-600">2</Text>
                <Text className="text-gray-500 text-sm mt-1">قيد الانتظار</Text>
              </View>
            </View>
            <TouchableOpacity
              className="flex-row-reverse items-center justify-between py-4"
              onPress={() => navigation.navigate("OrderHistory")}
            >
              <View className="flex-row-reverse items-center">
                <View className="w-8 items-center">
                  <Icon name="bag" size={20} color="#64748b" />
                </View>
                <Text className="text-gray-800 font-medium ml-3">
                  عرض قائمه الطلبات
                </Text>
              </View>
              <Icon name="chevron-back" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </Section>

          {/* Edit Profile Button */}
          <Button
            title="تعديل معلومات الملف الشخصي"
            onPress={handleEditProfile}
            icon="pencil"
            className="mb-4 bg-red-500 border-orange-50"
            textClassName="ml-4"
            // variant='error'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
