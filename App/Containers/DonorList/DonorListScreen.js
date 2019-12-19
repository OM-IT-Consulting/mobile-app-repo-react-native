import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DonorListActions from 'App/Stores/DonorList/Actions'
import Style from './DonorListScreenStyle'
import { Container, Header, Title, Form, List, ListItem, Item, Label, Input, Picker, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the DonorList page of the mobile app.
 */
class DonorListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onViewPressed = () => {
    this.props.navigation.navigate('DonorListDetailsScreen');
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
          <Title>Donation Requests</Title>
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
                  <Button transparent onPress={this._onViewPressed}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Body>
                  <Text>Sivaram</Text>
                  <Text note numberOfLines={2}>Blood Group B+, Anna Nagar , Chennai. Mobile No 988456789.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onViewPressed}>
                    <Text>View</Text>
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

DonorListScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(DonorListActions.loadDonorListInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonorListScreen)
