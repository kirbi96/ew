import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../components/ui/Button';
import Modal from 'react-native-modal';
import {IconSvgClose} from '../../../../assets/icons/IconSvgClose';
import {Colors} from '../../../../styles/Colors';
import Navigation from '../../../../base/Navigation';
import {screens} from '../../../../navigation/screens';

interface ILearnModal {
  visible: boolean;
  closeModal: () => void;
}

enum EModalAction {
  LEARN = 'LEARN',
  TEST = 'TEST',
}

export const LearnModal = ({visible, closeModal}: ILearnModal) => {
  const handlePressBtn = (action: EModalAction) => {
    closeModal();
    Navigation.navigate(
      action === EModalAction.LEARN ? screens.LEARN : screens.SELECT_TEST,
    );
  };

  return (
    <Modal isVisible={visible} style={styles.modalView}>
      <View style={styles.containerStyle}>
        <View style={styles.content}>
          <TouchableOpacity onPress={closeModal} style={styles.close}>
            <IconSvgClose color={Colors.black} />
          </TouchableOpacity>
          <Button
            onPress={() => handlePressBtn(EModalAction.LEARN)}
            title={'Изучить'}
          />
          <Button
            onPress={() => handlePressBtn(EModalAction.TEST)}
            style={{marginTop: 16}}
            title={'Тест'}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
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
  close: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
