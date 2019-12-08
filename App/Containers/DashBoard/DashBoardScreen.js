import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DashBoardActions from 'App/Stores/DashBoard/Actions'
import Style from './DashBoardScreenStyle'
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'
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
          <Container>
          <Header>
            <Left>
              <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Welcome to Red Cross</Title>
            </Body>
          </Header>
          <Content>
            <Text>
              This is Content Section
            </Text>
          </Content>
          <FooterBar/>
        </Container>
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
