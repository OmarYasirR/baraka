import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const HelpSupportScreen = () => {
  const navigation = useNavigation();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    {
      id: 1,
      question: 'كم تستغرق مدة الشحن؟',
      answer: 'الشحن العادي يستغرق ٣-٥ أيام عمل. الشحن السريع متاح خلال ١-٢ يوم عمل. الشحن الدولي قد يستغرق ٧-١٤ يوم عمل حسب الوجهة.'
    },
    {
      id: 2,
      question: 'ما هي سياسة الإرجاع الخاصة بكم؟',
      answer: 'نحن نقدم سياسة إرجاع لمدة ٣٠ يوم لجميع العناصر غير المستخدمة في التغليف الأصلي. شحن الإرجاع مجاني للعناصر المعيبة. القطع المخصصة أو المثبتة قد يكون لها شروط إرجاع مختلفة.'
    },
    {
      id: 3,
      question: 'هل تقدمون خدمات التركيب؟',
      answer: 'نحن نتعاون مع ورش سيارات معتمدة على مستوى الدولة. يمكنك جدولة التركيب أثناء الدفع، وسنقوم بتوصيلك بأحد المحترفين الموثوقين في منطقتك.'
    },
    {
      id: 4,
      question: 'كيف أعرف إذا كانت القطعة مناسبة لسيارتي؟',
      answer: 'استخدم مدقق التوافق الخاص بنا عن طريق إدخال الماركة والموديل والسنة. يمكنك أيضًا الاتصال بفريق الدعم الخاص بنا مع رقم الهيكل (VIN) للتحقق الدقيق من التوافق.'
    },
    {
      id: 5,
      question: 'ما هي طرق الدفع التي تقبلونها؟',
      answer: 'نحن نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، باي بال، أبل باي، جوجل باي، وخيارات التمويل من خلال شركائنا.'
    },
    {
      id: 6,
      question: 'هل تقدمون ضمانًا على قطع الغيار؟',
      answer: 'نعم! معظم القطع تأتي بضمان من ١-٣ سنوات. تفاصيل الضمان المحددة مذكورة في صفحة كل منتج. نحن نقدم أيضًا خيارات ضمان موسع عند الدفع.'
    }
  ];

  const supportContacts = [
    {
      id: 1,
      type: 'phone',
      title: 'اتصل بنا',
      description: '٩٢٠٠٢٨٨٦٧٧٦',
      available: 'دعم على مدار الساعة',
      icon: 'call',
      color: '#0ea5e9',
      action: () => Linking.openURL('tel:92002886776')
    },
    {
      id: 2,
      type: 'email',
      title: 'راسلنا',
      description: 'support@autopartspro.com',
      available: 'رد خلال ٢٤ ساعة',
      icon: 'mail',
      color: '#10b981',
      action: () => Linking.openURL('mailto:support@autopartspro.com')
    },
    {
      id: 3,
      type: 'chat',
      title: 'المحادثة المباشرة',
      description: 'مراسلة فورية',
      available: '٩ صباحاً - ٩ مساءً',
      icon: 'chatbubble',
      color: '#f59e0b',
      action: () => Alert.alert('قريباً', 'المحادثة المباشرة ستكون متاحة قريباً!')
    }
  ];

  const handleContactSubmit = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      Alert.alert('خطأ', 'الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    Alert.alert(
      'تم إرسال الرسالة',
      'شكراً لتواصلك معنا! سنرد عليك خلال ٢٤ ساعة.',
      [{ text: 'موافق', onPress: () => navigation.goBack() }]
    );
  };

  const ContactCard = ({ contact }) => (
    <TouchableOpacity 
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-4"
      onPress={contact.action}
    >
      <View className="flex-row-reverse items-center">
        <View 
          className="w-12 h-12 rounded-2xl items-center justify-center ml-4"
          style={{ backgroundColor: `${contact.color}15` }}
        >
          <Icon name={contact.icon} size={24} color={contact.color} />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-tajawal-bold text-gray-800 text-right">{contact.title}</Text>
          <Text className="text-gray-600 text-base mt-1 text-right font-tajawal">{contact.description}</Text>
          <Text className="text-gray-500 text-sm mt-1 text-right font-tajawal">{contact.available}</Text>
        </View>
        <Icon name="chevron-back" size={20} color="#9ca3af" />
      </View>
    </TouchableOpacity>
  );

  const FAQItem = ({ faq }) => (
    <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-200">
      <TouchableOpacity
        onPress={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
        className="flex-row-reverse justify-between items-center"
      >
        <Text className="text-gray-800 font-tajawal-medium text-base flex-1 pr-4 text-right">
          {faq.question}
        </Text>
        <Icon 
          name={activeFAQ === faq.id ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="#374151" 
        />
      </TouchableOpacity>
      
      {activeFAQ === faq.id && (
        <Text className="text-gray-600 mt-3 leading-6 text-right font-tajawal">
          {faq.answer}
        </Text>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="المساعدة والدعم"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-6">
        {/* Quick Help Section */}
        <View className="mb-8">
          <Text className="text-2xl font-tajawal-bold text-gray-800 mb-2 text-right">
            كيف يمكننا مساعدتك؟
          </Text>
          <Text className="text-gray-600 text-base text-right font-tajawal">
            احصل على إجابات فورية للأسئلة الشائعة أو اتصل بفريق الدعم الخاص بنا.
          </Text>
        </View>

        {/* Contact Methods */}
        <View className="mb-8">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">تواصل معنا</Text>
          {supportContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </View>

        {/* FAQ Section */}
        <View className="mb-8">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">
            الأسئلة الشائعة
          </Text>
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </View>

        {/* Contact Form */}
        <View className="mb-8">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">أرسل لنا رسالة</Text>
          <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الاسم الكامل *</Text>
              <TextInput
                value={contactForm.name}
                onChangeText={(text) => setContactForm(prev => ({ ...prev, name: text }))}
                placeholder="أدخل اسمك الكامل"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-gray-800 text-right font-tajawal"
                textAlign="right"
              />
            </View>

            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">البريد الإلكتروني *</Text>
              <TextInput
                value={contactForm.email}
                onChangeText={(text) => setContactForm(prev => ({ ...prev, email: text }))}
                placeholder="أدخل بريدك الإلكتروني"
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-gray-800 text-right font-tajawal"
                textAlign="right"
              />
            </View>

            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الموضوع</Text>
              <TextInput
                value={contactForm.subject}
                onChangeText={(text) => setContactForm(prev => ({ ...prev, subject: text }))}
                placeholder="بخصوص ماذا؟"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-gray-800 text-right font-tajawal"
                textAlign="right"
              />
            </View>

            <View className="mb-6">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الرسالة *</Text>
              <TextInput
                value={contactForm.message}
                onChangeText={(text) => setContactForm(prev => ({ ...prev, message: text }))}
                placeholder="الرجاء وصف مشكلتك أو سؤالك..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-gray-800 min-h-[100px] text-right font-tajawal"
                textAlign="right"
              />
            </View>

            <Button 
              title="إرسال الرسالة"
              onPress={handleContactSubmit}
              variant='error'
            />
          </View>
        </View>

        {/* Additional Resources */}
        <View className="mb-8">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">المصادر</Text>
          <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <TouchableOpacity 
              className="flex-row-reverse items-center justify-between py-3 border-b border-gray-200"
              onPress={() => navigation.navigate('ShippingGuide')}
            >
              <View className="flex-row-reverse items-center">
                <Icon name="rocket" size={20} color="#374151" className="ml-3" />
                <Text className="text-gray-800 font-tajawal-medium text-right">دليل الشحن</Text>
              </View>
              <Icon name="chevron-back" size={16} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row-reverse items-center justify-between py-3 border-b border-gray-200"
              onPress={() => navigation.navigate('ReturnPolicy')}
            >
              <View className="flex-row-reverse items-center">
                <Icon name="return-up-back" size={20} color="#374151" className="ml-3" />
                <Text className="text-gray-800 font-tajawal-medium text-right">سياسة الإرجاع</Text>
              </View>
              <Icon name="chevron-back" size={16} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row-reverse items-center justify-between py-3"
              onPress={() => navigation.navigate('WarrantyInfo')}
            >
              <View className="flex-row-reverse items-center">
                <Icon name="shield-checkmark" size={20} color="#374151" className="ml-3" />
                <Text className="text-gray-800 font-tajawal-medium text-right">معلومات الضمان</Text>
              </View>
              <Icon name="chevron-back" size={16} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Business Hours */}
        <View className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-12">
          <Text className="text-red-800 font-tajawal-bold text-lg mb-2 text-right">ساعات الدعم</Text>
          <Text className="text-red-700 text-base text-right font-tajawal">الدعم الهاتفي: على مدار الساعة</Text>
          <Text className="text-red-700 text-base text-right font-tajawal">المحادثة المباشرة: ٩ صباحاً - ٩ مساءً</Text>
          <Text className="text-red-700 text-base text-right font-tajawal">البريد الإلكتروني: على مدار الساعة (رد خلال ٢٤ ساعة)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupportScreen;