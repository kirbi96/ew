import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from '../../../../components/ui/Text';
import {DimensionHelper} from '../../../../helpers/DimensionHelper';

interface ICategoryCard {
  id: string;
  title: string;
  image: string;
  onPress: () => void;
}

export const CategoryCard = ({title, image, onPress}: ICategoryCard) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.containerItem}>
        <Image style={styles.img} source={{uri: image}} />
        <Text style={{marginTop: 8}} align={'center'} Ag={AgEnum.Subtitle}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33%',
    marginTop: 16,
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    borderRadius: 16,
    width: DimensionHelper.width * 0.2,
    height: DimensionHelper.width * 0.2,
  },
});
