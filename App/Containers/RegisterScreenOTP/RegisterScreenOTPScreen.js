import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RegisterScreenOTPActions from 'App/Stores/RegisterScreenOTP/Actions'
import Style from './RegisterScreenOTPScreenStyle'
import { Container, Header, Title, Form, Item, Label, Input, Picker, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'
import { mobileNoValidator,otpValidator,newPasswordValidator,confirmPasswordValidator } from '../../Core/utils';

/**
 * This screen displays the RegisterScreenOTP page of the mobile app.
 */
class RegisterScreenOTPScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      otp : '',
      otpError : '',
      newPassword : '',
      newPasswordError : '',
      confirmPassword : '',
      confirmPasswordError : ''
    };
    this.handleOTPChange = this.handleOTPChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }

  componentDidMount() {
    this._loadInitialPageData()
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

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onRegisterPressed = () => {
    const otpError = otpValidator(this.state.otp);
    const newPasswordError = newPasswordValidator(this.state.newPassword);
    const confirmPasswordError = confirmPasswordValidator(this.state.confirmPassword);
    if (otpError || newPasswordError || confirmPasswordError) {
      this.setState({
        otpError : otpError , 
        newPasswordError : newPasswordError , 
        confirmPasswordError : confirmPasswordError 
      });
      return;
    }
    this.props.navigation.navigate('RegisterScreenResultScreen');
  };

  render() {
    return (
      <Container>
      <Header>
        <Left>
        </Left>
        <Body>
          <Title>New User Registration</Title>
        </Body>
      </Header>
      <Content>
        <Form>
            <Item stackedLabel>
              <Label>Enter OTP *</Label>
              <Input
              value={this.state.otp}
              onChangeText={this.handleOTPChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.otpError)?this.state.otpError:""}</Text>

            <Item stackedLabel>
              <Label>New Password *</Label>
              <Input
              value={this.state.newPassword}
              onChangeText={this.handleNewPasswordChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.newPasswordError)?this.state.newPasswordError:""}</Text>

            <Item stackedLabel>
              <Label>Confirm Password *</Label>
              <Input
              value={this.state.confirmPassword}
              onChangeText={this.handleConfirmPasswordChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.confirmPasswordError)?this.state.confirmPasswordError:""}</Text>

            <Button medium full onPress={this._onRegisterPressed}><Text> Register </Text></Button>
        </Form>
      </Content>
    </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

RegisterScreenOTPScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RegisterScreenOTPActions.loadRegisterScreenOTPInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreenOTPScreen)
