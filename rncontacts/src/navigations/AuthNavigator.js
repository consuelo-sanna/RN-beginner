import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {LOGIN, REGISTER} from '../constants/routeNames';

const Login = () => {
  return (
    <View>
      <Text>Hi From Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Hi From SignUp</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
