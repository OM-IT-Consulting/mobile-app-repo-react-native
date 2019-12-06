import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'


export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 60,
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'left',
    marginBottom: 10,
  },
  selectBox: {
    ...Fonts.style.normal,
    textAlign: 'left',
    marginBottom: 5,
    height: 60, 
    width: 300 ,
    color: 'blue'
  },
  text: {
    ...Fonts.style.h2,
    textAlign: 'center'
  },
  instructions: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  result: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  error: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    color: 'red',
  },
  logoContainer: {
    width: '100%',
    height: 300,
    marginBottom: 25,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: Colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
})
