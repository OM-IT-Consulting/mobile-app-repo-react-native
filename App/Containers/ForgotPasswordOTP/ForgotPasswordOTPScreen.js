import React from 'react'
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ForgotPasswordOTPActions from 'App/Stores/ForgotPasswordOTP/Actions'
import Style from './ForgotPasswordOTPScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import { mobileNoValidator } from '../../Core/utils';

/**
 * This screen displays the ForgotPasswordOTP page of the mobile app.
 */
class ForgotPasswordOTPScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileNo : '', 
      mobileNoError : ''
    };
    this.handleMobileNoChange = this.handleMobileNoChange.bind(this);
  }

  handleMobileNoChange(text) {
    this.setState({
      mobileNo: text
    });
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onSendOTPPressed = () => {
    const mobileNoError = mobileNoValidator(this.state.mobileNo);
    if (mobileNoError) {
      this.setState({
        mobileNoError : mobileNoError
      });
      return;
    }
    this.props.navigation.navigate('ForgotPasswordScreen');
  };

  render() {
    return (
      <Background>
  
      <Header>Forgot Password</Header>

        <Text style={Style.label}>Please Enter mobile no to send OTP</Text>
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
        
        <Button mode="contained" onPress={this._onSendOTPPressed}>
          Send OTP
        </Button>

      </Background>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

ForgotPasswordOTPScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(ForgotPasswordOTPActions.loadForgotPasswordOTPInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordOTPScreen)
