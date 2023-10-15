/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {screensEnabled} from 'react-native-screens';
import App from './src/App';
screensEnabled();

AppRegistry.registerComponent(appName, () => App);
