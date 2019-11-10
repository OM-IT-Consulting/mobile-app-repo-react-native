import React from 'react'
import { Text, View, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DashBoardActions from 'App/Stores/DashBoard/Actions'
import Style from './DashBoardScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';

/**
 * This screen displays the DashBoard page of the mobile app.
 */
class DashBoardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadDashBoardInitialPageData()
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
  
  _loadDashBoardInitialPageData() {
    this.props.loadDashBoardInitialPageData()
  }
}

DashBoardScreen.propTypes = {
  initialData: PropTypes.object,
  initialDataIsLoading: PropTypes.bool,
  initialDataErrorMessage: PropTypes.string,
  loadDashBoardInitialPageData: PropTypes.func
}

const mapStateToProps = (state) => ({
  initialData: state.login.initialData,
  initialDataIsLoading: state.login.initialDataIsLoading,
  initialDataErrorMessage: state.login.initialDataErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  loadDashBoardInitialPageData: () => dispatch(DashBoardActions.loadDashBoardInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardScreen)
