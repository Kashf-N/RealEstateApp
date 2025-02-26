import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Location from './src/screens/Location';
import Bookmark from './src/screens/Bookmark';
import Contracts from './src/screens/Contracts';
import AI from './src/screens/AI';
import Profile from './src/screens/Profile';
import Details from './src/screens/Details';
import {useRoleStore} from './src/store/roleStore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const {role, loadRole} = useRoleStore();

  useEffect(() => {
    loadRole();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Location':
              iconName = 'location-outline';
              break;
            case 'Bookmark':
              iconName = 'bookmark-outline';
              break;
            case 'Contracts':
              iconName = 'document-text-outline';
              break;
            case 'AI':
              iconName = 'bulb-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return (
            <View style={{alignItems: 'center'}}>
              <Ionicons name={iconName} size={size} color={color} />
              {focused && (
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#007AFF',
                    borderRadius: 3,
                    marginTop: 4,
                  }}
                />
              )}
            </View>
          );
        },

        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },

        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#B0B0B0',
      })}>
      {role === 'A' ? (
        <>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Location" component={Location} />
          <Tab.Screen name="Bookmark" component={Bookmark} />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Contracts" component={Contracts} />
          <Tab.Screen name="AI" component={AI} />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      )}
    </Tab.Navigator>
  );
};

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
