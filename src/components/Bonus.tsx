import { Image, Text, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { BonusProps } from '../shared/types';
import { bonusStyles } from './styles';

export const Bonus = ({
  bonus,
  price,
  date,
  image,
}: PropsWithChildren<BonusProps>) => {
  return (
    <View style={bonusStyles.container}>
      <View style={bonusStyles.info}>
        <Text style={bonusStyles.title}>{bonus} бонусов</Text>
        <Text style={bonusStyles.price}>{price} ₽</Text>
        <Text style={bonusStyles.description}>Сгорят {date}</Text>
      </View>
      <Image source={{ uri: image }} style={bonusStyles.barcode} />
    </View>
  );
};
