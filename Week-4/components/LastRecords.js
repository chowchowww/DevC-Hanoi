import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import currencyFormat from '../utils/currencyFormat';

const Record = ({ navigation, source, colorIcon, title, subTitle, date, price, colorText}) => (
  <TouchableOpacity style={styles.recordContainer} onPress={() => alert('1')}>
    <View style={styles.insideContainer}>
      <View>
        <Text style={[styles.titleFormat, {marginLeft: 10}]}>{title}</Text>
        <Text style={[styles.subTitleFormat, {marginLeft: 10}]}>{subTitle}</Text>
      </View>
      <View style={styles.rightCol}>
        <Text style={[styles.subTitleFormat, {textAlign: 'right'}]}>{date}</Text>
        <Text style={[styles.subTitleFormat, {textAlign: 'right', color: colorText}]}>{currencyFormat(parseFloat(price))}</Text>
      </View>
    </View>
    <View style={[styles.iconContainer, {backgroundColor: colorIcon}]}>
      <Image
        source={source}
        style={styles.iconRecord}
        resizeMode='cover'
      />
    </View>
  </TouchableOpacity>
)

export default function LastRecord({ navigation, records }){
  return(
    <View>
      <Text style={styles.textHeader}>Last Records Overview</Text>
      <Record source={require('../assets/Icons/Group-253x.png')} colorIcon='#FEC180' title='Groceries' subTitle='Credit card' date='Today' price='250' colorText='#FF958F' navigation={navigation}/>
      <Record source={require('../assets/Icons/Path-987x.png')} colorIcon='#EFBAD3' title='Clothes' subTitle='Credit card' date='03/04/2018' price='100' colorText='#A254F2' />
      <Record source={require('../assets/Icons/Path-986x.png')} colorIcon='#54BAE6' title='Rental' subTitle='Cash' date='01/03/2018' price='500' colorText='#51EFDE' />
    </View>
  )
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginVertical: 10
  },
  insideContainer: {
    height: 75,
    paddingLeft: '10%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  recordContainer: {
    marginVertical: 10,
    paddingLeft: '10%',
    justifyContent: 'center',
  },
  iconRecord: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  titleFormat: {
    color: 'black',
    fontSize: 16,
  },
  subTitleFormat: {
    color: 'gray',
    fontSize: 13
  },
  rightCol: {
    flex: 3,
    marginRight: 10
  }
});