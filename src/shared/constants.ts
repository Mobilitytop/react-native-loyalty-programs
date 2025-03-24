import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;

export const phoneMask = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

export const birthdayMask = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export enum Screens {
  ISSUE_CARD = 'IssueCard',
  ACTIVATION_CARD = 'ActivationCard',
}
