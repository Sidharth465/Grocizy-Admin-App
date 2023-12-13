import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Screen } from '../utils/screensName'
import { useNavigation } from '@react-navigation/native'
import { Constants } from '../utils/Constants';

const {width} = Dimensions.get("window");

const Dashboard = ({navigation}) => {
  const details ={
    users:569,
    totalOrders:256,
    cancelledOrders:53,
    totalDeliveredOrders:896,
    totalPendingOrders:5

  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
      <TouchableOpacity>
        <Text style={styles.itemLabel}>Total Orders</Text>
        <Text style={styles.itemValue}>{details.users}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity>

        <Text style={styles.itemLabel}>Total Delivered Orders</Text>
        <Text style={styles.itemValue}>{details.totalOrders}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity>

        <Text style={styles.itemLabel}>Total Pending Orders</Text>
        <Text style={styles.itemValue}>{details.cancelledOrders}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity>

        <Text style={styles.itemLabel}>Current Month</Text>
        <Text style={styles.itemValue}>
          {details.totalDeliveredOrders}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity>
        <Text style={styles.itemLabel}>Cancelled Orders</Text>
        <Text style={styles.itemValue}>{details.totalPendingOrders}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity>
        <Text style={styles.itemLabel}>Total Users</Text>
        <Text style={styles.itemValue}>{details.totalPendingOrders}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 10,
    margin:  (width * 3)/100,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: Constants.DASHBOARD_COLOR,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
  },

  box: {
    width: width * 0.40,
    height: width * 0.40,
    backgroundColor: '#fff',
    margin: (width * 3)/100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding:  (width * 3)/100,
  },
  itemLabel: {
    color: '#000',
    fontSize: (width * 6.5)/100,
    fontStyle: 'normal',
    fontWeight: "bold",
    textAlign: 'center',
  },
  itemValue: {
    fontSize: (width * 11) / 100,
    color: Constants.DASHBOARD_TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
})