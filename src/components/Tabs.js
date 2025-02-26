import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors} from '../utils/color';
import Gallery from './Gallery';
import Review from './Review';
import Description from './Description';

const renderScene = SceneMap({
  description: Description,
  gallery: Gallery,
  review: Review,
});

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'description', title: 'Description'},
    {key: 'gallery', title: 'Gallery'},
    {key: 'review', title: 'Review'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: '#007AFF', height: 3}}
          activeColor={'#007AFF'}
          inactiveColor={colors.black}
          style={{backgroundColor: 'white', elevation: 0}}
          renderLabel={({route, focused}) => (
            <Text
              style={{
                color: focused ? 'blue' : 'black',
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs;
