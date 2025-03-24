import { Text, TouchableOpacity, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { useState } from 'react';
import { activationCardStyles } from './styles';

export const ActivationCard = ({}) => {
  const [creditCard, setCreditCard] = useState('');

  return (
    <View style={activationCardStyles.container}>
      <Text style={activationCardStyles.title}>
        Активация карты{'\n'}лояльности
      </Text>
      <Text style={activationCardStyles.description}>
        Активация карты лояльности
      </Text>

      <View style={activationCardStyles.card}>
        <MaskInput
          value={creditCard}
          style={activationCardStyles.input}
          onChangeText={setCreditCard}
          mask={Masks.CREDIT_CARD}
          placeholder="Номер карты"
          placeholderTextColor="#828282"
        />
      </View>

      <Text style={activationCardStyles.policy}>
        Заполните все поля, и мы активируем карту
      </Text>

      <TouchableOpacity
        disabled={creditCard.length < 19}
        style={activationCardStyles.button}
      >
        <Text style={activationCardStyles.buttonText}>Активировать</Text>
      </TouchableOpacity>
    </View>
  );
};
