/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // Set Tajawal as default for all font categories
      sans: ['Tajawal-Regular', 'system-ui'],    // Default
      serif: ['Tajawal-Regular', 'system-ui'],   // Fallback
      mono: ['Tajawal-Regular', 'system-ui'],    // Fallback
    },
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#64748b",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },  
      fontFamily:  {
        // Set Tajawal as the default sans font
        sans: ['Tajawal-Regular', 'system-ui'], // ← This makes it default
        // Keep other weights for specific use
        'tajawal': ['Tajawal-Regular', 'system-ui'],
        'tajawal-light': ['Tajawal-Light', 'system-ui'],
        'tajawal-medium': ['Tajawal-Medium', 'system-ui'],
        'tajawal-bold': ['Tajawal-Bold', 'system-ui'],
        'tajawal-extrabold': ['Tajawal-ExtraBold', 'system-ui'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    textAlign: true,
    float: true,
    clear: true,
    margin: true,
    padding: true,
  },
};
