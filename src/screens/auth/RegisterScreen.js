import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BarakaLogo from "../../assets/icon.png";
import { useCustomAlert } from "../../hooks/useCustomAlert";
import { I18nManager } from "react-native";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigation = useNavigation();
  const { showAlert, AlertComponent } = useCustomAlert();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      showAlert({
        type: "error",
        title: "معلومات ناقصة",
        message: "يرجى ملء جميع الحقول لإنشاء حسابك.",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showAlert({
        type: "error",
        title: "بريد إلكتروني غير صالح",
        message: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      });
      return;
    }

    if (password !== confirmPassword) {
      showAlert({
        type: "error",
        title: "كلمات المرور غير متطابقة",
        message: "كلمة المرور وتأكيدها غير متطابقين. حاول مرة أخرى.",
      });
      return;
    }

    if (password.length < 6) {
      showAlert({
        type: "error",
        title: "كلمة المرور ضعيفة",
        message: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
      });
      return;
    }

    if (!acceptedTerms) {
      showAlert({
        type: "warning",
        title: "الموافقة مطلوبة",
        message: "يرجى الموافقة على الشروط والأحكام للمتابعة.",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showAlert({
        type: "success",
        title: "مرحباً بك في بركة!",
        message: "تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول.",
        autoClose: false,
        onConfirm: () => {
          navigation.navigate("Login");
        },
      });
    }, 1500);
  };

  return (
    <>
      <KeyboardAvoidingView
        className="flex-1 bg-white"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View className="items-center pb-8 px-6 bg-gray-50">
            <Image
              className="w-[100px] h-[200px] mb-[-45px]"
              source={BarakaLogo}
              resizeMode="cover"
            />
            <Text className="text-3xl font-tajawal-bold text-gray-900 mb-2">
              إنشاء حساب
            </Text>
            <Text className="text-base text-gray-600 text-center font-tajawal">
              انضم إلى بركة وتمتع بالعروض الحصرية
            </Text>
          </View>

          {/* Form Section */}
          <View className="flex-1 px-6 pt-6">
            {/* Name Row */}
            <View className="flex-row-reverse gap-3 mb-4">
              <View className="flex-1">
                <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                  الاسم الأول
                </Text>
                <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                  <Icon name="account-outline" size={20} color="#64748b" />
                  <TextInput
                    className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                    placeholder="الاسم الأول"
                    placeholderTextColor="#94a3b8"
                    value={formData.firstName}
                    onChangeText={(text) =>
                      handleInputChange("firstName", text)
                    }
                  />
                </View>
              </View>

              <View className="flex-1">
                <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                  اسم العائلة
                </Text>
                <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                  <Icon name="account-outline" size={20} color="#64748b" />
                  <TextInput
                    className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                    placeholder="اسم العائلة"
                    placeholderTextColor="#94a3b8"
                    value={formData.lastName}
                    onChangeText={(text) => handleInputChange("lastName", text)}
                  />
                </View>
              </View>
            </View>

            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                البريد الإلكتروني
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="email-outline" size={20} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أدخل بريدك الإلكتروني"
                  placeholderTextColor="#94a3b8"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Phone Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                رقم الهاتف
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="phone-outline" size={20} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أدخل رقم هاتفك"
                  placeholderTextColor="#94a3b8"
                  value={formData.phone}
                  onChangeText={(text) => handleInputChange("phone", text)}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                كلمة المرور
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="lock-outline" size={20} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أنشئ كلمة المرور"
                  placeholderTextColor="#94a3b8"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange("password", text)}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="p-1"
                >
                  <Icon
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#64748b"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input */}
            <View className="mb-6">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-2">
                تأكيد كلمة المرور
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="lock-check-outline" size={20} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أعد إدخال كلمة المرور"
                  placeholderTextColor="#94a3b8"
                  value={formData.confirmPassword}
                  onChangeText={(text) =>
                    handleInputChange("confirmPassword", text)
                  }
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="p-1"
                >
                  <Icon
                    name={
                      showConfirmPassword ? "eye-off-outline" : "eye-outline"
                    }
                    size={20}
                    color="#64748b"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms */}
            <TouchableOpacity
              className="flex-row-reverse items-start mb-6"
              onPress={() => setAcceptedTerms(!acceptedTerms)}
            >
              <View
                className={`w-6 h-6 rounded-lg border-2 ml-3 items-center justify-center mt-0.5 ${
                  acceptedTerms
                    ? "bg-red-600 border-red-600"
                    : "border-gray-300"
                }`}
              >
                {acceptedTerms && (
                  <Icon name="check" size={16} color="#FFFFFF" />
                )}
              </View>
              <Text className="text-gray-600 text-sm flex-1 leading-5 font-tajawal">
                أوافق على{" "}
                <Text className="text-red-600 font-tajawal-bold">
                  شروط الخدمة
                </Text>{" "}
                و{" "}
                <Text className="text-red-600 font-tajawal-bold">
                  سياسة الخصوصية
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Register Button */}
            <TouchableOpacity
              className={`w-full bg-red-600 rounded-2xl py-5 items-center shadow-lg mb-6 ${
                loading ? "opacity-80" : "active:bg-red-700"
              }`}
              onPress={handleRegister}
              disabled={loading}
            >
              <Text className="text-white text-lg font-tajawal-bold">
                {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
              </Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View className="flex-row-reverse justify-center items-center mb-8">
              <Text className="text-gray-600 text-base font-tajawal">
                لديك حساب بالفعل؟{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-red-600 font-tajawal-bold text-base">
                  تسجيل الدخول
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <AlertComponent />
    </>
  );
};

export default RegisterScreen;
