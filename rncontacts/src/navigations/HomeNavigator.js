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

const Contacts = () => {
  return (
    <View>
      <Text>Hi From contacts</Text>
    </View>
  );
};

const ContactDetail = () => {
  return (
    <View>
      <Text>Hi From ContactDetail</Text>
    </View>
  );
};

const CreateContact = () => {
  return (
    <View>
      <Text>Hi From CreateContact</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Hi From Settings</Text>
    </View>
  );
};

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
