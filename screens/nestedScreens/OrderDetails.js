import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Constants, width} from '../../utils/Constants';
import {ContinousBaseGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
const {height} = Dimensions.get('window')

const OrderDetails = () => {
  const address = 'j-67/14 hari nagar Ext badarpur mew delhi 110044';
  const data = [
    {key: 'Name', value: 'Sidharth jain'},
    {key: 'Order Id', value: '232'},
    {key: 'Zone', value: 'Beti Hata'},
    {key: 'PinCode', value: '110044'},
    {key: 'Phone No', value: '8744098062'},
    {key: 'Delivery Charges', value: '₹ 57'},
    {key: 'Status', value: '500'},
    {key: 'Saved Amount', value: '₹ 33'},
    {key: 'Estimate Date', value: '12-12-23'},
    {key: 'Estimate Time', value: '7-9 PM'},
    {key: 'Total Amount', value: '₹ 580'},
    {key: 'Grand Total', value: '₹ 768'},
    {key: 'User Id', value: '123opiuy789654123io8745632'},
    {key: 'DB Order No', value: '458796541236548jghgfvgh'},
    {key: 'Adress', value: 'j-67/14 hari nagar Ext badarpur mew delhi 110044'},
  
  ];
  const itemData = [
    {
      "image": "https://grocizy-product-images.s3.ap-south-1.amazonaws.com/Tata_sampann_kala_chana-.png",
      "net_weight": "500GM",
      "discount_percentage": 10,
      "_id": "649011c31402023324efbf05",
      "name": "Tata Sampann Kala Chana",
      "productId": "642bf67c3e9c9abd586d4136",
      "mrp": 64,
      "quantity": 1,
      "price": 58
    },
    {
      "image": "https://grocizy-product-images.s3.ap-south-1.amazonaws.com/Tata_sampann_kala_chana-.png",
      "net_weight": "500GM",
      "discount_percentage": 10,
      "_id": "649011c31402023324efbf06",
      "name": "Tata Sampann Kala Chana",
      "productId": "642bf67c3e9c9abd586d4136",
      "mrp": 64,
      "quantity": 1,
      "price": 58
    },
    {
      "image": "https://grocizy-product-images.s3.ap-south-1.amazonaws.com/Tata_sampann_kala_chana-.png",
      "net_weight": "500GM",
      "discount_percentage": 10,
      "_id": "649011c31402023324efbf07",
      "name": "Tata Sampann Kala Chana",
      "productId": "642bf67c3e9c9abd586d4136",
      "mrp": 64,
      "quantity": 1,
      "price": 58
    },
    {
      "image": "https://grocizy-product-images.s3.ap-south-1.amazonaws.com/Tata_sampann_kala_chana-.png",
      "net_weight": "500GM",
      "discount_percentage": 10,
      "_id": "649011c31402023324efbf08",
      "name": "Tata Sampann Kala Chana",
      "productId": "642bf67c3e9c9abd586d4136",
      "mrp": 64,
      "quantity": 1,
      "price": 58
    },
    {
      "image": "https://grocizy-product-images.s3.ap-south-1.amazonaws.com/Tata_sampann_kala_chana-.png",
      "net_weight": "500GM",
      "discount_percentage": 10,
      "_id": "649011c31402023324efbf09",
      "name": "Tata Sampann Kala Chana",
      "productId": "642bf67c3e9c9abd586d4136",
      "mrp": 64,
      "quantity": 1,
      "price": 58
    },
  ];
  const navigatation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>{item.key}:-</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.textDuoData}>{item.value}</Text>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={{marginHorizontal:(width*0.2)/100}}
        
      />
      </View>
      <View style={{margin:5,backgroundColor:Constants.ICON_COLOR}}>
      <Text style={{fontSize:25,color:"#fff",textAlign:"center"}}>Item's Details</Text>
      </View>
     
     <View style={{flex:1.3,marginHorizontal:(width*1)/100}}>
     <ScrollView>
            {itemData.map(item => (
              <View key={item._id} style={styles.main}>
                <View style={styles.subMain}>
                  <View>
                    <Image
                      source={{uri: item.image}}
                      style={styles.productImg}
                    />
                  </View>
                  <View style={{gap: 5}}>
                    <Text style={styles.orderText}>
                      {item.name} - {item.net_weight}
                    </Text>
                    <Text style={{color: 'brown', fontWeight: '600'}}>
                      Qty - {item.quantity}
                    </Text>
                    <Text style={{color: 'brown', fontWeight: '600'}}>
                      Discount - {item.discount_percentage}%
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          fontSize: 14,
                        }}>
                        MRP ₹{item.mrp}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'green',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    ₹ {eval(item.price * item.quantity)}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
     </View>
     
      
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    marginRight: (width * 1) / 100,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
  itemContainer: {
    flex: 1,
  },
  textData: {
    color: Constants.DASHBOARD_TEXT_COLOR,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  textDuoData: {
    color: Constants.DASHBOARD_TEXT_COLOR,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: (width * 3) / 100,
    paddingBottom: (width * 2) / 100,
    borderColor: 'grey',
    justifyContent: 'space-between',
    marginRight: (width * 2) / 100,
  },
  subMain: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    gap: (width * 2) / 100,
  },
  orderText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: (width * 4) / 100,
  },
  productImg: {
    height: (height * 8) / 100,
    width: (width * 13) / 100,
    resizeMode: 'contain',
  },
  brownText: {
    textAlign: 'right',
    color: '#d44c00',
    fontSize: (width * 4) / 100,
  },
  orderDetails: {
    flexDirection: 'row',
    margin: (width * 1) / 100,
    paddingHorizontal: (width * 2.5) / 100,
    justifyContent: 'space-between',
  },
});
