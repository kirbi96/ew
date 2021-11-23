import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch} from 'react-native-switch';
import {Colors} from '../../styles/Colors';
import {AgEnum, Text} from './Text';

interface ISwitch {
  text?: string;
  titleText?: string;
  value: boolean;
  valueChange: (val: boolean) => void;
}

export const CustomSwitch = ({
  text,
  titleText,
  value,
  valueChange,
}: ISwitch) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {titleText && <Text Ag={AgEnum.Description}>{titleText || ''}</Text>}
        <Text Ag={AgEnum.Subtitle}>{text || ''}</Text>
      </View>

      <View style={{marginRight: 4}}>
        <Switch
          activeText={''}
          inActiveText={''}
          circleSize={20}
          circleActiveColor={Colors.leaf}
          circleInActiveColor={Colors.warm_grey}
          circleBorderWidth={0}
          switchLeftPx={4}
          switchRightPx={4}
          barHeight={16}
          value={value}
          onValueChange={valueChange}
          backgroundActive={Colors.light_grey}
          backgroundInactive={Colors.light_grey}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    maxWidth: '85%',
  },
});
