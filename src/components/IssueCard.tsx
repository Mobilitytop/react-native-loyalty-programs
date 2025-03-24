import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFormik } from 'formik';
import MaskInput from 'react-native-mask-input';
import { useState, type PropsWithChildren } from 'react';
import { birthdayMask, phoneMask } from '../shared/constants';
import type { PassesTeycaProps } from '../shared/interface';
import { issueCardSchema } from '../shared/validationSchema';
import { useTeyka } from '../hooks';
import type { ModuleProps } from '../shared/types';
import { issueCardStyles } from './styles';

export const IssueCard = ({ postConfig }: PropsWithChildren<ModuleProps>) => {
  const {
    gender,
    apiKey,
    identifier,
    barcode,
    discount,
    bonus,
    loyalty_level,
  } = postConfig;
  const { handleCreatePasses, loading } = useTeyka(apiKey, identifier);
  const [isEnabled, setIsEnabled] = useState(false);

  const { handleChange, handleSubmit, dirty, isValid, values, errors } =
    useFormik({
      initialValues: {
        template: postConfig.templateCard,
        first_name: '',
        last_name: '',
        pat_name: '',
        phone: '',
        email: '',
        birthday: '',

        gender: gender,
        barcode: barcode,
        discount: discount,
        bonus: bonus,
        loyalty_level: loyalty_level,
      },
      validationSchema: issueCardSchema,
      onSubmit: async (data: PassesTeycaProps) => {
        handleCreatePasses(data);
      },
    });

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={issueCardStyles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={issueCardStyles.title}>Выпустить карту</Text>
        <Text style={issueCardStyles.description}>
          Оформите карту, чтобы получать скидки и специальные цены.
        </Text>

        <View style={issueCardStyles.form}>
          <TextInput
            style={[
              issueCardStyles.input,
              errors.first_name && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('first_name')}
            placeholder="Имя"
          />
          <TextInput
            style={[
              issueCardStyles.input,
              errors.last_name && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('last_name')}
            placeholder="Фамилия*"
          />
          <TextInput
            style={[
              issueCardStyles.input,
              errors.pat_name && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('pat_name')}
            placeholder="Отчество"
          />
          <MaskInput
            value={values.phone}
            style={[
              issueCardStyles.input,
              errors.phone && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('phone')}
            mask={phoneMask}
            placeholder="Номер телефона"
            placeholderTextColor="#828282"
          />
          <MaskInput
            value={values.birthday}
            style={[
              issueCardStyles.input,
              errors.birthday && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('birthday')}
            mask={birthdayMask}
            placeholder="Дата рождения*"
            placeholderTextColor="#828282"
          />
          <TextInput
            placeholder="E-mail"
            style={[
              issueCardStyles.input,
              errors.email && issueCardStyles.inputBorderError,
            ]}
            onChangeText={handleChange('email')}
          />
        </View>

        <View style={issueCardStyles.policyWrapper}>
          <Switch
            trackColor={{ false: '#f2f2f2', true: '#F93D00' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <View style={issueCardStyles.policyWrapperText}>
            <Text style={issueCardStyles.policy}>
              Сохраняя данные, я соглашаюсь{' '}
              <Text style={issueCardStyles.policyLink}>
                с политикой обработки персональных данных
              </Text>{' '}
              и выражаю{' '}
              <Text style={issueCardStyles.policyLink}>
                {' '}
                согласие c предоставлением персональных данных
              </Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          disabled={!(isValid && dirty) || !isEnabled || loading}
          onPress={() => handleSubmit()}
          style={issueCardStyles.button}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={issueCardStyles.buttonText}>Оформить карту</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
