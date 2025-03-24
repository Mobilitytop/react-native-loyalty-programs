import { CashbackPoints } from 'react-native-loyalty-programs';

export default function App() {
  return (
    <CashbackPoints
      postConfig={{
        apiKey: '',
        identifier: '',
        templateCard: '',
        bonus: 10,
        loyalty_level: '',
        gender: '',
        barcode: '',
        discount: '',
      }}
      loyaltyConfig={{
        showActivationCard: true,
        showIssueCard: false,
      }}
    />
  );
}
