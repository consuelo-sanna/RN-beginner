import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  value,
  onChangeText,
  style,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (isFocused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
