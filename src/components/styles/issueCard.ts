import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { windowWidth } from '../../shared/constants';
import { StyleSheet } from 'react-native';

export const issueCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(13),
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
  form: {
    width: '100%',
    marginTop: moderateVerticalScale(15),
  },
  input: {
    width: '100%',
    height: scale(50),
    borderRadius: scale(10),
    backgroundColor: '#F2F2F2',
    fontSize: 15,
    marginTop: moderateVerticalScale(15),
    padding: scale(15),
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },
  inputBorderError: {
    borderColor: '#F93D00',
  },
  policyWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: moderateVerticalScale(20),
  },
  policyWrapperText: {
    width: windowWidth - scale(80),
    paddingLeft: scale(7),
  },
  policy: {
    color: '#030303',
    fontSize: scale(13),
    fontWeight: '400',
  },
  policyLink: {
    color: '#F93D00',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    height: scale(46),
    borderRadius: scale(10),
    backgroundColor: '#F93D00',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(18),
    color: '#fff',
  },
});
