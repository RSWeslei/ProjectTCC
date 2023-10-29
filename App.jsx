import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/index';
import SignUp from './src/screens/Signup/index';
import Map from './src/screens/Map/index';
import Home from './src/screens/Home/index';
import 'react-native-gesture-handler';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { BackHandler, Platform, TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from './src/utils/globalColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Filter from "./src/components/organisms/Filter";
import ProductViewer from "./src/screens/ProductViewer";
import Welcome from "./src/screens/Welcome";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const bottomSheetRef = useRef(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const snapPoints = useMemo(() => ['92%', '92%'], []);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleBottomSheet = () => {
    if (bottomSheetRef.current) {
      if (bottomSheetOpen) {
        bottomSheetRef.current.close();
      } else {
        bottomSheetRef.current.expand();
      }
      setBottomSheetOpen(!bottomSheetOpen); // Toggle the state
    }
  };

  const requestLocationPermission = async () => {
    try {
      const permission = Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const status = await check(permission);

      if (status === 'granted') {
        return;
      }

      if (status === 'blocked' && Platform.OS === 'android') {
        console.log('Location access is blocked by the user.');
        return;
      }

      const requestResult = await request(permission);

      if (requestResult === 'granted') {
        console.log('Location permission granted.');
      } else {
        console.log('Location permission denied.');
      }
    } catch (error) {
      console.error('Error requesting location permission: ', error);
    }
  };

  useEffect(() => {
    requestLocationPermission().then(r => {});
    BackHandler.addEventListener('backPress', () => true);

    AsyncStorage.getItem('hasSeenWelcomeScreen')
      .then(value => {
        if (value) {
          setShowWelcomeScreen(false);
        } else {
          setShowWelcomeScreen(true);
        }
      })
      .catch(error => {
        console.error('Error checking AsyncStorage:', error);
        setShowWelcomeScreen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => BackHandler.removeEventListener('backPress', () => true);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {showWelcomeScreen ? (
            <Stack.Screen
              name="Welcome"
              options={{
                headerShown: false,
              }}
              component={Welcome}
            />
          ) : null}
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
            name="ProductViewer"
            component={ProductViewer}
            options={{
              headerTitle: 'Produto',
              headerTitleAlign: 'center',
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
                  headerRight: () => {
                    if (route.name === 'Início') {
                      return (
                        <View style={{ flexDirection: 'row' }}>
                          <TouchableOpacity onPress={toggleBottomSheet}>
                            <Icon
                              name={bottomSheetOpen ? 'close' : 'filter'} // Change icon based on state
                              color={colors.secondaryGrey}
                              size={22}
                              style={{ marginRight: 18 }}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    }
                    return null;
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
      >
        <Filter />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default App;
