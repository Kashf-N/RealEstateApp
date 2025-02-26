import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/color';

const PriceBooking = () => {
  return (
    <View style={styles.container}>
      {/* Total Price Section */}
      <View>
        <Text style={styles.label}>Total Price</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>$350</Text>
          <Text style={styles.perMonth}>/month</Text>
        </View>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookButton} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: verticalScale(15),
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation:10
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  perMonth: {
    fontSize: 14,
    color: '#888',
    marginLeft: 4,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PriceBooking;
