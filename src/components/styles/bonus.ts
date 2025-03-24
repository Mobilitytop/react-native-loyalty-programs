import { StyleSheet } from 'react-native';
import { windowWidth } from '../../shared/constants';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

export const bonusStyles = StyleSheet.create({
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
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: moderateVerticalScale(20),
  },
  price: {
    color: '#fff',
    fontSize: scale(14),
    fontWeight: '400',
  },
  barcode: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(5),
    backgroundColor: '#fff',
  },
});
