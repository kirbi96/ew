import React from 'react';
import {View} from 'react-native';
import {AgEnum, Text} from '../../components/ui/Text';

export const TestScreen = () => {
  return (
    <View>
      <Text Ag={AgEnum.H2}>Тест категории</Text>
    </View>
  );
};