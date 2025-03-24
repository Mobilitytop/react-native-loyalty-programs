import { CashbackPoints } from 'react-native-loyalty-programs';

export default function App() {
  return (
    <CashbackPoints
      postConfig={{
        apiKey: '',
        identifier: '',
        templateCard: '',
        bonus: 10,
        loyalty_level: '200',
        gender: 'm',
        barcode: 'barcode',
        discount: '150',
      }}
      loyaltyConfig={{
        showActivationCard: true,
      }}
    />
  );
}
