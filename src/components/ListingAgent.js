import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appImages } from '../assets';
import { colors } from '../utils/color';

const ListingAgent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listing Agent</Text>
      <View style={styles.agentContainer}>
        <Image
          source={appImages.reviewProfile} // Replace with agent's image
          style={styles.profileImage}
          resizeMode='contain'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Sandeep S.</Text>
          <Text style={styles.role}>Partner</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="mail" size={26} color="#006EFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="call" size={26} color="#006EFF"  />
          </TouchableOpacity>
        </View>
      </View>
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
  agentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  role: {
    fontSize: 13,
    color: colors.text,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    
    padding: 8,
    borderRadius: 10,
  },
});

export default ListingAgent;
