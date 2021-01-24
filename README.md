# Epicture

![Epicture logo](https://user-images.githubusercontent.com/72378848/105633511-4a80fe00-5e59-11eb-8e20-056b24a59ed9.png)

### Epicture is a cross platform mobile client to share and upload images with Imgur API.

## Overview

- [Getting started](#getting-started)
- [Running the application](#running-the-application)
- [Application](#application)
- [API Imgur](#API-imgur)
- [Contributors](#contributors)

## Getting started

Epicture was created with react-native/expo. Follow to instruction if you have not install React Native and/or Expo:

- React Native

```bash
npm install -g react-native-cli # For npm
yarn global add react-native-cli # For yarn
```

- Expo

```bash
npm install --global expo-cli # For npm
yarn global add expo-cli # For yarn
```

For more information, please read the official documentation: [React Native](https://reactnative.dev/) & [Expo](https://docs.expo.io/)

## Running the application

- Clone the repertory

```bash
git clone git@github.com:EpitechIT2020/C-COD-290-PAR-2-1-epicture-bleine.dhellot.git

cd C-COD-290-PAR-2-1-epicture-bleine.dhellot
```

- Install all the dependencies

```bash
npm install # For npm

yarn install # Form npm
```

- Running the app

```bash
expo start
```

- Run on your devise

For Android install [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US) in Google Play
For iOS install [Expo](https://apps.apple.com/fr/app/expo-client/id982107779) in App store

Open the app and scan the QR code from your localhost dashboard
![qrcode](https://user-images.githubusercontent.com/72378848/105633994-0c390e00-5e5c-11eb-9f03-5e21569f71d3.png)

If you have any issue, click on "Tunnel" and scan the new QR code
![tunnel](https://user-images.githubusercontent.com/72378848/105634104-ccbef180-5e5c-11eb-8733-d0cf61d8a530.png)

- Run on your emulator

For Android, click "Run on Android device/emulator" on your localhost Dashboard
![android_1](https://user-images.githubusercontent.com/72378848/105634432-325fad80-5e5e-11eb-8f41-f22a6547f02d.png)

For iOS, click "Run on iOS simulator" on your localhost Dashboard
![ios_1](https://user-images.githubusercontent.com/72378848/105634431-31c71700-5e5e-11eb-8ed8-af5b2e9d9212.png)

If you are having a problem please follow the official documentation: For [Android](https://docs.expo.io/workflow/android-studio-emulator/) & for [iOS](https://docs.expo.io/workflow/ios-simulator/)

- Run on your browser

It is possible to run the application on your browser navigation.
![brower_1](https://user-images.githubusercontent.com/72378848/105634434-32f84400-5e5e-11eb-800f-2fa66c3b4e4f.png)

But we recommend you to use your phone device or your emulator.

## Application

To use the application you must have an imgur account. If it is not the case, we recommend you to [register](https://imgur.com/register?redirect=https%3A%2F%2Fimgur.com%2F)

![capture](https://user-images.githubusercontent.com/72378848/105635534-93d64b00-5e63-11eb-90d9-a32ba58d5214.png)

## API Imgur

As said early, Epicture is an image application using the [API of Imgur](https://apidocs.imgur.com/#intro).
Thanks to Imgur API, you can use all the fonctionnalities of Imgur infrastructure. We hightly recommend you to read the official documentation to understand the fonction of the API. But first you need to create and/or login with an imgur account. You need a client ID to use the API, after login you must [register your application](https://api.imgur.com/oauth2/addclient?). If you want to explore the endpoints, try its with [Postman](https://www.postman.com/).

## Contributors

Epitech is a project for Coding Academy by Epitech (Code & Go).

- [Marie Jacquier](https://github.com/marizona)
- [Elias Gouirhate](https://github.com/eligrt10)
- [Bleine Dhellot](https://github.com/bleine201)
- [Romain Galtier](https://github.com/Romain1103)
