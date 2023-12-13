import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import React from 'react';
import {Screen} from '../utils/screensName'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Constants} from '../utils/Constants'
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const Orders = ({navigation}) => {
  const OrdersList = [
    {
      id: 1,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 23,2023 12:55 PM',
    },
    {
      id: 2,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 9,2023 8:55 PM',
    },
    {
      id: 3,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 9,2023 8:55 PM',
    },
    {
      id: 4,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 9,2023 8:55 PM',
    },
    {
      id: 5,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 9,2023 8:55 PM',
    },
    {
      id: 6,
      orderId: 2565,
      name: 'Sid',
      zone: 'Beti Hata',
      totalItems: 6,
      totalAmounts: 277,
      grandTotal: 598,
      orderStatus: 'placed',
      createdAt: 'Dec 9,2023 8:55 PM',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        numColumns={1}
        data={OrdersList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            // onPress={() => {
            //   navigation.navigate(Screen.ORDER_DETAILS_SCREEN, {
            //     itemId: item.id,
            //   });
            // }}
            style={styles.container}>
            <View style={[styles.container]}>
              {/* 1st partition */}
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: width * 0.09,
                  // borderWidth:5,
                  // borderColor:Constants.ICON_COLOR
                }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  color={Constants.ICON_COLOR}
                  size={40}
                />
              </View>
              {/* 2nd partition */}
              <View
                style={{
                  marginLeft: 5,
                  
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                  {/* 2nd LEFT  */}
                <View >
                  <Text style={styles.text}>
                    OrderId:
                  </Text>
                  <Text style={styles.text}>
                    Name:
                  </Text>
                  <Text style={styles.text}>
                    Zone:
                  </Text>
                  <Text style={styles.text}>
                    Total Items: 
                  </Text>
                  <Text style={styles.text}>
                    Total Amount:
                  </Text>
                  <Text style={styles.text}>
                    Grand Total:
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {color: '#00b300', fontWeight: '600'},
                    ]}>
                    Order Status:
                  </Text>
                  <Text style={styles.text}>Created At: </Text>
                </View>
                  {/* 2nd RIGHT */}
                <View style={{paddingLeft:(width*2)/100}}>
                  <Text style={styles.textData}>{item.orderId}</Text>
                  <Text style={styles.textData}> {item.name}</Text>
                  <Text style={styles.textData}> {item.zone}</Text>
                  <Text style={styles.textData}>{item.totalItems}</Text>
                  <Text style={styles.textData}>{item.totalAmounts}</Text>
                  <Text style={styles.textData}>{item.grandTotal}</Text>
                  <Text
                    style={[
                      styles.text,
                      {color: '#00b300', fontWeight: '600'},
                    ]}>
                    {item.orderStatus}
                  </Text>
                  <Text style={styles.text}>{item.createdAt}</Text>
                </View>
              </View>
            </View>
            {/* 3rd partitioned */}
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate(Screen.ORDER_DETAILS_SCREEN)}
              style={{
                backgroundColor: Constants.ICON_COLOR,
                padding: 10,
                borderRadius: width,
                borderColor: Constants.ICON_COLOR,
                alignItems: 'center',
                padding: (width * 3) / 100,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                View
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Details
              </Text>
            </TouchableOpacity>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: (width * 3) / 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: (width * 2) / 100,
    paddingVertical: (width * 1) / 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: (width * 2) / 100,
    borderRadius: (width * 2) / 100,
  },
  item: {
    justifyContent: 'center',
    backgroundColor: '#e6fff3',
    padding: 'auto',
  },
  text: {
    color: 'black',
    fontSize: (width * 4) / 100,
    fontWeight: '800',
  },
  OrderListContainer: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textData:{
    color: '#004d4d',
    fontSize: (width * 4) / 100,
    fontWeight: '600',
  }
});
