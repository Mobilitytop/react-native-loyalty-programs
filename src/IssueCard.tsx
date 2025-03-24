import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFormik } from 'formik';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import MaskInput from 'react-native-mask-input';
import { useState, type PropsWithChildren } from 'react';
import { birthdayMask, phoneMask, windowWidth } from './constants';
import type { ModuleProps, PassesTeycaProps } from './interface';
import { issueCardSchema } from './validationSchema';
import { useTeyka } from './hooks';

export const IssueCard = ({
  apiKey,
  identifier,
  templateCard,
}: PropsWithChildren<ModuleProps>) => {
  const { handleCreatePasses, loading } = useTeyka(apiKey, identifier);
  const [isEnabled, setIsEnabled] = useState(false);

  const { handleChange, handleSubmit, dirty, isValid, values, errors } =
    useFormik({
      initialValues: {
        template: templateCard,
        first_name: '',
        last_name: '',
        // pat_name: '',
        phone: '',
        email: '',
        birthday: '',
        // gender: '',
        // barcode: '',
        // discount: '',
        // bonus: '',
        // loyalty_level: '',
      },
      validationSchema: issueCardSchema,
      onSubmit: async (data: PassesTeycaProps) => handleCreatePasses(data),
    });

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Выпустить карту</Text>
        <Text style={styles.description}>
          Оформите карту, чтобы получать скидки и специальные цены.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={[styles.input, errors.first_name && styles.inputBorderError]}
            onChangeText={handleChange('first_name')}
            placeholder="Имя"
          />
          <TextInput
            style={[styles.input, errors.last_name && styles.inputBorderError]}
            onChangeText={handleChange('last_name')}
            placeholder="Фамилия*"
          />
          <MaskInput
            value={values.phone}
            style={[styles.input, errors.phone && styles.inputBorderError]}
            onChangeText={handleChange('phone')}
            mask={phoneMask}
            placeholder="Номер телефона"
            placeholderTextColor="#828282"
          />
          <MaskInput
            value={values.birthday}
            style={[styles.input, errors.birthday && styles.inputBorderError]}
            onChangeText={handleChange('birthday')}
            mask={birthdayMask}
            placeholder="Дата рождения*"
            placeholderTextColor="#828282"
          />
          <TextInput
            placeholder="E-mail"
            style={[styles.input, errors.email && styles.inputBorderError]}
            onChangeText={handleChange('email')}
          />
        </View>

        <View style={styles.policyWrapper}>
          <Switch
            trackColor={{ false: '#f2f2f2', true: '#F93D00' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <View style={styles.policyWrapperText}>
            <Text style={styles.policy}>
              Сохраняя данные, я соглашаюсь{' '}
              <Text style={styles.policyLink}>
                с политикой обработки персональных данных
              </Text>{' '}
              и выражаю{' '}
              <Text style={styles.policyLink}>
                {' '}
                согласие c предоставлением персональных данных
              </Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          disabled={!(isValid && dirty) || !isEnabled || loading}
          onPress={() => handleSubmit()}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Оформить карту</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(13),
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
    fontWeight: 400,
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
    fontWeight: 400,
    fontSize: scale(16),
    lineHeight: scale(18),
    color: '#fff',
  },
});
