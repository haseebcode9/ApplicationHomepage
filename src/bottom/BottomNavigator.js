import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import MySpace from './MySpace';
import Notifications from './Notifications';
import MyIcons2 from 'react-native-vector-icons/AntDesign';
import MyIcons3 from 'react-native-vector-icons/EvilIcons';
import {Image, View} from 'react-native';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MyIcons2 name="home" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="My Space"
        component={MySpace}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                backgroundColor: '#DBD2FB',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                marginBottom: -5,
              }}>
              <Image
                source={require('../images/anime.png')}
                style={{width: 24, height: 24}}
              />
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MyIcons3 name="bell" color={color} size={40} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
