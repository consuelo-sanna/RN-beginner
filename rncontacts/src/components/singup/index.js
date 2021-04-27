import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {LOGIN} from '../../constants/routeNames';
import Container from '../../components/commons/container/index';
import CustomButton from '../../components/commons/CustomButton/index';
import Input from '../../components/commons/Input/index';
import styles from './styles';

const RegisterComponent = () => {
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
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Firstname"
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Enter Firstname"
          />
          <Input
            label="Lastname"
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Enter Lastname"
          />
          <Input
            label="Username"
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Enter Username"
          />
          <Input
            label="Email"
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Enter Email"
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
            <Text style={styles.infoText}>Aldready have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;

//TODO: use proptypes
