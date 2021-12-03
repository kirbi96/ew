import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header} from '../../../components/Header';
import {flexRowBetween, mainContainer} from '../../../styles/MainStyles';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Colors} from '../../../styles/Colors';
import {TestHelper} from '../../../helpers/TestHelper';
import Modal from 'react-native-modal';
import {Button} from '../../../components/ui/Button';
import Navigation from '../../../base/Navigation';

const data = [
  {
    id: 1,
    ruWord: 'Папа',
    enWord: 'dad',
  },
  {
    id: 2,
    ruWord: 'Мама',
    enWord: 'mom',
  },
  {
    id: 3,
    ruWord: 'брат',
    enWord: 'brother',
  },
  {
    id: 4,
    ruWord: 'сестра',
    enWord: 'sister',
  },
];

interface IItem {
  id: number;
  ruWord: string;
  enWord: string;
  hasAnswer: boolean;
}

export const CollationTestScreen = () => {
  const [selectItem, setSelectItem] = useState<IItem | null>(null);
  const [endTest, setEndTest] = useState(false);
  const [errorsCount, setErrorsCount] = useState(0);
  const [elementsArr, setElementsArr] = useState<[IItem[], IItem[]] | null>(
    null,
  );

  const handlePressItem = (item: IItem) => {
    setSelectItem(item);
  };

  const getHashArray = () => {
    setElementsArr([
      TestHelper.getRandomArrWithHasAnswer(data),
      TestHelper.getRandomArrWithHasAnswer(data),
    ]);
  };

  const testIsEnded = () => {
    if (elementsArr && elementsArr[0].length > 0) {
      const isEnd = elementsArr[0].filter(el => !el.hasAnswer).length === 1;

      if (isEnd) {
        setEndTest(true);
      }
    }
  };

  const isEqual = (item: IItem) => {
    if (item.id === selectItem?.id && elementsArr) {
      setElementsArr([
        TestHelper.setElementHasAnswer(elementsArr[0], item.id),
        TestHelper.setElementHasAnswer(elementsArr[1], item.id),
      ]);
      setSelectItem(null);

      testIsEnded();
    } else {
      setErrorsCount(prev => prev + 1);
      setSelectItem(null);
    }
  };

  const endedTest = () => {
    setEndTest(false);
    Navigation.pop();
  };

  useEffect(() => {
    getHashArray();
  }, []);

  return (
    <View style={mainContainer}>
      <Header title={'Тест категории'} />

      <Text align={'center'} style={styles.mt16} Ag={AgEnum.H2}>
        Сопоставьте слова
      </Text>
      <View style={[flexRowBetween, styles.mt16]}>
        <View style={styles.part}>
          {elementsArr &&
            elementsArr[0].map(item => (
              <TouchableOpacity
                style={[
                  styles.inactiveItem,
                  item.id === selectItem?.id && styles.activeItem,
                  item.hasAnswer && styles.answeredItem,
                ]}
                disabled={item.hasAnswer}
                onPress={() => handlePressItem(item)}
                key={item.id}>
                <Text
                  color={
                    item.id === selectItem?.id || item.hasAnswer
                      ? Colors.white
                      : Colors.black
                  }
                  align={'center'}
                  Ag={AgEnum.Body}>
                  {item.enWord}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.part}>
          {elementsArr &&
            elementsArr[1].map(item => (
              <TouchableOpacity
                onPress={() => isEqual(item)}
                disabled={item.hasAnswer || !selectItem}
                style={[
                  styles.inactiveItem,
                  item.hasAnswer && styles.answeredItem,
                ]}
                key={item.id}>
                <Text
                  align={'center'}
                  Ag={AgEnum.Body}
                  color={item.hasAnswer ? Colors.white : Colors.black}>
                  {item.ruWord}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>

      {errorsCount > 0 && (
        <Text
          style={styles.errorCount}
          align={'right'}
          color={Colors.danger}
          Ag={AgEnum.Description}>
          Количество ошибок {errorsCount}
        </Text>
      )}
      {endTest && (
        <Modal isVisible={endTest} style={styles.modalView}>
          <View style={styles.containerStyle}>
            <View style={styles.content}>
              <Text
                color={TestHelper.getModalEndTitleColor(errorsCount)}
                align={'center'}
                Ag={AgEnum.H2}>
                {TestHelper.getModalEndTitle(errorsCount)}!{'\n'}
                {'\n'}ошибок допущено {errorsCount}
              </Text>
              <Button
                onPress={endedTest}
                style={{marginTop: 32}}
                title={'Завершить'}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  part: {
    width: '40%',
  },
  inactiveItem: {
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.warm_grey,
    marginTop: 24,
  },
  activeItem: {
    backgroundColor: Colors.blue_grey,
    borderColor: Colors.blue_grey,
  },
  answeredItem: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  errorCount: {
    marginTop: 32,
  },
  modalView: {
    position: 'absolute',
    top: '30%',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  content: {
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 26,
    paddingBottom: 32,
    paddingTop: 42,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
