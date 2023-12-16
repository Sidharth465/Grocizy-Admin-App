import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useIsFocused, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API} from '../shared/API-end-points';
import {Constants} from '../utils/Constants';
import ProductModal from '../components/ProductModel';
import Header from '../components/Header';
const {width, height} = Dimensions.get('window');

const Products = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalTitle, setModalTitle] = useState();
  const isFocused = useIsFocused();

  // Toggle Modal
  const toggleModal = (item, title) => {
    setSelectedItem(item);
    setModalTitle(title);
    setIsModalVisible(!isModalVisible);
  };

  const getProductList = async () => {
    try {
      const response = await axios.get(API.Product_List);
      if (!response.status == 200) {
        console.log('Data not Found');
      } else {
        setProductList(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log('Error while fetching OrderDetails', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getProductList();
    }
  }, []);
  const renderItem = ({item, index}) => (
    <View style={styles.list}>
      <TouchableOpacity style={styles.pressable}>
        <View style={styles.firstBlock}>
          <Text style={styles.textCount}>{`${index + 1}.`}</Text>
          <Image source={{uri: item?.image}} style={styles.productImg} />
        </View>

        <View style={styles.secondBlock}>
          <Text style={styles.text}>
            Category: <Text style={styles.orangeText}>{item.category}</Text>
          </Text>
          <View>
            <Text style={styles.itemNameText}>
              {item.name} - {item.net_weight}
            </Text>
            <Text style={styles.text}>MRP: ₹{item.mrp}</Text>
            <Text style={styles.text}>
              Discount: {item.discount_percentage}%
            </Text>
            <Text style={styles.text}>
              Discount Price: ₹{item.discount_price}
            </Text>
            <Text style={styles.text}>
              Inventory Status:{' '}
              <Text
                style={
                  item.inventory.inventoryStatus == 'Available'
                    ? styles.greenText
                    : styles.redText
                }>
                {item.inventory.inventoryStatus}
              </Text>
            </Text>
            <Text style={styles.text}>
              Inventory Qty: {item.inventory.inventoryQuantity}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.thirdBlock}>
        <TouchableOpacity onPress={() => toggleModal(item, 'Edit Product')}>
          <FontAwesome5
            name="edit"
            size={(width * 6) / 100}
            color={Constants.ICON_COLOR}
          />
        </TouchableOpacity>
      </View>

      {/* Render the modal */}
    </View>
  );

  return (
    <SafeAreaView style={styles.constainer}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <>
          <Header title="Product List" />
          <FlatList
            data={productList}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        </>
      )}
      <ProductModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onSave={productData => {
          // Handle the saved data, for now, just log it
          console.log('Product Data:', productData);
          toggleModal(); // Close the modal after saving
        }}
        data={selectedItem}
        title={modalTitle}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  constainer: {flex: 1, backgroundColor: Constants.ICON_COLOR},
  list: {
    flex: 1,
    marginBottom: (width * 3) / 100,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: (width * 1) / 100,
    flexDirection: 'row',
    marginVertical: (width * 0.01) / 100,
    marginHorizontal: (width * 2) / 100,
    elevation: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: -2,
      height: -2,
    },
  },

  text: {
    color: 'black',
    fontSize: (width * 3) / 100,
    fontWeight: '700',
  },
  textCount: {
    color: 'black',
    fontSize: (width * 4) / 100,
    fontWeight: '500',
  },
  greenText: {
    color: 'green',
    fontSize: (width * 3) / 100,
    fontWeight: '800',
  },
  orangeText: {
    color: '#FF7F50',
    fontSize: (width * 3) / 100,
    fontWeight: '800',
  },
  itemNameText: {
    color: Constants.DASHBOARD_TEXT_COLOR,
    fontSize: (width * 3) / 100,
    fontWeight: '800',
    fontFamily: 'Roboto-Black',
  },
  redText: {
    color: 'red',
    fontSize: (width * 3) / 100,
    fontWeight: '800',
  },

  textData: {
    color: '#004d4d',
    fontSize: (width * 4) / 100,
    fontWeight: '600',
  },
  firstBlock: {
    flex: 1.5,
    // borderWidth: 1,
    borderColor: 'blue',

    alignItems: 'center',

    flexDirection: 'row',
  },
  secondBlock: {
    flex: 3,
    gap: (width * 1) / 100,
  },

  thirdBlock: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.5,
  },
  productImg: {
    height: (height * 11) / 100,
    width: (width * 15) / 100,
    resizeMode: 'contain',
  },
  pressable: {
    flex: 2,
    flexDirection: 'row',
    borderRightWidth: 0.5,
  },
});
