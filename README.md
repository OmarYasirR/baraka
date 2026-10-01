<div align="center">

<img src="./assets/baraka_logo.png" alt="Baraka App Logo" width="140" />

# Baraka App

**A modern, bilingual (Arabic / English) mobile shopping experience built with React Native and Expo.**

![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue)
![Framework](https://img.shields.io/badge/React%20Native-Expo-000020?logo=expo)
![Languages](https://img.shields.io/badge/i18n-AR%20%7C%20EN-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Localization & RTL](#localization--rtl)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**Baraka App** is a cross-platform e-commerce mobile application that lets users browse products by category, search, manage a cart and wishlist, check out, and manage their account, all in a clean interface with full **Arabic (RTL)** and **English** support.

The codebase is organized around reusable components, context-based state management, custom hooks, and a layered navigation structure, making it easy to extend and maintain.

---

## Features

**Shopping**
- Home screen with promotional banners and featured products
- Category browsing and product listing (grid / list views)
- Product detail pages
- Fast search with debounced local filtering

**Cart & Checkout**
- Add to cart, update quantities, remove items
- Cart summary with totals
- Checkout flow

**Wishlist**
- Save and manage favorite products

**Authentication**
- Login, registration, and forgot-password flows
- Persistent session via local storage

**Profile & Account**
- Personal info and profile editing
- Shipping addresses and payment methods
- Order history
- Notifications and notification schedule
- Privacy & security, login activity, change password
- Settings (including language)

**Support & Legal**
- Help & Support, Contact, About Us
- Privacy Policy, Terms of Service, Return Policy, Shipping Guide, Warranty Info

**Experience**
- Arabic and English localization
- Custom Tajawal typography
- Custom alert component, loading and empty states
- Smooth animations

---

## Screenshots

> Add screenshots here to showcase the app.

| Home | Categories | Product Details | Cart |
| :---: | :---: | :---: | :---: |
| _coming soon_ | _coming soon_ | _coming soon_ | _coming soon_ |

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) |
| Language | JavaScript (ES6+) |
| Navigation | Stack and tab navigators (see `src/navigation`) |
| State Management | React Context API (App, Auth, Cart, Wishlist) |
| Styling | Tailwind configuration (`tailwind.config.js`) and a custom theme |
| Localization | JSON locale files (`ar.json`, `en.json`) |
| Typography | Tajawal font family |
| Bundler | Metro |

> Exact dependency versions are listed in [`package.json`](./package.json).

---

## Project Structure

```
Baraka App
├── App.js                  # App root
├── index.js                # Entry point
├── app.json                # Expo configuration
├── babel.config.js
├── metro.config.js
├── tailwind.config.js
├── assets/                 # App icon, splash, logo, fonts (Tajawal)
└── src/
    ├── assets/             # Banners and in-app images
    ├── components/
    │   ├── cart/           # AddToCart, CartItem, CartSummary
    │   ├── common/         # Button, Header, SearchBar, ProductCard, CustomAlert...
    │   ├── product/        # ProductDetail, ProductGrid, ProductList
    │   ├── ui/             # Banner, EmptyState, Loading, TabView
    │   └── GlobalText.js   # Typography wrapper
    ├── context/            # App, Auth, Cart, Wishlist providers
    ├── data/               # Categories, products, mock data
    ├── hooks/              # useAuth, useCart, useWishlist, useDebounce, useLocalSearch...
    ├── locales/            # ar.json, en.json
    ├── navigation/         # App, Auth, Main, Stack and Tab navigators
    ├── screens/
    │   ├── auth/           # Login, Register, ForgotPassword
    │   ├── profilePageScreens/   # Account, settings, policies, support
    │   └── ...             # Home, Categories, Search, Cart, Checkout, Profile, ProductDetail
    ├── services/           # api.js, storage.js
    ├── styles/             # colors, theme, tailwind
    └── utils/              # animations, constants, formatters, helpers, validation
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm or yarn
- [Expo Go](https://expo.dev/go) on a physical device, or an Android / iOS emulator

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/baraka-app.git

# 2. Move into the project
cd baraka-app

# 3. Install dependencies
npm install

# 4. Start the development server
npx expo start
```

Then scan the QR code with Expo Go, or press `a` (Android) / `i` (iOS) to launch an emulator.

### Environment Configuration

If you connect the app to a backend, configure the base URL in `src/services/api.js` (or move it to an environment variable):

```js
const BASE_URL = "https://your-api-url.com";
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Run on an Android device or emulator |
| `npm run ios` | Run on an iOS simulator (macOS only) |
| `npm run web` | Run in the browser |

> Check the `scripts` section of `package.json` for the full list.

---

## Architecture

- **Components**: small, reusable, and grouped by domain (`cart`, `product`, `common`, `ui`).
- **Context + Hooks**: global state lives in `src/context`, and each context is exposed through a matching hook (`useAuth`, `useCart`, `useWishlist`) for clean consumption.
- **Navigation layers**: `AppNavigator` decides between `AuthNavigator` and `MainNavigator`; `MainNavigator` composes `TabNavigator` and the stack navigators.
- **Services**: `api.js` handles network requests and `storage.js` handles persistent local storage.
- **Utilities**: validation, formatters, helpers, constants, and animations are isolated in `src/utils`.

---

## Localization & RTL

The app supports **Arabic** and **English**.

- Translations live in `src/locales/ar.json` and `src/locales/en.json`.
- To add a new string, add the same key to both files.
- Arabic text uses the **Tajawal** font, loaded through the `useFonts` hook.

---

## Roadmap

- [ ] Connect to a production backend API
- [ ] Online payment gateway integration
- [ ] Push notifications
- [ ] Order tracking
- [ ] Product reviews and ratings
- [ ] Dark mode
- [ ] Unit and end-to-end tests

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "feat: add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please keep code style consistent and describe your changes clearly in the PR.

---

## License

Distributed under the MIT License. See `LICENSE` for details.

---

## Contact

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

<div align="center">

Made with care for the Baraka community.

</div>