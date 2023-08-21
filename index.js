/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/Signup";

AppRegistry.registerComponent(appName, () => SignUp);
