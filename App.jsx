import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/index';
import SignUp from './src/screens/Signup/index';
import Map from './src/screens/Map/index';
import Home from './src/screens/Home/index';
import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from './src/utils/globalColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const requestLocationPermission = async () => {
    try {
      const permission = Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const status = await check(permission);

      if (status === 'granted') {
        // Permission already granted
        return;
      }

      if (status === 'blocked' && Platform.OS === 'android') {
        // Handle case where the user has blocked location access on Android
        console.log('Location access is blocked by the user.');
        return;
      }

      const requestResult = await request(permission);

      if (requestResult === 'granted') {
        // Permission granted after request
        console.log('Location permission granted.');
      } else {
        // Handle the case where permission is denied or blocked
        console.log('Location permission denied.');
      }
    } catch (error) {
      console.error('Error requesting location permission: ', error);
    }
  };

  useEffect(() => {
    requestLocationPermission(); // Request location permission when the app starts
    BackHandler.addEventListener('backPress', () => true);
    return () => BackHandler.removeEventListener('backPress', () => true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
          }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondaryGrey,
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: 'bold',
                },
                tabBarIcon: ({ size, color }) => {
                  let iconName;

                  if (route.name === 'Início') {
                    iconName = 'home';
                  } else if (route.name === 'Mapa') {
                    size = 20;
                    iconName = 'map';
                  }
                  return <Icon name={iconName} color={color} size={size} />;
                },
              })}
            >
              <Tab.Screen
                name="Início"
                component={Home}
              />
              <Tab.Screen
                name="Mapa"
                component={Map}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
