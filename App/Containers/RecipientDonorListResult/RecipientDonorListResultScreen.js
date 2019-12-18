import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RecipientDonorListResultActions from 'App/Stores/RecipientDonorListResult/Actions'
import Style from './RecipientDonorListResultScreenStyle'
import { Container, Header, Content, List, Icon, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the RecipientDonorListResult page of the mobile app.
 */
class RecipientDonorListResultScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onAgainSearchPressed = () => {
    this.props.navigation.navigate('RecipientDonorListScreen');
  };

  _onRequestPressed = () => {
    this.props.navigation.navigate('RecipientDonorListDetailsScreen');
  };

  componentDidMount() {
    this._loadInitialPageData()
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
          <Title>Donor List</Title>
        </Body>
      </Header>
      <Content>
        <Form>
            <List>
              <ListItem thumbnail>
                <Body>
                  <Text>Megha</Text>
                  <Text note numberOfLines={2}>Blood Group O+, Siruseri , Chennai. Mobile No 973456789.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onRequestPressed} >
                    <Text>Request</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Body>
                  <Text>Naren</Text>
                  <Text note numberOfLines={2}>Blood Group B+, Anna Nagar , Chennai. Mobile No 988456789.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onRequestPressed}>
                    <Text>Request</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
            <Button medium full onPress={this._onAgainSearchPressed}><Text> Search Donor Again</Text></Button>
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

RecipientDonorListResultScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RecipientDonorListResultActions.loadRecipientDonorListResultInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientDonorListResultScreen)
