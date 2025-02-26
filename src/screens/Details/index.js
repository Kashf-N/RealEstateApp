import * as React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import PropertyImageScreen from '../../components/PropertyImageScreen';
import {colors} from '../../utils/color';
import PriceBooking from '../../components/PriceBooking';
import TabComponent from '../../components/Tabs';
import Tabs from '../../components/Tabs';

function Details({route}) {
  const {details} = route?.params;

  return (
    <View style={styles.cont}>
      <PropertyImageScreen />
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color={colors.gold} />
            <Text style={styles.ratingText}>{details?.rating}</Text>
            <Text style={styles.reviewText}>(6.8K reviews)</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Apartment</Text>
          </View>
        </View>

        <Text style={styles.title}>{details?.title}</Text>

        <Text style={styles.address}>{details?.location}</Text>
      </View>
      <Tabs />

      <PriceBooking />
    </View>
  );
}

export default Details;
