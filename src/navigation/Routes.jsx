import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../utils/helpers';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import SongsScreen from '../screens/SongsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home,Profile } from 'iconsax-react-native';


const {HOME,SONGINFO,SONGS,PROFILE,LOGIN} = SCREENS


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor: "#131624",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset:{
          width: 0,
          height: -10,
        },
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        borderWidth: 0,
      }
    }}
    >
      <Tab.Screen 
      name={HOME} 
      component={HomeScreen} 
      
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        tabBarLabelStyle: {color: "white",fontSize: 13, fontWeight: "600",},
        tabBarIcon:({focused}) => (
        focused ? <Home size="24" color="white" /> : <Home size="20" color="white" />
        )
      }}
      />
      <Tab.Screen 
      name={PROFILE} 
      component={ProfileScreen} 
      
      options={{
        headerShown: false,
        tabBarLabel: "Profile",
        tabBarLabelStyle: {color: "white",fontSize: 13, fontWeight: "600",},
        tabBarIcon:({focused}) => (
        focused ? <Profile size="24" color="white" /> : <Profile size="20" color="white" />
        )
      }}
      />
      
      
      
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();



const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }} >
            <Stack.Screen name={LOGIN} component={LoginScreen} />
            <Stack.Screen name="Main" component={BottomTabs} />
            <Stack.Screen name={SONGS} component={SongsScreen} />
            <Stack.Screen name={SONGINFO} component={SongInfoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes