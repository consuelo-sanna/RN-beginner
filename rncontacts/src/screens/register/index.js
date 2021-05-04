import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import RegisterComponent from '../../components/signup';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {LOGIN} from '../../constants/routeNames';

// import envs from '../../config/env';
// import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
  const {navigate} = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  // console.log('authState >> ', authState);

  // useEffect(() => {
  //   axiosInstance.post('/contacts').catch(err => console.log('err ', err));
  // }, []);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data, navigate]);

  useFocusEffect(
    useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [authDispatch, data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add last name'};
      });
    }
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a user name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add an email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('oki');
      register(form)(authDispatch);
    }
  };

  console.log('error1 ', error);

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
