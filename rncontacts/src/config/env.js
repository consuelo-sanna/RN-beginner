// import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';
/** TODO: this env import it is not working. Fix it, this is a workaround */

const devEnvironmentVariables = {
  BACKEND_URL: 'https://truly-contacts.herokuapp.com/api',
};

const prodEnvironmentVariables = {
  BACKEND_URL: 'https://prod.truly-contacts.herokuapp.com/api',
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
