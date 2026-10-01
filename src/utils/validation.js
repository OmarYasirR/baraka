import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const addressValidationSchema = Yup.object({
  title: Yup.string().required('Address title is required'),
  fullName: Yup.string().required('Full name is required'),
  street: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
    .required('ZIP code is required'),
  country: Yup.string().required('Country is required'),
  phone: Yup.string()
    .matches(/^\+?[\d\s-()]{10,}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
});

export const paymentValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Please enter a valid 16-digit card number')
    .required('Card number is required'),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Please enter a valid expiry date (MM/YY)')
    .required('Expiry date is required'),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, 'Please enter a valid CVV')
    .required('CVV is required'),
  cardholderName: Yup.string().required('Cardholder name is required'),
});

export const reviewValidationSchema = Yup.object({
  rating: Yup.number()
    .min(1, 'Rating is required')
    .max(5, 'Rating must be between 1 and 5')
    .required('Rating is required'),
  comment: Yup.string()
    .min(10, 'Review must be at least 10 characters')
    .max(500, 'Review must be less than 500 characters')
    .required('Review comment is required'),
});

// Utility validation functions
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-()]{10,}$/;
  return re.test(phone);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s+/g, '');
  return /^\d{16}$/.test(cleaned);
};

export const validateExpiryDate = (expiryDate) => {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
};