import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { CardIcon, CheckIcon } from './svg';
import { Screens, windowWidth } from './constants';
import { useState, type PropsWithChildren } from 'react';
import type { ModuleProps } from './interface';
import { ActivationCard } from './ActivationCard';
import { IssueCard } from './IssueCard';

export const CashbackPoints = ({
  showActivationCard,
  showIssueCard,
  identifier,
  templateCard,
  apiKey,
}: PropsWithChildren<ModuleProps>) => {
  const [type, setType] = useState<string | null>(null);

  const handleSetType = (newType: string) => setType(newType);

  if (type === Screens.ACTIVATION_CARD) {
    return <ActivationCard />;
  }

  if (type === Screens.ISSUE_CARD) {
    return (
      <IssueCard
        apiKey={apiKey}
        identifier={identifier}
        templateCard={templateCard}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кешбэк баллами за покупки</Text>
      <Text style={styles.description}>
        Выпустите виртуальную карту или активируйте пластиковую из супермаркета
        и получайте баллы за любые покупки
      </Text>

      <View style={styles.type}>
        <TouchableOpacity
          disabled={!showActivationCard}
          onPress={() => handleSetType(Screens.ISSUE_CARD)}
          style={styles.button}
        >
          <View style={styles.buttonIcon}>
            <CardIcon />
          </View>
          <View style={styles.buttonText}>
            <Text style={styles.buttonTitle}>Выпустить карту</Text>
            <Text style={styles.buttonDescription}>
              Создание виртуальной карты
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!showIssueCard}
          style={[styles.button, styles.mt]}
          onPress={() => handleSetType(Screens.ACTIVATION_CARD)}
        >
          <View style={styles.buttonIcon}>
            <CheckIcon />
          </View>
          <View style={styles.buttonText}>
            <Text style={styles.buttonTitle}>Активировать</Text>
            <Text style={styles.buttonDescription}>
              Пластиковую карту из супермаркета
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.policy}>
        Нажимая кнопку Выпустить карту или Активировать, вы соглашаетесь с{' '}
        <Text style={styles.policyLink}>условиями программы лояльности</Text>
      </Text>
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
    fontWeight: 600,
    color: '#030303',
  },
  buttonDescription: {
    color: '#6A6A6A',
    fontSize: scale(15),
    fontWeight: 400,
    marginTop: moderateVerticalScale(5),
  },
  policy: {
    color: '#030303',
    fontSize: scale(13),
    fontWeight: 400,
    marginTop: moderateVerticalScale(20),
  },
  policyLink: {
    color: '#F93D00',
    textDecorationLine: 'underline',
  },
});
