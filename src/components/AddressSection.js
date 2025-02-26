import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {appIcons, appImages} from '../assets';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/color';

const AddressSection = () => {
  const handleMapPress = () => {
    console.log('Navigating to map...');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Address</Text>
        <TouchableOpacity onPress={handleMapPress} activeOpacity={0.9}>
          <Text style={styles.mapLink}>View on Map</Text>
        </TouchableOpacity>
      </View>

      {/* Address Text */}
      <View style={styles.addressRow}>
        <Ionicons name="location-outline" size={18} color={colors.black} />
        <Text style={styles.addressText}>Lorem Ipsum is simply dummy text</Text>
      </View>

      <View style={styles.mapContainer}>
        {/* Background Map Image */}
        <Image
          source={appImages.map}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Location Icon Overlay */}
        <Image source={appIcons.mapIcon} style={styles.locationIcon} resizeMode='contain' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderStyle: 'solid',
    borderBottomWidth: 1.4,
    borderBottomColor: colors.lightGray,
    paddingBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  mapLink: {
    fontSize: 14,
    color: '#2D7AF0',
    fontWeight: 'bold',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 14,
    marginLeft: 5,
    color: colors.black,
    marginVertical: 10,
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: 200, // Adjust height as needed
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom:15
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  locationIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 30, // Adjust icon size as needed
    height: 30,
    transform: [{translateX: -15}, {translateY: -15}], // Center the icon
  },
});

export default AddressSection;
