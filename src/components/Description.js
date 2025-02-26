import React from 'react';
import PropertyDetails from './PropertyDetails';
import ListingAgent from './ListingAgent';
import {ScrollView, View} from 'react-native';
import FacilityGrid from './FacilityGrid';
import AddressSection from './AddressSection';

const Description = () => {
  return (
    <View>
      <ScrollView>
        <PropertyDetails />
        <ListingAgent />
        <FacilityGrid />
      <AddressSection/>
      </ScrollView>
    </View>
  );
};

export default Description;
