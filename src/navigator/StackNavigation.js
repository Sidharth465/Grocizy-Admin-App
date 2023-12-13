import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Screen} from '../utils/screensName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/Login';
import OrderDetails from '../screens/nestedScreens/OrderDetails';
import { Constants } from '../utils/Constants';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screen.LOGIN_SCREEN}
          component={Login}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={Screen.MAIN_SCREEN}
          component={DrawerNavigation}
          options={{headerShown: false, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={Screen.ORDER_DETAILS_SCREEN}
          component={OrderDetails}
          options={{headerShown: true, headerTitleAlign: 'center',
          title:"Order Details",
          headerTintColor:"#fff",
          headerStyle: {backgroundColor: Constants.DASHBOARD_TEXT_COLOR},}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
