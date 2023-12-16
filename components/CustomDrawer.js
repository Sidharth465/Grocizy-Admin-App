import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useNavigation} from '@react-navigation/native';
import {Screen} from '../utils/screensName';
import {Constants} from '../utils/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} =Dimensions.get('window')

const CustomDrawer = props => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    // try {
    //   await AsyncStorage.removeItem("Token"),
    // await AsyncStorage.clear();
    navigation.replace(Screen.LOGIN_SCREEN);

    // } catch (error) {
    //   console.log("Error while Logout",error)
    // }
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, backgroundColor: '#fff', gap: 5}}>
          <View
            style={{
              backgroundColor: Constants.DASHBOARD_TEXT_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: -4,
              paddingVertical: 20,
            }}>
            <Image
              style={{height: 200, width: 200, borderRadius: 10}}
              source={require('../assets/sidebaricon.png')}
            />
          </View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableHighlight
      activeOpacity={1}
      underlayColor='#bfbfbf'
          onPress={handleLogout}
            style={{
              backgroundColor:'#fff',
              padding: "3%",
              borderRadius: 5,
              // alignItems:"center"
              // borderWidth:1,
              marginHorizontal:"4%"
            }}
           >
            <View style={{flexDirection:"row",gap:30,alignItems:"center"}}>
            <MaterialCommunityIcons name ="logout" size={25} color={Constants.ICON_COLOR}  /> 
            <Text
              style={{
                color: '#666666',
                textAlign: 'center',
                fontSize: 14,
                fontWeight:"500"
              }}>
                  Logout
            </Text>
            </View>
          </TouchableHighlight>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
