import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {verticalScale} from 'react-native-size-matters';

const propertyDetails = [
  {id: '1', icon: 'resize-outline', value: '1,225', label: 'sqft'},
  {id: '2', icon: 'bed-outline', value: '3.0', label: 'Bedrooms'},
  {id: '3', icon: 'water-outline', value: '1.0', label: 'Bathrooms'},
  {
    id: '4',
    icon: 'shield-checkmark-outline',
    value: '4,457',
    label: 'Safety Rank',
  },
];

const PropertyCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Ionicons name={item.icon} size={24} color="#2D7AF0" />
      <Text style={styles.value}>{item.value}</Text>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

const PropertyDetails = () => {
  return (
    <FlatList
      data={propertyDetails}
      numColumns={4}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PropertyCard item={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    margin: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue,
    marginTop: 5,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
});

export default PropertyDetails;
