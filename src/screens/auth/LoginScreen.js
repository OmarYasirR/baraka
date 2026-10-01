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
import { useAuth } from "../../hooks/useAuth";
import BarakaLogo from "../../assets/icon.png";
import { useCustomAlert } from "../../hooks/useCustomAlert";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { isLoading, loginWithEmail } = useAuth();
  const { showAlert, AlertComponent } = useCustomAlert();

  const handleLogin = async () => {
    if (!email || !password) {
      showAlert({
        type: "error",
        title: "معلومات مفقودة",
        message: "الرجاء إدخال جميع الحقول للمتابعة.",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showAlert({
        type: "error",
        title: "بريد إلكتروني غير صالح",
        message: "الرجاء إدخال عنوان بريد إلكتروني صحيح.",
      });
      return;
    }

    await loginWithEmail(email, password);

    showAlert({
      type: "success",
      title: "مرحباً بعودتك!",
      message: "تم تسجيل الدخول بنجاح إلى حسابك.",
      autoClose: true,
    });
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
          {/* رأس الصفحة */}
          <View className="items-center px-6 bg-gray-50">
            <Image
              className="w-[100px] h-[200px] mb-[-45px]"
              source={BarakaLogo}
              resizeMode="cover"
            />
            <Text className="text-4xl font-tajawal-bold text-slate-900 mb-3">
              بركة
            </Text>
            <Text className="text-lg text-slate-600 text-center font-tajawal">
              سجّل الدخول إلى حسابك للمتابعة
            </Text>
          </View>

          {/* نموذج تسجيل الدخول */}
          <View className="flex-1 px-6 pt-8">
            {/* البريد الإلكتروني */}
            <View className="mb-6">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-3 text-right">
                البريد الإلكتروني
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="email-outline" size={22} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أدخل بريدك الإلكتروني"
                  placeholderTextColor="#94a3b8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  textAlign="right"
                />
              </View>
            </View>

            {/* كلمة المرور */}
            <View className="mb-2">
              <Text className="text-gray-700 text-sm font-tajawal-bold mb-3 text-right">
                كلمة المرور
              </Text>
              <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
                <Icon name="lock-outline" size={22} color="#64748b" />
                <TextInput
                  className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                  placeholder="أدخل كلمة المرور"
                  placeholderTextColor="#94a3b8"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                  textAlign="right"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="p-1"
                >
                  <Icon
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="#64748b"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* نسيت كلمة المرور */}
            <TouchableOpacity
              className="items-start mb-8"
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text className="text-red-600 font-tajawal-bold text-base">
                نسيت كلمة المرور؟
              </Text>
            </TouchableOpacity>

            {/* زر تسجيل الدخول */}
            <TouchableOpacity
              className={`w-full bg-red-600 rounded-2xl py-5 items-center shadow-lg ${
                isLoading ? "opacity-80" : "active:bg-red-700"
              }`}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text className="text-white text-lg font-tajawal-bold">
                {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
              </Text>
            </TouchableOpacity>

            {/* فاصل */}
            <View className="flex-row items-center my-8">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="px-4 text-gray-500 text-sm font-tajawal">
                أو يمكنك المتابعة بواسطة
              </Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* تسجيل الدخول عبر الشبكات */}
            <View className="flex-row gap-4 mb-8">
              <TouchableOpacity className="flex-1 flex-row-reverse items-center justify-center bg-white border-2 border-gray-200 rounded-2xl py-4 active:bg-gray-50">
                <Icon name="google" size={20} color="#DB4437" />
                <Text className="text-gray-700 font-tajawal-bold text-base mr-2">
                  جوجل
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row-reverse items-center justify-center bg-white border-2 border-gray-200 rounded-2xl py-4 active:bg-gray-50">
                <Icon name="apple" size={20} color="#000000" />
                <Text className="text-gray-700 font-tajawal-bold text-base mr-2">
                  آبل
                </Text>
              </TouchableOpacity>
            </View>

            {/* رابط التسجيل */}
            <View className="flex-row-reverse justify-center items-center mb-12">
              <Text className="text-gray-600 text-base font-tajawal">
                ليس لديك حساب؟{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="text-red-600 font-tajawal-bold text-base">
                  إنشاء حساب
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

export default LoginScreen;
