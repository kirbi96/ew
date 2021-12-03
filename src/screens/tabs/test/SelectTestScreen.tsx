import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from '../../../components/ui/Text';
import {mainContainer} from '../../../styles/MainStyles';
import {Header} from '../../../components/Header';
import Navigation from '../../../base/Navigation';
import {screens} from '../../../navigation/screens';
import {Colors} from '../../../styles/Colors';

export const SelectTestScreen = () => {
  const handleNavigateToScreen = (screen: string) => {
    Navigation.navigate(screen);
  };

  return (
    <View style={mainContainer}>
      <Header title={'Тест категории'} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleNavigateToScreen(screens.VISUALIZATION_TEST)}>
          <Text align={'center'} color={Colors.leaf} Ag={AgEnum.H2}>
            Визуализация
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleNavigateToScreen(screens.COLLATION_TEST)}>
          <Text align={'center'} color={Colors.leaf} Ag={AgEnum.H2}>
            Сопоставление
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleNavigateToScreen(screens.WRITING_TEST)}>
          <Text align={'center'} color={Colors.leaf} Ag={AgEnum.H2}>
            Письменность
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  item: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.leaf,
    paddingVertical: 16,
    marginTop: 32,
  },
});
