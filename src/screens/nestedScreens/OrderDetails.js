import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Constants, width} from '../../utils/Constants';
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';

const OrderDetails = () => {
  const address = 'j-67/14 hari nagar Ext badarpur mew delhi 110044';
  const data = [
    { key: 'Name', value: 'Sidharth jain' },
  { key: 'Order Id', value: '232' },
  { key: 'Zone', value: 'Beti Hata' },
  { key: 'PinCode', value: '110044' },
  { key: 'Phone No', value: '8744098062' },
  { key: 'Delivery Charges', value: '₹ 57' },
  { key: 'Status', value: '500' },
  { key: 'Saved Amount', value: '₹ 33' },
  { key: 'Estimate Date', value: '12-12-23' },
  { key: 'Estimate Time', value: '7-9 PM' },
  { key: 'Total Amount', value: '₹ 580' },
  { key: 'Grand Total', value: '₹ 768' },
  { key: 'User Id', value: '123opiuy789654123io8745632' },
  { key: 'DB Order No', value: '458796541236548jghgfvgh' },
  { key: 'Adress', value: 'j-67/14 hari nagar Ext badarpur mew delhi 110044' },
  ];
  const navigatation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>{item.key}:-</Text>
      <View style={styles.inLeftSubContainer}>
        <Text style={styles.textDuoData}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
      <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>
       
       
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:Constants.DASHBOARD_COLOR
    // alignItems: 'center',

  },
  outerContainer: {
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: (width * 2) / 100,
    paddingVertical: (width * 1) / 100,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: (width * 2) / 100,
    // borderRadius: (width * 2) / 100,
    marginRight:(width * 1) / 100,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
  subContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  textData: {
    color: Constants.DASHBOARD_TEXT_COLOR,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  textDuoData: {
    color: Constants.DASHBOARD_TEXT_COLOR ,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  
  
  inSubContainer: {
    flex: 1,
    // borderWidth: 1,
    
    
  },
  inLeftSubContainer: {
    flex: 1,
    // borderWidth: 1,
    paddingRight:(width*4)/100
    
    
  },
  
});
