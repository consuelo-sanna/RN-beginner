import React, {useState} from 'react';
import {Text} from 'react-native';
import Container from '../../components/commons/container/index';
import Input from '../../components/commons/Input/index';
import CustomButton from '../../components/commons/CustomButton/index';

const Login = () => {
  const [value1, onChangeText1] = useState('');
  const [value2, onChangeText2] = useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText1(text)}
        value={value1}

        // error={'This field id required'}
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText2(text)}
        value={value2}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton title="Submit" secondary loading={true} disabled={true} />
      <CustomButton title="Click Me" secondary />
      <CustomButton title="Submit" primary loading={true} />

      <CustomButton title="Submit" danger />
    </Container>
  );
};

export default Login;

//TODO: use proptypes
