import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CategoryCard} from './components/CategoryCard';
import {AgEnum, Text} from '../../../components/ui/Text';
import {LearnModal} from './components/learnModal';
import {mainContainer} from '../../../styles/MainStyles';

const exImg = 'https://dargrad.ru/images/xvz4_p0dd_150403.jpg';

export const HomeScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <ScrollView style={mainContainer}>
      <Text Ag={AgEnum.H1}>Категории</Text>
      <View style={styles.categoryContainer}>
        {[...Array(12)].map((_, index) => (
          <CategoryCard
            key={index}
            id={index.toString()}
            title={'Родственники'}
            image={exImg}
            onPress={() => setVisibleModal(true)}
          />
        ))}
      </View>
      <LearnModal
        visible={visibleModal}
        closeModal={() => setVisibleModal(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
