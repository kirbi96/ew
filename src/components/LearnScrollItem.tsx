import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {AgEnum, Text} from './ui/Text';
import {Colors} from '../styles/Colors';
import {Button} from './ui/Button';
import Navigation from '../base/Navigation';
import {screens} from '../navigation/screens';

interface ILearnScrollItem {
  ruWord: string;
  enWord: string;
  image: string;
  index: number;
  length: number;
  translateX: Animated.SharedValue<number>;
}

const {height, width} = Dimensions.get('window');

const SIZE = width * 0.65;

export const LearnScrollItem = (props: ILearnScrollItem) => {
  const {ruWord, enWord, image, index, length, translateX} = props;

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [-height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  return (
    <View style={[styles.pageContainer]}>
      <Text style={styles.progressText} color={Colors.leaf} Ag={AgEnum.H2}>
        {index + 1} / {length.toString()}
      </Text>
      <View style={styles.pageContainerItem}>
        <Animated.Image
          source={{uri: image}}
          resizeMode={'contain'}
          style={[styles.square, rStyle]}
        />
        <Animated.View style={[rTextStyle, {marginTop: 16}]}>
          <Text align={'center'} color={Colors.leaf} Ag={AgEnum.H1}>
            {ruWord}
          </Text>
          <Text align={'center'} color={Colors.leaf} Ag={AgEnum.H1}>
            {enWord}
          </Text>
        </Animated.View>
      </View>

      <View style={styles.btnContainer}>
        {index + 1 === length && (
          <Button
            onPress={() => Navigation.navigate(screens.HOME)}
            title={'Завершить урок'}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  progressText: {
    position: 'absolute',
    top: 20,
    right: 40,
  },
  pageContainerItem: {
    marginTop: -height / 4,
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: Colors.leaf,
  },
  text: {
    fontSize: 26,
    color: '#fff',
  },
  btnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: height / 4,
  },
});
