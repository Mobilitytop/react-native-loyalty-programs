import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Screens } from '../shared/constants';
import { useState, type PropsWithChildren } from 'react';
import type { ModuleProps } from '../shared/types';
import { ActivationCard } from './ActivationCard';
import { IssueCard } from './IssueCard';
import { cashbackPointsStyles } from './styles';

export const CashbackPoints = ({
  postConfig,
  loyaltyConfig,
}: PropsWithChildren<ModuleProps>) => {
  const [type, setType] = useState<string | null>(null);

  const handleSetType = (newType: string) => setType(newType);

  if (type === Screens.ACTIVATION_CARD) {
    return <ActivationCard />;
  }

  if (type === Screens.ISSUE_CARD) {
    return <IssueCard postConfig={postConfig} />;
  }

  return (
    <View style={cashbackPointsStyles.container}>
      <Text style={cashbackPointsStyles.title}>Кешбэк баллами за покупки</Text>
      <Text style={cashbackPointsStyles.description}>
        Выпустите виртуальную карту или активируйте пластиковую из супермаркета
        и получайте баллы за любые покупки
      </Text>

      <View style={cashbackPointsStyles.type}>
        <TouchableOpacity
          disabled={!loyaltyConfig?.showIssueCard}
          onPress={() => handleSetType(Screens.ISSUE_CARD)}
          style={cashbackPointsStyles.button}
        >
          <View style={cashbackPointsStyles.buttonIcon}>
            <Image
              source={require('../assets/icons/card.png')}
              style={cashbackPointsStyles.icon}
            />
          </View>
          <View style={cashbackPointsStyles.buttonText}>
            <Text style={cashbackPointsStyles.buttonTitle}>
              Выпустить карту
            </Text>
            <Text style={cashbackPointsStyles.buttonDescription}>
              Создание виртуальной карты
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!loyaltyConfig?.showActivationCard}
          style={[cashbackPointsStyles.button, cashbackPointsStyles.mt]}
          onPress={() => handleSetType(Screens.ACTIVATION_CARD)}
        >
          <View style={cashbackPointsStyles.buttonIcon}>
            <Image
              source={require('../assets/icons/check.png')}
              style={cashbackPointsStyles.icon}
            />
          </View>
          <View style={cashbackPointsStyles.buttonText}>
            <Text style={cashbackPointsStyles.buttonTitle}>Активировать</Text>
            <Text style={cashbackPointsStyles.buttonDescription}>
              Пластиковую карту из супермаркета
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={cashbackPointsStyles.policy}>
        Нажимая кнопку Выпустить карту или Активировать, вы соглашаетесь с{' '}
        <Text style={cashbackPointsStyles.policyLink}>
          условиями программы лояльности
        </Text>
      </Text>
    </View>
  );
};
