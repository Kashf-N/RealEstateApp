import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {galleryData} from '../dummyData/dummyData';
import {verticalScale} from 'react-native-size-matters';
import { colors } from '../utils/color';

const Gallery = () => {
  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Gallery Title */}
      <Text style={styles.title}>
        Gallery <Text style={styles.count}>(400)</Text>
      </Text>

      {/* Image Grid */}
      <FlatList
        data={galleryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // 2 columns
        columnWrapperStyle={styles.row} // Space between columns
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  count: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    paddingBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '92%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Gallery;
