import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Constants, height, width} from '../utils/Constants';
import ProductModal from './ProductModel';

const Header = ({title}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalTitle,setModalTitle] =useState();
    const toggleModal = (title) => {
        setModalTitle(title);
        setIsModalVisible(!isModalVisible);
        
      };

  const navigation = useNavigation();
  return (
    <SafeAreaView >

  
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Feather name="menu" size={21} color="#fff" />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={()=>toggleModal("Add Product")}
        style={styles.addIcon}>
        <FontAwesome6 name="add" size={20} color="green" />
      </TouchableOpacity>

    </View>
    <ProductModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onSave={(productData) => {
          // Handle the saved data, for now, just log it
          console.log('Product Data:', productData);
          toggleModal(); // Close the modal after saving
        }}
        title= {modalTitle}
        
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: (height * 7) / 100,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Constants.ICON_COLOR,
    marginBottom: 2,
  },
  titleText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
  },
  addIcon:{
  elevation:10,
    padding: 5,
    borderRadius: 10,
   backgroundColor:"#fff",
    marginRight:5
  }
});
