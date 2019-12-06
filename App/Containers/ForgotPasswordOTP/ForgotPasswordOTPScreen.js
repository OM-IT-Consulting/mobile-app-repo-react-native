import React from 'react'
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ForgotPasswordOTPActions from 'App/Stores/ForgotPasswordOTP/Actions'
import Style from './ForgotPasswordOTPScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';

/**
 * This screen displays the ForgotPasswordOTP page of the mobile app.
 */
class ForgotPasswordOTPScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  render() {
    return (
        <Background>
  
        <Logo />
  
        <Header>Welcome to Red Cross.</Header>
        <Text style={Style.label}>{this.props.initialData.payload}</Text>
  
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
