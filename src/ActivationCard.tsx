import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import MaskInput, { Masks } from 'react-native-mask-input';
import { useState } from 'react';

export const ActivationCard = ({}) => {
  const [creditCard, setCreditCard] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Активация карты{'\n'}лояльности</Text>
      <Text style={styles.description}>Активация карты лояльности</Text>

      <View style={styles.card}>
        <MaskInput
          value={creditCard}
          style={styles.input}
          onChangeText={setCreditCard}
          mask={Masks.CREDIT_CARD}
          placeholder="Номер карты"
          placeholderTextColor="#828282"
        />
      </View>

      <Text style={styles.policy}>
        Заполните все поля, и мы активируем карту
      </Text>

      <TouchableOpacity disabled={creditCard.length < 19} style={styles.button}>
        <Text style={styles.buttonText}>Активировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  title: {
    fontSize: scale(26),
    fontWeight: 700,
    color: '#030303',
  },
  description: {
    color: '#828282',
    fontSize: scale(15),
    lineHeight: scale(20),
    fontWeight: 400,
    marginTop: moderateVerticalScale(20),
  },
  card: {
    width: '100%',
    padding: scale(20),
    backgroundColor: '#AEAEAE',
    marginTop: moderateVerticalScale(30),
    borderRadius: scale(20),
  },
  input: {
    width: '100%',
    height: scale(50),
    borderRadius: scale(10),
    backgroundColor: '#fff',
    fontSize: 15,
    padding: scale(15),
  },
  policy: {
    color: '#030303',
    fontSize: scale(13),
    fontWeight: 400,
    marginTop: moderateVerticalScale(20),
  },
  button: {
    position: 'absolute',
    left: scale(15),
    right: scale(15),
    height: scale(46),
    borderRadius: scale(10),
    backgroundColor: '#F93D00',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: scale(20),
  },
  buttonText: {
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: scale(18),
    color: '#fff',
  },
});
