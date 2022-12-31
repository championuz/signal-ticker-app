import * as React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Plans from './src/screens/Plans';
import LoadingScreen from './src/screens/LoadingScreen';
import Details from './src/screens/Details';
import { base, primary } from './src/components/Constants';
import {AuthContextProvider} from './src/context/AuthContext';

const BottomTab = createBottomTabNavigator()

const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
    screenOptions={{
      showLabel: true,
      tabBarLabelStyle: {
        color: base,
        fontWeight: '900',
        marginTop: -10
      },
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 25,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingBottom: 20,
        height: 80,
      },
    }}
    >
        <BottomTab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <Image
            source={require('./src/assets/home.png')}
            resizeMode='contain'
            style={{
              height: 25,
              width: 25,
              tintColor: focused ? base : primary
            }}
          />)
        }} />
      <BottomTab.Screen name="Plans" component={Plans} options={{
          tabBarIcon: ({focused}) => (
            <Image
            source={require('./src/assets/clipboard.png')}
            resizeMode='contain'
            style={{
              height: 25,
              width: 25,
              tintColor: focused ? base : primary
            }}
          />)
        }}/>
        {/* <BottomTab.Screen name="Details" component={Details} /> */}
        <BottomTab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({focused}) => (
            <Image
            source={require('./src/assets/account.png')}
            resizeMode='contain'
            style={{
              height: 25,
              width: 25,
              tintColor: focused ? base : primary
            }}
          />)
        }}/>
    </BottomTab.Navigator>
  )
}

function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;