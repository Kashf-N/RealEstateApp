import React from 'react';
import {StyleSheet, Text} from 'react-native';
import globalStyles from '../screens/globalStyles';
import { colors } from '../utils/color';

const CustomText = props => {
  const {title, textStyle, onPress} = props;

  return (
    <Text style={[styles.title, textStyle]} onPress={onPress}>
      {title}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    ...globalStyles.font17,
  },
});
