import { StyleSheet, Text, View } from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { windowWidth } from './constants';

export const Bonus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>300 бонусов</Text>
        <Text style={styles.price}>30 ₽</Text>
        <Text style={styles.description}>Сгорят 10.02.2024</Text>
      </View>
      <View style={styles.barcode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F93D00',
    borderRadius: scale(10),
    padding: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    width: windowWidth - scale(170),
  },
  title: {
    fontSize: scale(20),
    fontWeight: 600,
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: 400,
    marginTop: moderateVerticalScale(20),
  },
  price: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: 400,
  },
  barcode: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(5),
    backgroundColor: '#fff',
  },
});
