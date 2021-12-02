import React from 'react';
import {View} from 'react-native';
import {AgEnum, Text} from '../../components/ui/Text';
import {Header} from '../../components/Header';
import {mainContainer} from '../../styles/MainStyles';

export const TestScreen = () => {
  return (
    <View style={mainContainer}>
      <Header title={'Тест категории'} />
      <Text Ag={AgEnum.H2} />
    </View>
  );
};
