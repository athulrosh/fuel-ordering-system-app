import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import OrderButton from '../components/orderButtonPassbook';
import color from '../config/color';
import Statusbar from '../components/Statusbar';

const PassBookScreen = ({ w_amount, o_completed }) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:40}}>
         <Statusbar heading="PASSBOOK" condition="1"/>
      </View>
      
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.box}>
        <View style={styles.ordersCompletedContainer}>
          <FontAwesome name="check-circle" size={24} color={color.primary} />
          <Text style={styles.ordersCompletedText}>ORDERS COMPLETED</Text>
        </View>
        </View>
      <View style={styles.walletDetails}>
        <View style={styles.walletItem}>
          <Text style={styles.walletValue}>{o_completed}</Text>
        </View>
      </View>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        <OrderButton orderId="12345" amount="$50.00" date="May 13, 2023" />
        <OrderButton orderId="67890" amount="$25.00" date="May 12, 2023" />
        <OrderButton orderId="54321" amount="$35.00" date="May 11, 2023" />
        <OrderButton orderId="12345" amount="$50.00" date="May 13, 2023" />
        <OrderButton orderId="67890" amount="$25.00" date="May 12, 2023" />
        <OrderButton orderId="54321" amount="$35.00" date="May 11, 2023" />
        <OrderButton orderId="12345" amount="$50.00" date="May 13, 2023" />
        <OrderButton orderId="67890" amount="$25.00" date="May 12, 2023" />
        <OrderButton orderId="54321" amount="$35.00" date="May 11, 2023" />
        {/* Add more OrderButton components */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: color.primary,
  },
  ordersCompletedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ordersCompletedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  walletDetails: {
   
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"space-between"
  },
  walletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  walletLabel: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  walletValue: {
    fontSize: 25,
    fontWeight:"bold"
  },
  scrollContainer: {
    flex: 1,
  },

  box:{
      borderColor:color.primary,
      borderWidth:2,
      height:32,
      borderRadius: 10,
      paddingHorizontal:10
  }
});

export default PassBookScreen;
