import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AgEnum, Text} from './ui/Text';
import {TestHelper} from '../helpers/TestHelper';
import {Button} from './ui/Button';
import Modal from 'react-native-modal';

interface ITestEndModal {
  endTest: boolean;
  errorsCount: number;
  endedTest: () => void;
}

export const TestEndModal = ({
  endTest,
  errorsCount,
  endedTest,
}: ITestEndModal) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
