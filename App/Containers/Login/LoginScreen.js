import React from 'react'
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LoginActions from 'App/Stores/Login/Actions'
import Style from './LoginScreenStyle'
import { Images } from 'App/Theme'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import TextInput from '../../Components/TextInput';
import BackButton from '../../Components/BackButton';
import { emailValidator, passwordValidator } from '../../Core/utils';

/**
 * This screen displays the login page of the mobile app.
 */
class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email : '', 
      emailError : '',
      password : '',
      passwordError : ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  handleEmailChange(text) {
    this.setState({
      email: text
    });
  }

  handlePasswordChange(text) {
    this.setState({
      password: text
    });
  }

  _onLoginPressed = () => {
    const emailError = emailValidator(this.state.email);
    const passwordError = passwordValidator(this.state.password);
    if (emailError || passwordError) {
      this.setState({
        emailError : emailError , 
        passwordError : passwordError 
      });
      //return;
    }
    this.props.navigation.navigate('DashBoardScreen');
  };

  render() {
    return (
    <Background>
      <BackButton goBack={() => this.props.navigation.navigate('SampleScreen')} />

      <Logo />

      <Header>Welcome to Red Cross.</Header>

      <Text style={Style.label}>Email Id</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.email}
        onChangeText={this.handleEmailChange}
        error={!!this.state.emailError}
        errorText={this.state.emailError}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Text style={Style.label}>Password</Text>
      <TextInput
        returnKeyType="done"
        onChangeText={this.handlePasswordChange}
        error={!!this.state.passwordError}
        errorText={this.state.passwordError}
        secureTextEntry
      />

      <View style={Style.forgotPassword}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={Style.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={this._onLoginPressed}>
        Login
      </Button>

      <View style={Style.row}>
        <Text style={Style.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
          <Text style={Style.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

LoginScreen.propTypes = {
  initialData: PropTypes.object,
  initialDataIsLoading: PropTypes.bool,
  initialDataErrorMessage: PropTypes.string,
  loadInitialPageData: PropTypes.func
}

const mapStateToProps = (state) => ({
  initialData: state.login.initialData,
  initialDataIsLoading: state.login.initialDataIsLoading,
  initialDataErrorMessage: state.login.initialDataErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
   loadInitialPageData: () => dispatch(LoginActions.loadInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
