import React from 'react';
import PropTypes from 'prop-types';

import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {LOGIN} from '../../constants/routeNames';
import Container from '../commons/container/index';
import CustomButton from '../commons/CustomButton/index';
import Input from '../commons/Input/index';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
  console.log('error ', error);
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        {error?.error && <Text>{error.error}</Text>}
        <Text style={styles.title}>Welcome to RN-Contacts</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Firstname"
            value={form.firstName}
            placeholder="Enter Firstname"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Lastname"
            value={form.lastName}
            placeholder="Enter Lastname"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Username"
            value={form.userName}
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="Email"
            value={form.email}
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            value={form.password}
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            title="Submit"
            primary
          />
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

RegisterComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default RegisterComponent;
