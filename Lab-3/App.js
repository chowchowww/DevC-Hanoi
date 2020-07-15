import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const ConversionTypeButton = ({ fromCurrency, toCurrency, from, to, setConversionCurrencies }) => {
  const backgroundColor =
    fromCurrency === from && toCurrency === to ? 'lightblue' : null;
  const buttonStyle = {backgroundColor: backgroundColor}
  const fromFlag = from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇸' : '🇻🇳';

  return (
  <TouchableOpacity
    style={[styles.button, buttonStyle]}
    onPress={() => setConversionCurrencies(from, to)}
  >
    <Text>{fromFlag} to {toFlag}</Text>
  </TouchableOpacity>
  );
}

const FormattedCurrency = ({ type, value }) => {
  const format = type === 'usd' ? 'us' : 'vn';
  const currency = type === 'usd' ? 'USD' : 'VND';
  const flag = type === 'usd' ? '🇺🇸' : '🇻🇳';

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: 'currency'
  });

  return (
    <Text style={styles.currencyText}>
      {formatter.format(value)} {flag}
    </Text>
  );
};

export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('vnd');

  const convertCurrency = () => {
    if (fromCurrency === 'vnd') {
      setConvertedValue(currentCurrencyValue / 23000)
    } else {
      setConvertedValue(23000*currentCurrencyValue)
    }
  }

  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };

  useEffect(convertCurrency)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        keyboardType='number-pad'
        autoFocus
        textAlign='center'
        placeholder='100,000,000 VND'
        selectionColor='red'
        style={styles.textInput}
        onChangeText={setFromCurrencyValue}
      />
      <ConversionTypeButton
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
        from='vnd'
        to='usd'
      />
      <ConversionTypeButton
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
        from='usd'
        to='vnd'
      />
      <Text>
        Current currency:
      </Text>
      <FormattedCurrency
        type={fromCurrency}
        value={currentCurrencyValue}
      />
      <Text>
        Conversion currenecy:
      </Text>
      <FormattedCurrency
        type={toCurrency}
        value={convertedCurrencyValue}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }
});
