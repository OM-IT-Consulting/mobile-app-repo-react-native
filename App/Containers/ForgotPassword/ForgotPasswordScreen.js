import React from 'react'
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ForgotPasswordActions from 'App/Stores/ForgotPassword/Actions'
import Style from './ForgotPasswordScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import TextInput from '../../Components/TextInput';
import { mobileNoValidator,otpValidator,newPasswordValidator,confirmPasswordValidator } from '../../Core/utils';

/**
 * This screen displays the forgot password page of the mobile app.
 */
class ForgotPasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileNo : '', 
      mobileNoError : '',
      otp : '',
      otpError : '',
      newPassword : '',
      newPasswordError : '',
      confirmPassword : '',
      confirmPasswordError : ''
    };
    this.handleMobileNoChange = this.handleMobileNoChange.bind(this);
    this.handleOTPChange = this.handleOTPChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  handleMobileNoChange(text) {
    this.setState({
      mobileNo: text
    });
  }

  handleOTPChange(text) {
    this.setState({
      otp: text
    });
  }

  handleNewPasswordChange(text) {
    this.setState({
      newPassword: text
    });
  }

  handleConfirmPasswordChange(text) {
    this.setState({
      confirmPassword: text
    });
  }

  _onResetPressed = () => {
    const mobileNoError = mobileNoValidator(this.state.mobileNo);
    const otpError = otpValidator(this.state.otp);
    const newPasswordError = newPasswordValidator(this.state.newPassword);
    const confirmPasswordError = confirmPasswordValidator(this.state.confirmPassword);
    if (mobileNoError || otpError || newPasswordError || confirmPasswordError) {
      this.setState({
        mobileNoError : mobileNoError , 
        otpError : otpError , 
        newPasswordError : newPasswordError , 
        confirmPasswordError : confirmPasswordError 
      });
      return;
    }
    this.props.navigation.navigate('MainScreen');
  };

  render() {
    return (
        <Background>
  
        <Header>Forgot Password</Header>

       <Text style={Style.label}>Enter Mobile No</Text>
       <TextInput
        returnKeyType="next"
        value={this.state.mobileNo}
        onChangeText={this.handleMobileNoChange}
        error={!!this.state.mobileNoError}
        errorText={this.state.mobileNoError}
        autoCapitalize="none"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />
  
      <Text style={Style.label}>Enter OTP</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.otp}
        onChangeText={this.handleOTPChange}
        error={!!this.state.otpError}
        errorText={this.state.otpError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="oneTimeCode"
        keyboardType="numeric"
      />

      <Text style={Style.label}>New Password</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.newPassword}
        onChangeText={this.handleNewPasswordChange}
        error={!!this.state.newPasswordError}
        errorText={this.state.newPasswordError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="newPassword"
        keyboardType="default"
      />

      <Text style={Style.label}>Confirm Password</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.confirmPassword}
        onChangeText={this.handleConfirmPasswordChange}
        error={!!this.state.confirmPasswordError}
        errorText={this.state.confirmPasswordError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="password"
        keyboardType="default"
      />

      <Button mode="contained" onPress={this._onResetPressed}>
        Reset
      </Button>

      </Background>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

ForgotPasswordScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(ForgotPasswordActions.loadForgotPasswordInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen)
