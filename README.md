# react-native-loyalty-programs

react-native-loyalty-programs

## Installation

```sh
npm install react-native-loyalty-programs
```

## Usage

```js

import { CashbackPoints,  ActivationCard, IssueCard} from 'react-native-loyalty-programs';

export default function App() {
  return (
    <CashbackPoints
      apiKey=""
      identifier=""
      templateCard=""
      showActivationCard - optional
      showIssueCard - optional
    />
  );
}

Вы можете вызвать эти компоненты по отдельности.

export default function App() {
  return (
    <ActivationCard
      apiKey=""
      identifier=""
      templateCard=""
    />
  );
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
