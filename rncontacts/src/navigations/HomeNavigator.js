/** component that defines a set of instruction on how this component works
 * React-Native does not have a history stack like the web, that is why we need react-navigator
 * React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history.
 */

// the screen name should be unique.

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/contacts/index';
import ContactDetail from '../screens/contactDetail/index';
import CreateContact from '../screens/createContact/index';
import Settings from '../screens/settings/index';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
