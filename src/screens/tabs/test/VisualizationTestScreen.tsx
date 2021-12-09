import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header} from '../../../components/Header';
import {flexRowWrap, mainContainer} from '../../../styles/MainStyles';
import {DimensionHelper} from '../../../helpers/DimensionHelper';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Colors} from '../../../styles/Colors';
import {TestEndModal} from '../../../components/TestEndModal';
import Navigation from '../../../base/Navigation';

const data = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/originals/c7/25/bc/c725bc53140c199f3e2bab53ba28f83e.jpg',
    answers: [
      {
        id: 1,
        word: 'Dad',
        correct: true,
      },
      {
        id: 2,
        word: 'Brother',
        correct: false,
      },
      {
        id: 3,
        word: 'Sister',
        correct: false,
      },
      {
        id: 4,
        word: 'Mother',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    image:
      'https://i.pinimg.com/originals/90/c9/09/90c909ccd9c2eb443f4f763000cfcc0b.jpg',
    answers: [
      {
        id: 1,
        word: 'Dad',
        correct: false,
      },
      {
        id: 2,
        word: 'Brother',
        correct: false,
      },
      {
        id: 3,
        word: 'Sister',
        correct: false,
      },
      {
        id: 4,
        word: 'Mother',
        correct: true,
      },
    ],
  },
  {
    id: 3,
    image:
      'https://starwars-galaxy.ru/800/600/https/avatars.mds.yandex.net/get-pdb/2835179/1593b69c-4569-4f71-a856-4d5933dc7f94/s1200?webp=false',

    answers: [
      {
        id: 1,
        word: 'Dad',
        correct: false,
      },
      {
        id: 2,
        word: 'Brother',
        correct: true,
      },
      {
        id: 3,
        word: 'Sister',
        correct: false,
      },
      {
        id: 4,
        word: 'Mother',
        correct: false,
      },
    ],
  },
];

export const VisualizationTestScreen = () => {
  const [activeWord, setActiveWord] = useState(0);
  const [hasError, setHasError] = useState(false);

  const [endTest, setEndTest] = useState(false);
  const [errorsCount, setErrorsCount] = useState(0);

  const pressAnswer = (item: any) => {
    if (item.correct) {
      if (activeWord === data.length - 1) {
        setEndTest(true);
        return;
      }

      setActiveWord(prev => prev + 1);
      setHasError(false);
    } else {
      setHasError(true);
      setErrorsCount(prev => prev + 1);
    }
  };

  const endedTest = () => {
    setEndTest(false);
    Navigation.pop();
  };

  return (
    <View style={mainContainer}>
      <Header title={'Тест категории'} />

      <Text align={'right'} color={Colors.leaf} Ag={AgEnum.H2}>
        {activeWord + 1} / {data.length.toString()}
      </Text>

      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data[activeWord].image}} />
        </View>

        <View style={[styles.answersContainer, flexRowWrap]}>
          {data[activeWord].answers.map(item => (
            <TouchableOpacity
              onPress={() => pressAnswer(item)}
              style={styles.answer}
              key={item.id}>
              <Text align={'center'} Ag={AgEnum.Body}>
                {item.word}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {hasError && (
          <Text
            color={Colors.danger}
            style={styles.errorText}
            align={'center'}
            Ag={AgEnum.H2}>
            Ошибка
          </Text>
        )}
      </View>

      {endTest && (
        <TestEndModal
          errorsCount={errorsCount}
          endTest={endTest}
          endedTest={endedTest}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: DimensionHelper.width * 0.5,
    height: DimensionHelper.width * 0.5,
  },
  answersContainer: {
    marginTop: 32,
  },
  answer: {
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.warm_grey,
    marginTop: 24,
    width: '45%',
  },
  errorText: {
    marginTop: 32,
  },
});
