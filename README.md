# GTWalkThroughMobile 🚧📱

**GTWalkThroughMobile** is the mobile version of the GTWalkThrough app designed to help Georgia Tech students navigate campus more efficiently by avoiding construction zones. Built using **React Native** with **Expo**, this version focuses on mobile-first usability with map-based interaction and community-driven zone reporting.

---

## 📲 Key Features

- **Interactive Map** with Google Maps integration
- **Draw Construction Zones** by tapping multiple points
- **Modal Form** to describe each zone (e.g., description, dates)
- **Live Polygon Preview** as user taps map
- Designed with **React Native Maps** and **Expo**

---

## 🛠️ Tech Stack

- **React Native** (via [Expo](https://expo.dev))
- [**react-native-maps**](https://docs.expo.dev/versions/latest/sdk/map-view/) for interactive map and drawing
- (Coming Soon) **Django REST API** backend integration

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/nakulshah04/GTWalkThroughMobile.git
cd GTWalkThroughMobile
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your Google Maps API Keys

Create a .env file in the root folder and add:

```bash
GOOGLE_MAPS_API_KEY_ANDROID=your-android-api-key
GOOGLE_MAPS_API_KEY_IOS=your-ios-api-key
```

📌 These keys must have Maps SDK for Android and iOS enabled in the Google Cloud Console.

### 4. Start the App

```bash
npx expo start
```
