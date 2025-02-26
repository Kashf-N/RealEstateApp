import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {appImages} from '../assets';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

const PropertyImageScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={appImages.appartmentView} style={styles.image}>
      <View style={styles.topButtons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.9}>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.9}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.4,
    justifyContent: 'space-between',
  },
  topButtons: {
    marginTop: verticalScale(20),
    marginHorizontal: verticalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 50,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default PropertyImageScreen;
