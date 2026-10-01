import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../hooks/useCart";
import { useWishlistManager } from "../../hooks/useWishlist";
import { useCustomAlert } from "../../hooks/useCustomAlert";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { showAlert, AlertComponent } = useCustomAlert();
  const {
    wishlist: { items: wishlistItems },
    removeFromWishlist,
    clearWishlist,
  } = useWishlistManager();

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (productId) => {
    setSelectedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleRemoveSelected = () => {
    if (selectedItems.length === 0) return;
    showAlert({
      type: "warning",
      title: "حذف العناصر المحددة",
      message: `هل تريد حذف ${selectedItems.length} عنصر من قائمة الرغبات؟`,
      showCancel: true,
      confirmText: "حذف",
      onConfirm: () => {
        selectedItems.forEach((id) => removeFromWishlist(id));
        setSelectedItems([]);
        showAlert({
          type: "success",
          title: "تم الحذف",
          message: `تم حذف ${selectedItems.length} عنصر بنجاح!`,
          autoClose: true,
          duration: 2000,
        });
      },
    });
  };

  const handleAddSelectedToCart = () => {
    if (selectedItems.length === 0) return;
    let addedCount = 0;
    selectedItems.forEach((productId) => {
      const product = wishlistItems.find((item) => item.id === productId);
      if (product?.inStock) {
        addToCart(product);
        addedCount++;
      }
    });

    if (addedCount > 0) {
      showAlert({
        type: "success",
        title: "تم الإضافة إلى السلة",
        message: `تم إضافة ${addedCount} عنصر بنجاح!`,
        autoClose: true,
        duration: 2000,
      });
    } else {
      showAlert({
        type: "warning",
        title: "لم تتم الإضافة",
        message: "العناصر المحددة غير متوفرة في المخزون.",
        autoClose: true,
        duration: 2000,
      });
    }
  };

  const handleAddToCart = (product) => {
    if (!product.inStock) {
      showAlert({
        type: "warning",
        title: "غير متوفر",
        message: "هذا المنتج غير متوفر حالياً في المخزون.",
        autoClose: true,
        duration: 2000,
      });
      return;
    }

    addToCart(product);
    showAlert({
      type: "success",
      title: "تم الإضافة إلى السلة",
      message: `تم إضافة ${product.name} إلى السلة بنجاح!`,
      autoClose: true,
      duration: 2000,
    });
  };

  const handleClearAll = () => {
    showAlert({
      type: "warning",
      title: "مسح قائمة الرغبات",
      message: "هل تريد إزالة جميع العناصر من قائمة الرغبات؟",
      showCancel: true,
      cancelText: 'الغاء',
      confirmText: "مسح الكل",
      onConfirm: () => {
        clearWishlist();
        setSelectedItems([]);
        showAlert({
          type: "success",
          title: "تم المسح",
          message: "تم إزالة جميع العناصر بنجاح!",
          autoClose: true,
          duration: 2000,
        });
      },
    });
  };

  const WishlistItem = React.memo(({ product }) => (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">
      <View className="flex-row-reverse">
        {/* Selection Checkbox */}
        <TouchableOpacity
          className={`w-6 h-6 rounded-full border-2 items-center justify-center ml-4 mt-1 ${
            selectedItems.includes(product.id)
              ? "bg-red-600 border-red-600"
              : "border-gray-300"
          }`}
          onPress={() => toggleSelectItem(product.id)}
        >
          {selectedItems.includes(product.id) && (
            <Icon name="checkmark" size={14} color="white" />
          )}
        </TouchableOpacity>

        {/* Product Card */}
        <TouchableOpacity
          className="flex-1"
          onPress={() => navigation.navigate("ProductDetail", { product })}
        >
          <View className="flex-row-reverse">
            <View className="w-20 h-20 rounded-xl overflow-hidden ml-4">
              <Image
                source={{ uri: product.image }}
                className="w-full h-full"
              />
            </View>

            <View className="flex-1">
              <Text className="text-gray-500 text-xs text-right font-tajawal">
                {product.brand}
              </Text>
              <Text
                className="text-gray-800 font-tajawal-bold text-sm mt-1 text-right"
                numberOfLines={2}
              >
                {product.name}
              </Text>

              <View className="flex-row-reverse items-center mt-2">
                <Icon name="star" size={14} color="#fbbf24" />
                <Text className="text-gray-600 text-xs mr-1 font-tajawal">
                  {product.rating} ({product.reviews} تقييم)
                </Text>
              </View>

              <View className="flex-row-reverse items-center justify-between mt-3">
                <Text className="text-blue-600 font-tajawal-bold text-base">
                  {product.price} ر.س
                </Text>
                <Text
                  className={`text-xs font-tajawal-medium text-right ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "متوفر" : "غير متوفر"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex-row-reverse space-x-reverse space-x-3 mt-4 pt-4 border-t border-gray-100 justify-between">
        <Button
          title="إضافة إلى السلة"
          variant="outline"
          size="small"
          onPress={() => handleAddToCart(product)}
          disabled={!product.inStock}
        />
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center border border-gray-300 rounded-2xl"
          onPress={() => removeFromWishlist(product.id)}
        >
          <Icon name="trash" size={18} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  ));

  const renderHeaderActions = useMemo(() => {
    if (selectedItems.length === 0) return null;
    return (
      <View className="bg-red-50 rounded-2xl p-4 px-2 mb-6 border border-red-200">
        <View className="flex-row-reverse justify-between items-center">
          <Text className="text-red-800 font-tajawal-medium text-right">
            {selectedItems.length} عنصر محدد
          </Text>
          <View className="flex-row-reverse space-x-reverse">
            <Button
              title="إضافة إلى السلة"
              size="small"
              onPress={handleAddSelectedToCart}
              className="ml-2 bg-orange-400 border-orange-100"
            />
            <Button
              title="حذف"
              variant="error"
              size="small"
              onPress={handleRemoveSelected}
            />
          </View>
        </View>
      </View>
    );
  }, [selectedItems]);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header title="قائمة الرغبات" showBack={true} showCart={false} />
      <AlertComponent />

      <View className="flex-1 p-6">
        {renderHeaderActions}

        {wishlistItems.length === 0 ? (
          <View className="flex-1 items-center justify-center py-12">
            <Icon name="heart-outline" size={64} color="#d1d5db" />
            <Text className="text-xl font-tajawal-bold text-gray-400 mt-4 text-right">
              قائمة الرغبات فارغة
            </Text>
            <Text className="text-gray-500 mt-2 mb-6 font-tajawal text-right">
              احفظ العناصر التي تحبها لوقت لاحق. ستظهر هنا.
            </Text>
            <Button
              title="ابدأ التسوق"
              onPress={() => navigation.navigate("Categories")}
            />
          </View>
        ) : (
          <FlatList
            data={wishlistItems}
            renderItem={({ item }) => <WishlistItem product={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}

        {wishlistItems.length > 0 && (
          <View className="pt-4 border-t border-gray-200">
            <View className="flex-row-reverse space-x-reverse space-x-3 justify-between">
              <Button
                title="تحديد الكل"
                variant="outline"
                onPress={() =>
                  setSelectedItems(wishlistItems.map((item) => item.id))
                }
                // className="flex-1"
              />
              <Button
                title="مسح الكل"
                variant="outline"
                onPress={handleClearAll}
                // className="flex-1"
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;
