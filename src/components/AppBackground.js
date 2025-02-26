import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import globalStyles from '../screens/globalStyles';
import {colors} from '../utils/color';

const {width, height} = Dimensions.get('window');

const AppBackground = ({children, subContStyle}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <ScrollView>
        <View style={[styles.subCont, subContStyle]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBackground;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.mainContainer,
  },

  subCont: {
    // padding: width * 0.05,
  },
});
