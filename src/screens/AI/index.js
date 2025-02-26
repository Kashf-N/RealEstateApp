import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import globalStyles from '../globalStyles';
import CustomText from '../../components/CustomText';

function AI() {
  return (
    <View style={styles.container}>
      <CustomText title="AI" style={styles.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.mainContainer,
    ...globalStyles.alignCenter,
    ...globalStyles.justifyCenter,
  },
});

export default AI;
