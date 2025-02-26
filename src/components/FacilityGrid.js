import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/color';
import {verticalScale} from 'react-native-size-matters';
import {facilities} from '../dummyData/dummyData';

const FacilityGrid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facilities</Text>
      <FlatList
        data={facilities}
        keyExtractor={item => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Ionicons name={item.icon} size={24} color="#2D7AF0" />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '23%',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  text: {
    fontSize: 11,
    color: colors.text,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default FacilityGrid;
