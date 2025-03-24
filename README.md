# react-native-loyalty-programs

react-native-loyalty-programs

## Installation

```sh
npm install react-native-loyalty-programs
```

## Usage

```js
import { CashbackPoints } from 'react-native-loyalty-programs';

export default function App() {
  return (
    <CashbackPoints
      postConfig={{
        apiKey: '',
        identifier: '',
        templateCard: '',
        bonus: '',
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
```

## Props

apiKey - loyalty program api key

identifier: loyalty card purchase point

templateCard: map layout

bonus: bonus card

loyalty_level: loyalty level card

gender: user gender

barcode: barcode card

discount: discount card

showActivationCard: activate the button to go to the "ActivationCard" screen

showIssueCard: activate the button to go to the card "IssueCard" screen

## Components

You can also call components individually as needed such as

import { CashbackPoints, Bonus, ActivationCard, IssueCard } from 'react-native-loyalty-programs';

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
