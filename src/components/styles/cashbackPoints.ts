import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { windowWidth } from '../../shared/constants';

export const cashbackPointsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  title: {
    fontSize: scale(26),
    fontWeight: '700',
    color: '#030303',
  },
  description: {
    color: '#828282',
    fontSize: scale(15),
    lineHeight: scale(20),
    fontWeight: '400',
    marginTop: moderateVerticalScale(20),
  },
  type: {
    width: '100%',
    marginTop: moderateVerticalScale(30),
  },
  mt: {
    marginTop: moderateVerticalScale(15),
  },
  button: {
    width: '100%',
    backgroundColor: '#219F381A',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: scale(21),
    paddingHorizontal: scale(15),
    borderRadius: scale(10),
  },
  buttonIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    backgroundColor: '#219F38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: windowWidth - scale(110),
    marginLeft: moderateScale(10),
  },
  buttonTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#030303',
  },
  buttonDescription: {
    color: '#6A6A6A',
    fontSize: scale(15),
    fontWeight: '400',
    marginTop: moderateVerticalScale(5),
  },
  policy: {
    color: '#030303',
    fontSize: scale(13),
    fontWeight: '400',
    marginTop: moderateVerticalScale(20),
  },
  policyLink: {
    color: '#F93D00',
    textDecorationLine: 'underline',
  },
  icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
});
