import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {REGISTER} from '../../constants/routeNames';
import Container from '../../components/commons/container/index';
import CustomButton from '../../components/commons/CustomButton/index';
import Input from '../../components/commons/Input/index';
import styles from './styles';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  const [value1, onChangeText1] = useState('');
  const [value2, onChangeText2] = useState('');
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RN-Contacts</Text>
        <Text style={styles.subtitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Enter Username"

            // error={'This field id required'}
          />
          <Input
            label="Password"
            onChangeText={text => onChangeText2(text)}
            value={value2}
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter Password"
          />
          <CustomButton title="Submit" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new Account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;

//TODO: use proptypes
