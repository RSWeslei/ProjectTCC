/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignIn from "./src/screens/SignIn";

AppRegistry.registerComponent(appName, () => SignIn);
