import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Properties} from '../dummyData/dummyData';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/color';
import globalStyles from '../screens/globalStyles';

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Properties}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.flexRow}>
                <View style={{...globalStyles.directionRow}}>
                  <Ionicons
                    name="location-outline"
                    size={16}
                    color={colors.gray}
                  />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <View style={styles.bookmarkCont}>
                  <Ionicons
                    name="bookmark-sharp"
                    size={16}
                    color={colors.blue}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(20),
    marginLeft: verticalScale(15),
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
    width: 180,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 15,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  price: {
    color: '#007AFF',
    paddingTop: 5,
  },
  location: {
    ...globalStyles.font12,
    color: 'gray',
  },

  flexRow: {
    ...globalStyles.directionRow,
    ...globalStyles.justifySpaceBetween,
    ...globalStyles.alignCenter,
  },

  bookmarkCont: {
    padding: verticalScale(6),
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
  },
});

export default TrendingSection;
