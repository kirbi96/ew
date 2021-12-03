import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../components/Header';
import {mainContainer} from '../../../styles/MainStyles';

export const VisualizationTestScreen = () => {
  return (
    <View style={mainContainer}>
      <Header title={'VisualizationTestScreen'} />
    </View>
  );
};
