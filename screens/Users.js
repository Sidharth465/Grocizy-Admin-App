import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

import { Constants, height, width } from '../utils/Constants';
import { DrawerActions, useNavigation } from '@react-navigation/native';
const Users = () => {
  const navigation = useNavigation();
  return (
    <View  style={{height:height*7/100,width:width,borderWidth:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10,backgroundColor:Constants.ICON_COLOR}}>
      <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
      <Feather name='menu'  size={24} color ="#fff" />
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:25,color:"#fff",fontWeight:"600"}}>User List</Text>
      </View>
      <TouchableOpacity >
          <FontAwesome6 name ='add' size={24} color ="#fff"/>
        </TouchableOpacity>
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})