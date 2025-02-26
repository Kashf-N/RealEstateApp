import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {propertiesNear} from '../dummyData/dummyData';
import {colors} from '../utils/color';
import globalStyles from '../screens/globalStyles';
import {useNavigation} from '@react-navigation/native';

const NearYouSection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={propertiesNear}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Details', {details: item});
            }}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.info}>
              <View style={styles.flexRow}>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color={colors.gold} />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
                <View style={styles.appartmentCont}>
                  <Text style={styles.type}>Apartment</Text>
                </View>
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{...globalStyles.directionRow}}>
                <FontAwesome6
                  name="location-dot"
                  size={16}
                  color={colors.darkGray}
                />
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <View style={[styles.flexRow, {...globalStyles.alignCenter}]}>
                <View style={{...globalStyles.directionRow}}>
                  <View style={{...globalStyles.directionRow}}>
                    <FontAwesome
                      name="money"
                      size={16}
                      color={colors.darkGray}
                    />
                    <Text style={styles.detail}>{item.beds}</Text>
                  </View>
                  <View style={{...globalStyles.directionRow}}>
                    <Ionicons
                      name="bed-outline"
                      size={16}
                      color={colors.darkGray}
                    />
                    <Text style={styles.detail}>{item.baths}</Text>
                  </View>
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray,
  },

  appartmentCont: {
    backgroundColor: colors.lightGray,
    padding: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  type: {
    fontSize: 12,
    color: colors.blue,
    fontWeight: '800',
  },
  title: {
    ...globalStyles.font17,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 4,
    color: colors.black,
  },
  location: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '700',
    color: 'gray',
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  detail: {
    marginLeft: 5,
    fontSize: 12,
    marginRight: 10,
    color: colors.black,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 5,
  },

  flexRow: {
    ...globalStyles.directionRow,
    ...globalStyles.justifySpaceBetween,
  },
});

export default NearYouSection;
