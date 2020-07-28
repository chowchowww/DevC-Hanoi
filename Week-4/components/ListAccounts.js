import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import currencyFormat from '../utils/currencyFormat';

const Cash = ({ account,color }) => (
  <View style={[styles.boxCash, {backgroundColor: color}]}>
    <Text style={styles.textBoxCash}>{account.type === 1 ? 'Bank account' : account.type === 2 ? 'Credit card' : 'Cash'}</Text>
    <Text style={styles.textBoxCashMoney}>{currencyFormat(account.total)}</Text>
  </View>
)

export default function ListAccounts({ accounts }){
  return(
    <View>
      <Text style={styles.textHeader}>List of Account</Text>
      <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between'}}>
        <Cash account={accounts.bank} color='#E437BC'/>
        <Cash account={accounts.credit} color='#EFA75A'/>
        <Cash account={accounts.cash} color='#23E3D6'/>
      </View>
      <View style={styles.bigBoxCash}>
        <Text style={styles.bigTextBoxCash}>{currencyFormat(accounts.total)}</Text>
        <Text style={styles.bigTextBox}>Total Balance</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginVertical: 10
  },
  bigBoxCash: {
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    height: 75,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  bigTextBox: {
    color: '#A6B1C0',
    fontWeight: '200',
    fontSize: 16,
  },
  bigTextBoxCash: {
    color: '#FF958F',
    fontWeight: '800',
    fontSize: 25,
  },
  boxCash: {
    borderRadius: 10,
    width: '32%',
    height: 75,
    justifyContent: 'center',
  },
  textBoxCash: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10
  },
  textBoxCashMoney: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
});