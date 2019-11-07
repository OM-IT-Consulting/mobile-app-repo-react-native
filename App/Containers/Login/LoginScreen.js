import React from 'react'
import { Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LoginActions from 'App/Stores/Login/Actions'
import Style from './LoginScreenStyle'
import { Images } from 'App/Theme'

/**
 * This screen displays the login page of the mobile app.
 */
class LoginScreen extends React.Component {

  componentDidMount() {
    this._loadInitialPageData()
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.initialDataIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>{this.props.initialData.payload}</Text>
            {this.props.initialDataErrorMessage ? (
              <Text style={Style.error}>{this.props.initialDataErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  EmailId
                </Text>
              </View>
            )}
            <Button onPress={() => this._loadInitialPageData()} title="Login" />
          </View>
        )}
      </View>
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
