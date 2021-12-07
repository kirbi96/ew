import {StyleProp} from 'react-native';

export const mainContainer: StyleProp<any> = {
  paddingHorizontal: 16,
};

export const flexRow: StyleProp<any> = {
  flexDirection: 'row',
};

export const flexRowBetween: StyleProp<any> = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const flexRowWrap: StyleProp<any> = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};
