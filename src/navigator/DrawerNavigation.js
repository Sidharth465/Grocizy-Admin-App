import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screen} from '../utils/screensName';
import Orders from '../screens/Orders';
import Products from '../screens/Products';
import Users from '../screens/Users';
import Admin from '../screens/Admin';
import Categories from '../screens/Categories';
import Dashboard from '../screens/Dashboard';
import { Constants, width } from '../utils/Constants';
import CustomDrawer from '../components/CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator  drawerContent={props=><CustomDrawer {...props}/>}>
      <Drawer.Screen
        name={Screen.DASHBOARD_SCREEN}
        component={Dashboard}
        options={{headerTitleAlign: 'center', headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: Constants.DASHBOARD_TEXT_COLOR},
        headerTintColor: '#fff',
        headerTitleStyle: {fontSize: 25},
        drawerIcon:()=>(<MaterialIcons name ='dashboard' size={24} color ={Constants.ICON_COLOR}/>)
      }}
        
      />
      <Drawer.Screen
        name={Screen.ORDERS_SCREEN}
        component={Orders}
        options={{headerTitleAlign: 'center',
        drawerLabel:"Orders",
        title:"Order List",
        headerStyle: {backgroundColor: Constants.DASHBOARD_TEXT_COLOR},
        headerTintColor: '#fff',

        drawerIcon:()=>(<Entypo name ='shopping-cart' size={24} color ={Constants.ICON_COLOR}/>)

      }}
      />
      <Drawer.Screen
        name={Screen.PRODUCTS_SCREEN}
        component={Products}
        options={{headerTitleAlign: 'center',
        drawerIcon:()=>(<FontAwesome6 name ='arrow-up-right-dots' size={24} color ={Constants.ICON_COLOR}/>)}}
      />
      <Drawer.Screen
        name={Screen.CATEGORIES_SCREEN}
        component={Categories}
        options={{headerTitleAlign: 'center',
        drawerIcon:()=>(<MaterialIcons name ='category' size={24} color ={Constants.ICON_COLOR}/>)}}
      />
      <Drawer.Screen
        name={Screen.USER_SCREEN}
        component={Users}
        options={{headerTitleAlign: 'center',
        drawerIcon:()=>(<FontAwesome name ='users' size={24} color ={Constants.ICON_COLOR}/>)}}
      />
      <Drawer.Screen
        name={Screen.ADMIN_SCREEN}
        component={Admin}
        options={{headerTitleAlign: 'center',
        drawerIcon:()=>(<MaterialIcons name ='admin-panel-settings' size={24} color ={Constants.ICON_COLOR}/>)}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
