import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../components/ui/Button';
import Modal from 'react-native-modal';
import {IconSvgClose} from '../../../../assets/icons/IconSvgClose';
import { Colors } from "../../../../styles/Colors";

interface ILearnModal {
  visible: boolean;
  closeModal: () => void;
}

export const LearnModal = ({visible, closeModal}: ILearnModal) => {
  return (
    <Modal isVisible={visible} style={styles.modalView}>
      <View style={styles.containerStyle}>
        <View style={styles.content}>
          <TouchableOpacity onPress={closeModal} style={styles.close}>
            <IconSvgClose color={Colors.black} />
          </TouchableOpacity>
          <Button title={'Изучить'} />
          <Button style={{marginTop: 16}} title={'Тест'} />
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
