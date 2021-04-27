import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  createSection: {
    flexDirection: 'row',
  },
  form: {
    paddingTop: 20,
  },
  infoText: {fontSize: 17},
  logoImage: {
    height: 144,
    width: 144,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  loginLink: {paddingLeft: 17, color: colors.primary},
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '700',
  },
});
