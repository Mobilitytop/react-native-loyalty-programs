import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

export const activationCardStyles = StyleSheet.create({
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
