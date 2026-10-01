export const mockUsers = {
  currentUser: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    joinDate: '2023-01-15',
  },
};

export const mockOrders = [
  {
    id: 1,
    orderNumber: 'ORD-123456',
    date: '2023-10-15',
    status: 'delivered',
    total: 189.97,
    items: [
      {
        id: 1,
        name: 'Bosch Spark Plug Set',
        price: 24.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1603712617691-2c2d7b973d0f?w=100',
      },
      {
        id: 3,
        name: 'K&N Air Filter',
        price: 45.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1603712617500-0d85e023dcd2?w=100',
      },
    ],
  },
  {
    id: 2,
    orderNumber: 'ORD-123457',
    date: '2023-10-10',
    status: 'shipped',
    total: 89.99,
    items: [
      {
        id: 2,
        name: 'Brembo Brake Rotors',
        price: 89.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=100',
      },
    ],
  },
];

export const mockAddresses = [
  {
    id: 1,
    title: 'المنزل',
    fullName: 'محمد أحمد',
    street: 'شارع الملك فهد 123',
    city: 'الرياض',
    state: 'منطقة الرياض',
    zipCode: '12345',
    country: 'المملكة العربية السعودية',
    isDefault: true,
    phone: '+966 50 123 4567',
  },
  {
    id: 2,
    title: 'العمل',
    fullName: 'محمد أحمد',
    street: 'حي العليا - شارع العروبة 456',
    city: 'الرياض',
    state: 'منطقة الرياض',
    zipCode: '12346',
    country: 'المملكة العربية السعودية',
    isDefault: false,
    phone: '+966 50 987 6543',
  },
  {
    id: 3,
    title: 'والدتي',
    fullName: 'فاطمة علي',
    street: 'حي النخيل - شارع الخليج 789',
    city: 'جدة',
    state: 'منطقة مكة المكرمة',
    zipCode: '23456',
    country: 'المملكة العربية السعودية',
    isDefault: false,
    phone: '+966 55 111 2233',
  },
  {
    id: 4,
    title: 'الشقة',
    fullName: 'أحمد محمد',
    street: 'حي الصحافة - شارع التخصصي 321',
    city: 'الدمام',
    state: 'المنطقة الشرقية',
    zipCode: '34567',
    country: 'المملكة العربية السعودية',
    isDefault: false,
    phone: '+966 54 444 5566',
  }
];

export const mockNotifications = [
  {
    id: 1,
    title: 'Order Shipped',
    message: 'Your order #ORD-123457 has been shipped.',
    date: '2023-10-12T10:30:00Z',
    read: false,
    type: 'order',
  },
  {
    id: 2,
    title: 'Special Offer',
    message: 'Get 20% off on all brake parts this weekend!',
    date: '2023-10-11T14:20:00Z',
    read: true,
    type: 'promotion',
  },
];