React Native, TypeScript and NativeBase boilerplate to build with Expo to set up and run quickly 🚀

## Requirements
* Node.js LTS 6.11.* or newer
* Typescript and ts-node `sudo npm install -g typescript ts-node`
* react-native `sudo npm install -g react-native`
* tslint on your editor enabled

## Installation for development
1. Navigate to root of project
2. Install dependencies `npm install && react-native link`
3. Try run `npm start`

## npm run scripts

| Command | Description |
| ------ | ------ |
| npm start | Runs packager for Expo app |
| npm run android | Runs packager and starts app in Android emulator (Android studio required) |
| npm run ios | Runs packager and starts app in iOS emulator (XCode required; Mac OS only) |
| npm run deploy | Deploys the app at you Expo account |
| npm run build-android | Build deployed app at Expo for Android |
| npm run build-ios | Build deployed app at Expo for iOS |
| npm run build-status | Shows status and download link for built apk/ipa file |

## Instructions for use

1. This template was built in September 2017. Please check before using if the React Native Development has changed a lot.
2. Check out the [React Native documenation](https://facebook.github.io/react-native/) and [NativeBase documenation](https://docs.nativebase.io/) to understand and modify the default settings.
3. Before you start coding, I recommend that you check the tslint settings and adjust them to your code style if necessary.