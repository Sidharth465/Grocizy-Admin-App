import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Constants} from '../utils/Constants';
import { Screen } from '../utils/screensName';


const {width} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {width} = Dimensions.get('window');

  //toggling password hidden to visible
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{height: 200, resizeMode: 'contain'}}
          source={require('../assets/grocizyIcon.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <EvilIcons
              name="user"
              size={width * 0.09}
              color={Constants.ICON_COLOR}
            />
            <TextInput
              style={styles.input}
              placeholder="Email/Username"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.inputContainer}>
            <EvilIcons
              name="lock"
              size={width * 0.09}
              color={Constants.ICON_COLOR}
            />
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.passwordText}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="grey"
                secureTextEntry={!showPassword}
              />
              <Entypo
                style={styles.passwordIcon}
                name={showPassword ? 'eye-with-line' : 'eye'}
                size={width * 0.06}
                color={Constants.ICON_COLOR}
                onPress={toggleShowPassword}
              />
            </View>
          </View>
          <TouchableOpacity onPress={()=>navigation.replace(Screen.MAIN_SCREEN)} style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (width * 15) / 100,
  },
  formContainer: {
    flex: 2,
    width: width,
    paddingHorizontal: (width * 5) / 100,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
    gap: (width * 2) / 100,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: Constants.ICON_COLOR,
    borderWidth: 1,
    color: '#fff',
    fontSize: 18,
  },
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Constants.ICON_COLOR,
    flex: 1,
  },
  passwordText: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 18,
  },
  passwordIcon: {
    paddingHorizontal: '2%',
  },
  loginButton: {
    width: '50%',
    backgroundColor: Constants.ICON_COLOR,
    borderRadius: 6,
    alignSelf: 'center',
    padding: '5%',
    marginTop: '20%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
