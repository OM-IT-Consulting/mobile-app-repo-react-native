import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AdminListActions from 'App/Stores/AdminList/Actions'
import Style from './AdminListScreenStyle'
import { Container, Header, Content, List, Icon, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the AdminList page of the mobile app.
 */
class AdminListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onViewPressed = () => {
    this.props.navigation.navigate('AdminListSendResponseScreen');
  };

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
          <Title>Blood Requirements</Title>
        </Body>
      </Header>
      <Content>
        <Form>
            <List>
              <ListItem thumbnail>
                <Body>
                  <Text>Megha</Text>
                  <Text note numberOfLines={4}>Date Requested:19/12/2019, Blood Group: O+ , Apollo MultiSpeciality Hospital, Teynampet for Heart Surgery. Mobile No 973456789.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onViewPressed} >
                    <Text>Send Response</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Body>
                  <Text>Naren</Text>
                  <Text note numberOfLines={4}>Date Requested:18/12/2019, Blood Group: O+ , Apollo Cancer Hospital, Teynampet for Brain Surgery. Mobile No 97347779.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onViewPressed}>
                    <Text>Send Response</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
        </Form>
      </Content>
      <FooterBar navigation={this.props.navigation}/>
    </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

AdminListScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(AdminListActions.loadAdminListInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminListScreen)
