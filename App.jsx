/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InputField from "./src/components/atoms/InputField";
import Icon from "react-native-vector-icons/FontAwesome";

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/*<StatusBar*/}
      {/*  barStyle={isDarkMode ? 'light-content' : 'dark-content'}*/}
      {/*  backgroundColor={backgroundStyle.backgroundColor}*/}
      {/*/>*/}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/*<Header />*/}
        <View
          style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
          <InputField
            placeholder='Email'
            iconName={{first: 'user-circle', second: 'eye'}}
            haveSecondIcon={true}
          />
          {/*<View style={styles.container}>*/}
          {/*  <View style={styles.fastSignInContainer}>*/}
          {/*    <TouchableOpacity style={[styles.box, { backgroundColor: '#DB4437' }]}>*/}
          {/*      <Icon name="google" size={40} color="white" />*/}
          {/*    </TouchableOpacity>*/}
          {/*    <TouchableOpacity style={[styles.box, { backgroundColor: '#4267B2' }]}>*/}
          {/*      <Icon name="facebook" size={40} color="white" />*/}
          {/*    </TouchableOpacity>*/}
          {/*    <View*/}
          {/*      style={{*/}
          {/*        width: 100,*/}
          {/*        height: 100,*/}
          {/*        borderRadius: 50,*/}
          {/*        backgroundColor: 'black',*/}
          {/*        transform: [{scaleX: 2}],*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*  <TouchableOpacity style={styles.loginButton}>*/}
          {/*    <Text style={styles.loginButtonText}>Login</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}

          {/*<Section title="Step One">*/}
          {/*  Edit <Text style={styles.highlight}>App.tsx</Text> to change this*/}
          {/*  screen and then come back to see your edits.*/}
          {/*</Section>*/}
          {/*<Section title="See Your Changes">*/}
          {/*  <ReloadInstructions />*/}
          {/*</Section>*/}
          {/*<Section title="Debug">*/}
          {/*  <DebugInstructions />*/}
          {/*</Section>*/}
          {/*<Section title="Learn More">*/}
          {/*  Read the docs to discover what to do next:*/}
          {/*</Section>*/}
          {/*<LearnMoreLinks />*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  fastSignInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default App;
