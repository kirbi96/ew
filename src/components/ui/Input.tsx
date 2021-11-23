import React, {ReactNode, useRef, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import {AgEnum, Text} from './Text';
// import {IconSvgEye} from '../../assets/icons/IconSvgEye';

interface IInput {
  label: string;
  placeholder?: string;
  value?: string | undefined;
  renderRightAccessory?: any;
  editable?: boolean;
  style?: any;

  onChangeText?(value: string, inputKey: string): void;

  handlePressOnIcon?: () => void;
  icon?: ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: any;
  inputKey: string;
  error: string | undefined;
  disabled?: boolean;
  multiline?: boolean;
  maxLength?: number;
  marginTop?: number;
  iconPadding?: number;
  shadow?: boolean;
}

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  editable = true,
  secureTextEntry,
  keyboardType,
  error,
  inputKey,
  handlePressOnIcon,
  icon,
  multiline = false,
  iconPadding,
  marginTop,
  shadow,
  ...props
}: IInput) => {
  const input: any = useRef(null);
  const [showSecure, setShowSecure] = useState(true);

  const handleChange = (text: string) => {
    if (!onChangeText) {
      return;
    }

    // if (inputKey === 'phone' || inputKey === 'newPhone') {
    //   onChangeText(DataHelper.getPhone(text), inputKey);
    //   return;
    // }
    onChangeText(text, inputKey);
  };

  return (
    <View style={{marginTop: marginTop || 32}}>
      {
        <View style={styles.labelContainer}>
          <Text Ag={AgEnum.Description} color={Colors.black_30}>
            {label}
          </Text>
        </View>
      }
      <View
        style={
          multiline
            ? [styles.inputContainer, {height: 137}]
            : [styles.inputContainer, shadow && styles.shadowInput]
        }
        pointerEvents={!editable ? 'none' : 'auto'}>
        <TextInput
          ref={input}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType ?? 'default'}
          value={value}
          multiline={multiline}
          secureTextEntry={secureTextEntry ? showSecure : false}
          style={styles.inputStyle}
          onChangeText={handleChange}
          {...props}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setShowSecure(!showSecure)}>
            {/*<IconSvgEye color={Colors.black_54} />*/}
          </TouchableOpacity>
        ) : null}
        {icon ? (
          <TouchableOpacity
            style={{marginLeft: iconPadding || 0}}
            onPress={handlePressOnIcon}>
            {icon}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? (
        <Text Ag={AgEnum.Small} style={{color: Colors.danger, marginTop: 6}}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.light_grey,
    borderBottomWidth: 1,
  },
  shadowInput: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors.shadow,
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 2,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.black,
  },
  labelContainer: {
    // zIndex: 1,
    // position: 'absolute',
    // left: 0,
    // top: -13,
  },
  labelLine: {
    left: 0,
    right: 0,
    position: 'absolute',
    top: 8,
    height: 1,
    backgroundColor: Colors.white,
  },
});

export default Input;
