import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {height, width} from '../utils/Constants';
import {ScrollView} from 'react-native-gesture-handler';

const ProductModal = ({isVisible, onClose, onSave, data,title}) => {
  const [productCode, setProductCode] = useState('');
  const [shelfLife, setShelfLife] = useState('');
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [netWeight, setNetWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [slugs, setSlugs] = useState('');
  const [name, setName] = useState('');

  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState('');
  const [mrp, setMrp] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [minimumQuantity, setMinimumQuantity] = useState('');

  const handleSave = () => {
    const productData = {
      product_code: productCode,
      shelf_life: shelfLife,
      country_of_origin: countryOfOrigin,
      sub_category: subCategory,
      brand: brand,
      image: image,
      discount_percentage: discountPercentage,
      isActive: isActive,
      net_weight: netWeight,
      unit: unit,
      slugs: slugs,
      name: name,
      description: description,
      categoryId: categoryId,
      mrp: mrp,
      discount_price: discountPrice,
      minimum_quantity: minimumQuantity,
      category: category,
    };
    onSave(productData);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <View style={{borderBottomWidth: 2, marginBottom: 5, paddingLeft: 5}}>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
             {title}
            </Text>
          </View>
          <ScrollView style={{flex: 1, borderWidth: 0.5}}>
            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Product Name</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.name}
                  onChangeText={text => setName(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Active Status</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.isActive)}
                  onChangeText={text => setIsActive(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Country of Origin</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.country_of_origin)}
                  onChangeText={text => setCountryOfOrigin(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Category</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.category}
                  onChangeText={text => setCategory(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Category Id</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.categoryId}
                  onChangeText={text => setCategoryId(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Sub- Category</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.sub_category}
                  onChangeText={text => setSubCategory(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Product Code</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.product_code}
                  onChangeText={text => setProductCode(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Brand</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.brand}
                  onChangeText={text => setBrand(text)}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Product Description</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.description}
                  onChangeText={text => setDescription(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Unit</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.unit}
                  onChangeText={text => setUnit(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Net Weight</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.net_weight}
                  onChangeText={text => setNetWeight(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>MRP</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.mrp)}
                  onChangeText={text => setMrp(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Discount Price</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.discount_price)}
                  onChangeText={text => setDiscountPrice(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Discount Percentage</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.discount_percentage)}
                  onChangeText={text => setDiscountPercentage(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Minimum Quantity</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={String(data?.minimum_quantity)}
                  onChangeText={text => setMinimumQuantity(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Product Image</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.image}
                  onChangeText={text => setImage(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>Slugs</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.slugs}
                  onChangeText={text => setSlugs(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.textLabelView}>
                <Text style={styles.text}>shelf life</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  defaultValue={data?.shelf_life}
                  onChangeText={text => setShelfLife(text)}
                  editable={true}
                  maxLength={200}
                  multiline={false}
                  style={styles.TextInput}
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              // flex: 1,
              alignItems: 'center',
              height: (height * 5.5) / 100,
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                margin: 5,
                backgroundColor: 'red',
              }}>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.whiteText}>Close</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                margin: 5,
                backgroundColor: 'green',
              }}>
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.whiteText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    borderWidth: 1,
    borderRadius: (width * 1) / 100,
    elevation: 1,
    height: '95%',
    width: '85%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  inputField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth:2,
    gap: 5,
    margin: 2,
    padding: 5,
  },
  textLabelView: {flex: 1, justifyContent: 'center'},
  textInputView: {flex: 4},
  text: {
    fontSize: (width * 3.5) / 100,
    color: 'black',
  },
  whiteText: {
    fontSize: (width * 4) / 100,
    color: '#fff',
    fontWeight: 'bold',
  },
  TextInput: {
    flex: 1,
    borderWidth: 0.5,
    height: '50%',
    fontSize: (width * 3.5) / 100,
    color: 'black',
    padding: 0,
    borderRadius: 5,
    paddingLeft: 5,
  },
});

export default ProductModal;
