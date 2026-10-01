export const products = [
  {
    id: 1,
    name: 'طقم شمعات إشعال بوش',
    category: 'قطع-المحرك',
    subcategory: 'شمعات الإشعال',
    price: 24.99,
    originalPrice: 32.99,
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1565689228866-1a6ed6576bf7?w=400&auto=format&fit=crop',
    brand: 'بوش',
    compatibility: ['تويوتا', 'هوندا', 'فورد', 'بي إم دبليو'],
    description: 'شمعات إشعال عالية الأداء لتحسين كفاءة الوقود وأداء المحرك.',
    features: ['طرف إيريديوم', 'قلب نحاسي', 'طلاء مضاد للتآكل', 'ضمان 100,000 ميل'],
    inStock: true,
    stockQuantity: 45,
    warranty: 'سنتان',
    shipping: { free: true, deliveryTime: '2-3 أيام' },
    tags: ['شمعات-إشعال', 'محرك', 'أداء', 'بوش'],
  },
  {
    id: 2,
    name: 'دوارات فرامل بريمبو - المحور الأمامي',
    category: 'نظام-الفرامل',
    subcategory: 'الدوارات',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop',
    brand: 'بريمبو',
    compatibility: ['أودي', 'بي إم دبليو', 'مرسيدس', 'فولكس فاجن'],
    description: 'دوارات فرامل ممتازة لقوة كبح فائقة وتشتيت حراري ممتاز.',
    features: ['مثقبة متقاطعة', 'مهواة', 'مطلية بالزنك', 'بديل للأصل'],
    inStock: true,
    stockQuantity: 23,
    warranty: 'مدى الحياة',
    shipping: { free: true, deliveryTime: '3-5 أيام' },
    tags: ['فرامل', 'دوارات', 'بريمبو', 'أداء'],
  },
  {
    id: 3,
    name: 'فلتر هواء عالي الأداء من K&N',
    category: 'قطع-المحرك',
    subcategory: 'فلاتر الهواء',
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1603712617860-6e3785d5bb15?w=400&auto=format&fit=crop',
    brand: 'K&N',
    compatibility: ['جميع المركبات'],
    description: 'فلتر هواء عالي التدفق لزيادة قوة الحصان وتحسين تنفس المحرك.',
    features: ['قابل للغسل', 'ضمان مليون ميل', 'قانوني في جميع الولايات', 'تدفق هواء محسن'],
    inStock: true,
    stockQuantity: 78,
    warranty: '10 سنوات',
    shipping: { free: true, deliveryTime: '1-2 يوم' },
    tags: ['فلتر-هواء', 'أداء', 'k&n', 'قابل لإعادة الاستخدام'],
  },
  {
    id: 4,
    name: 'زيت موبيل 1 اصطناعي كامل - 5W-30',
    category: 'قطع-المحرك',
    subcategory: 'زيت المحرك',
    price: 38.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 3451,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&auto=format&fit=crop',
    brand: 'موبيل',
    compatibility: ['جميع المركبات'],
    description: 'زيت محرك اصطناعي كامل لأقصى حماية وأداء للمحرك.',
    features: ['حماية حتى 15,000 ميل', 'تركيبة اصطناعية متقدمة', 'مقاوم للحرارة', 'موفر للوقود'],
    inStock: true,
    stockQuantity: 156,
    warranty: 'غير متوفر',
    shipping: { free: false, deliveryTime: '2-4 أيام' },
    tags: ['زيت-محرك', 'اصطناعي', 'موبيل-1', 'عناية-بالمحرك'],
  },
  {
    id: 5,
    name: 'إطارات ميشلان بايلوت سبورت 4S - مجموعة من 4',
    category: 'إطارات',
    subcategory: 'إطارات الأداء',
    price: 879.96,
    originalPrice: 1159.96,
    rating: 4.9,
    reviews: 1789,
    image: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=400&auto=format&fit=crop',
    brand: 'ميشلان',
    compatibility: ['السارات الرياضية', 'مركبات الأداء'],
    description: 'إطارات صيفية فائقة الأداء لقبضة وتعامُل استثنائي.',
    features: ['مركب موجه للمسار', 'مداس غير متماثل', 'تقنية الركوب المنخفض', 'قبضة ممتازة على الطرق المبتلة'],
    inStock: false,
    stockQuantity: 0,
    warranty: '6 سنوات',
    shipping: { free: true, deliveryTime: '5-7 أيام' },
    tags: ['إطارات', 'ميشلان', 'أداء', 'إطارات-صيفية'],
  },
  {
    id: 6,
    name: 'مصابيح فيليبس X-tremeVision للرأس',
    category: 'النظام-الكهربائي',
    subcategory: 'الإضاءة',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 934,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&auto=format&fit=crop',
    brand: 'فيليبس',
    compatibility: ['معظم المركبات'],
    description: 'مصابيح رأس أكثر سطوعاً لتحسين الرؤية الليلية والسلامة.',
    features: ['+130% مزيد من الضوء', 'شعاع أبيض', 'عمر افتراضي طويل', 'تركيب سهل'],
    inStock: true,
    stockQuantity: 89,
    warranty: 'سنة واحدة',
    shipping: { free: true, deliveryTime: '1-3 أيام' },
    tags: ['مصابيح-رأس', 'إضاءة', 'فيليبس', 'رؤية'],
  },
  {
    id: 7,
    name: 'صدمات أداء بيلشتاين B8',
    category: 'نظام-التعليق',
    subcategory: 'ماصات الصدمات',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&auto=format&fit=crop',
    brand: 'بيلشتاين',
    compatibility: ['بي إم دبليو', 'أودي', 'مرسيدس', 'فولكس فاجن'],
    description: 'ماصات صدمات عالية الأداء لتحسين التعامل وراحة الركوب.',
    features: ['تصميم أحادي الأنبوب', 'ضغط الغاز', 'ضبط رياضي', 'هندسة ألمانية'],
    inStock: true,
    stockQuantity: 34,
    warranty: 'مدى الحياة',
    shipping: { free: true, deliveryTime: '4-6 أيام' },
    tags: ['صدمات', 'تعليق', 'بيلشتاين', 'أداء'],
  },
  {
    id: 8,
    name: 'نظام عادم أداء ماجنا فلو',
    category: 'نظام-العادم',
    subcategory: 'أنظمة العادم',
    price: 459.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1603712617861-ae2d594811b2?w=400&auto=format&fit=crop',
    brand: 'ماجنا فلو',
    compatibility: ['فورد موستانج', 'شفروليه كامارو', 'دودج تشالنجر'],
    description: 'نظام عادم أداء لتحسين الصوت والقوة.',
    features: ['ستانلس ستيل', 'صوت أداء', 'زيادة قوة الحصان', 'تركيب سهل بالبراغي'],
    inStock: true,
    stockQuantity: 12,
    warranty: 'مدى الحياة',
    shipping: { free: true, deliveryTime: '5-8 أيام' },
    tags: ['عادم', 'أداء', 'ماجنا-فلو', 'ستانلس-ستيل'],
  },
  {
    id: 9,
    name: 'مشعاع دينسو - قلب ألومنيوم',
    category: 'نظام-التبريد',
    subcategory: 'المشعاعات',
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.5,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1595079676339-153525a4de7a?w=400&auto=format&fit=crop',
    brand: 'دينسو',
    compatibility: ['تويوتا', 'هوندا', 'نيسان', 'سوبارو'],
    description: 'مشعاع ألومنيوم عالي الكفاءة للتبريد الأمثل للمحرك.',
    features: ['بناء من الألومنيوم', 'تبريد محسن', 'تركيب مطابق للأصل', 'مقاوم للتآكل'],
    inStock: true,
    stockQuantity: 18,
    warranty: '3 سنوات',
    shipping: { free: true, deliveryTime: '3-5 أيام' },
    tags: ['مشعاع', 'تبريد', 'ألومنيوم', 'دينسو'],
  },
  {
    id: 10,
    name: 'بطارية إيه سي ديلكو احترافية',
    category: 'النظام-الكهربائي',
    subcategory: 'البطاريات',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.4,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1578007521270-4a96b9996d1b?w=400&auto=format&fit=crop',
    brand: 'إيه سي ديلكو',
    compatibility: ['جميع المركبات'],
    description: 'بطارية احترافية الجودة بقوة بدء موثوقة وعمر خدمة طويل.',
    features: ['لا تحتاج صيانة', 'مقاومة للانسكاب', 'مقاومة للاهتزاز', 'ضمان 36 شهر'],
    inStock: true,
    stockQuantity: 56,
    warranty: '36 شهر',
    shipping: { free: false, deliveryTime: '2-4 أيام' },
    tags: ['بطارية', 'كهربائي', 'إيه-سي-ديلكو', 'agm'],
  },
  {
    id: 11,
    name: 'حساس أكسجين إن جي كيه',
    category: 'قطع-المحرك',
    subcategory: 'الحساسات',
    price: 67.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1565689228866-1a6ed6576bf7?w=400&auto=format&fit=crop',
    brand: 'إن جي كيه',
    compatibility: ['هوندا', 'تويوتا', 'فورد', 'جنرال موتورز'],
    description: 'حساس أكسجين دقيق لقياس دقيق لنسبة الهواء والوقود.',
    features: ['جودة أصلية', 'استجابة سريعة', 'مدى واسع', 'تركيب سهل'],
    inStock: true,
    stockQuantity: 67,
    warranty: 'سنتان',
    shipping: { free: true, deliveryTime: '2-3 أيام' },
    tags: ['حساس', 'حساس-أكسجين', 'إن-جي-كيه', 'محرك'],
  },
  {
    id: 12,
    name: 'سجاد أرضية ويزرتك - مجموعة من 4',
    category: 'داخلي',
    subcategory: 'السجاد الأرضي',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 2890,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&auto=format&fit=crop',
    brand: 'ويزرتك',
    compatibility: ['معظم المركبات'],
    description: 'سجاد أرضي ممتاز لجميع الأحوال الجوية مع قنوات عميقة لحبس الماء والطين والرمل.',
    features: ['لجميع الأحوال الجوية', 'قنوات عميقة', 'مقاس بالليزر', 'سهل التنظيف'],
    inStock: true,
    stockQuantity: 124,
    warranty: '3 سنوات',
    shipping: { free: true, deliveryTime: '1-3 أيام' },
    tags: ['سجاد-أرضي', 'إكسسوارات', 'ويزرتك', 'داخلي'],
  },
  {
    id: 13,
    name: 'طقم سير التوقيت من جيتس',
    category: 'قطع-المحرك',
    subcategory: 'السيور والسلاسل',
    price: 149.99,
    originalPrice: 189.99,
    rating: 4.7,
    reviews: 723,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&auto=format&fit=crop',
    brand: 'جيتس',
    compatibility: ['هوندا', 'تويوتا', 'سوبارو', 'نيسان'],
    description: 'طقم استبدال سير التوقيت الكامل يشمل السير والبكرة المشددة وبكرات المرشد.',
    features: ['طقم كامل', 'مواصفات أصلية', 'غطاء لدائن حرارية', 'مصمم بدقة'],
    inStock: true,
    stockQuantity: 32,
    warranty: '5 سنوات',
    shipping: { free: true, deliveryTime: '3-5 أيام' },
    tags: ['سير-التوقيت', 'محرك', 'جيتس', 'صيانة'],
  },
  {
    id: 14,
    name: 'مجموعة مصابيح الرأس هيلا هالوجين',
    category: 'النظام-الكهربائي',
    subcategory: 'الإضاءة',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&auto=format&fit=crop',
    brand: 'هيلا',
    compatibility: ['فولكس فاجن', 'أودي', 'بي إم دبليو', 'مرسيدس'],
    description: 'مجموعة مصابيح رأس كاملة مع مصابيح هالوجين.',
    features: ['مجموعة كاملة', 'تقنية الهالوجين', 'تركيب مطابق للأصل', 'هيكل مقاوم للأشعة فوق البنفسجية'],
    inStock: true,
    stockQuantity: 28,
    warranty: 'سنتان',
    shipping: { free: true, deliveryTime: '4-6 أيام' },
    tags: ['مصباح-رأس', 'مجموعة', 'هيلا', 'إضاءة'],
  },
  {
    id: 15,
    name: 'مجموعة دعامات مونرو السريعة',
    category: 'نظام-التعليق',
    subcategory: 'الدعائم',
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.6,
    reviews: 891,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop',
    brand: 'مونرو',
    compatibility: ['فورد', 'شفروليه', 'دودج', 'جنرال موتورز'],
    description: 'مجموعة دعامات كاملة لتركيب سهل.',
    features: ['مجموعة كاملة', 'مجمعة مسبقاً', 'جودة ركوب أصلية', 'تركيب سهل'],
    inStock: true,
    stockQuantity: 41,
    warranty: 'مدى الحياة',
    shipping: { free: true, deliveryTime: '2-4 أيام' },
    tags: ['دعامة', 'تعليق', 'مونرو', 'دعامة-سريعة'],
  },
  {
    id: 16,
    name: 'محول حفاز من واكر',
    category: 'نظام-العادم',
    subcategory: 'المحولات الحفازة',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1603712617861-ae2d594811b2?w=400&auto=format&fit=crop',
    brand: 'واكر',
    compatibility: ['تويوتا', 'هوندا', 'فورد', 'جنرال موتورز'],
    description: 'محول حفاز متوافق مع وكالة حماية البيئة للتحكم الفعال في الانبعاثات.',
    features: ['متوافق مع وكالة حماية البيئة', 'تركيب مباشر', 'ستانلس ستيل', 'قانوني في جميع الولايات'],
    inStock: true,
    stockQuantity: 15,
    warranty: '5 سنوات',
    shipping: { free: false, deliveryTime: '5-7 أيام' },
    tags: ['محول-حفاز', 'عادم', 'واكر', 'انبعاثات'],
  },
  {
    id: 17,
    name: 'مضخة وقود موتوركرافت',
    category: 'وقود',
    subcategory: 'مضخات الوقود',
    price: 129.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&auto=format&fit=crop',
    brand: 'موتوركرافت',
    compatibility: ['فورد', 'لينكولن', 'ميركوري'],
    description: 'مضخة وقود عالية الضغط لتوصيل وقود موثوق.',
    features: ['ضغط عالي', 'كهربائية', 'فلتر مدمج', 'تشغيل هادئ'],
    inStock: true,
    stockQuantity: 38,
    warranty: '3 سنوات',
    shipping: { free: true, deliveryTime: '2-3 أيام' },
    tags: ['مضخة-وقود', 'نظام-الوقود', 'موتوركرافت', 'فورد'],
  },
  {
    id: 18,
    name: 'عمود كردان TRQ',
    category: 'ناقل-الحركة',
    subcategory: 'أعمدة الكردان',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop',
    brand: 'TRQ',
    compatibility: ['هوندا', 'تويوتا', 'نيسان', 'مازدا'],
    description: 'مجموعة عمود كردان كاملة لمركبات الدفع الأمامي.',
    features: ['مجموعة كاملة', 'مواصفات أصلية', 'معالجة حرارية', 'مزيت مدى الحياة'],
    inStock: true,
    stockQuantity: 52,
    warranty: 'سنتان',
    shipping: { free: true, deliveryTime: '3-5 أيام' },
    tags: ['عمود-كردان', 'ناقل-الحركة', 'trq', 'دفع-أمامي'],
  },
  {
    id: 19,
    name: 'حوض زيت دورمان',
    category: 'قطع-المحرك',
    subcategory: 'قطع المحرك',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.3,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1595079676339-153525a4de7a?w=400&auto=format&fit=crop',
    brand: 'دورمان',
    compatibility: ['جنرال موتورز', 'فورد', 'كرايسلر', 'دودج'],
    description: 'حوض زيت بديل مع سداد تصريف مدمج.',
    features: ['فولاذ مضغوط', 'تصريف مدمج', 'بديل للأصل', 'حماية من الصدأ'],
    inStock: true,
    stockQuantity: 27,
    warranty: 'سنة واحدة',
    shipping: { free: true, deliveryTime: '4-6 أيام' },
    tags: ['حوض-زيت', 'محرك', 'دورمان', 'بديل'],
  },
  {
    id: 20,
    name: 'طقم دبرياج فاليو',
    category: 'ناقل-الحركة',
    subcategory: 'طقوم الدبرياج',
    price: 219.99,
    originalPrice: 279.99,
    rating: 4.8,
    reviews: 334,
    image: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=400&auto=format&fit=crop',
    brand: 'فاليو',
    compatibility: ['بي إم دبليو', 'أودي', 'فولكس فاجن', 'مرسيدس'],
    description: 'طقم دبرياج كامل يشمل القرص ولوحة الضغط ومحمل التحرير.',
    features: ['طقم كامل', 'قرص أداء', 'لوحة متينة', 'يشمل المحمل'],
    inStock: true,
    stockQuantity: 19,
    warranty: 'سنتان',
    shipping: { free: true, deliveryTime: '5-8 أيام' },
    tags: ['دبرياج', 'ناقل-الحركة', 'فاليو', 'يدوي'],
  }
];

export const featuredProducts = products.filter(product => 
  product.id === 1 || product.id === 3 || product.id === 6 || product.id === 12
);

export const popularProducts = products.filter(product => 
  product.rating >= 4.7 && product.reviews > 1000
);

export const newArrivals = products.filter(product => 
  product.id >= 9
);

export const getProductsByCategory = (categorySlug) => {
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query) => {
  if (!query || query.trim() === '') return products;
  
  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || product.brand === currentProduct.brand)
    )
    .slice(0, limit);
};

export const filterProducts = (filters = {}) => {
  let filtered = [...products];

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }

  // Brand filter
  if (filters.brands && filters.brands.length > 0) {
    filtered = filtered.filter(product => filters.brands.includes(product.brand));
  }

  // Price range filter
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(product => product.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(product => product.price <= filters.maxPrice);
  }

  // In stock filter
  if (filters.inStock) {
    filtered = filtered.filter(product => product.inStock);
  }

  // Rating filter
  if (filters.minRating) {
    filtered = filtered.filter(product => product.rating >= filters.minRating);
  }

  return filtered;
};

export const sortProducts = (productsList, sortBy = 'default') => {
  const sorted = [...productsList];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'popular':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    default:
      return sorted;
  }
};

export const getBrands = () => {
  const brands = [...new Set(products.map(product => product.brand))];
  return brands.map(brand => ({
    name: brand,
    count: products.filter(product => product.brand === brand).length,
    logo: `https://via.placeholder.com/60x30?text=${brand}`,
  }));
};

export const getPriceRanges = () => {
  const prices = products.map(p => p.price);
  const min = Math.floor(Math.min(...prices));
  const max = Math.ceil(Math.max(...prices));
  
  return {
    min,
    max,
    ranges: [
      { label: 'Under $25', min: 0, max: 25 },
      { label: '$25 - $50', min: 25, max: 50 },
      { label: '$50 - $100', min: 50, max: 100 },
      { label: '$100 - $200', min: 100, max: 200 },
      { label: 'Over $200', min: 200, max: Infinity },
    ],
  };
};