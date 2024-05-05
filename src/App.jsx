import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import profil from './screens/profil';
import produkbaru from './screens/produkbaru';
import live from './screens/live';
import notivikasi from './screens/notivikasi';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="ProdukBaru" component={produkbaru} options={{
          tabBarLabel: 'Produk Baru',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Live" component={live} options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({ color }) => (
            <Ionicons name="videocam-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Notikasi" component={notivikasi} options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profil" component={profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})