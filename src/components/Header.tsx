import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSvgArrowLeft} from '../assets/icons/IconSvgArrowLeft';
import {AgEnum, Text} from './ui/Text';
import {Colors} from '../styles/Colors';
import Navigation from '../base/Navigation';

interface IHeader {
  title?: string;
}

export const Header = ({title}: IHeader) => {
  const handlePressBack = () => {
    Navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressBack} style={styles.btn}>
        <IconSvgArrowLeft color={Colors.leaf} size={16} />
      </TouchableOpacity>
      {title && (
        <Text style={styles.title} Ag={AgEnum.Body}>
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.shadow,
  },
  title: {
    marginLeft: 15,
  },
});
