import React from 'react';
import LastRecord from './LastRecords';
import { ScrollView } from 'react-native-gesture-handler';
import ListAccounts from './ListAccounts';

const data = require('../data/data.json');

export default function Dashboard({ navigation }){
  return(
    <ScrollView style={{marginHorizontal: 15}}>
      <ListAccounts accounts={data.account_information}/>
      <LastRecord records={data.detail}/>
    </ScrollView>
  )
};
