import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import DonorListDetailsActions from 'App/Stores/DonorListDetails/Actions'
import Style from './DonorListDetailsScreenStyle'
import { Container, Header, Content, List, Icon, Root, Item, Label, Toast, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the DonorListDetails page of the mobile app.
 */
class DonorListDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onAcceptPressed = () => {
    Toast.show({
      text: 'Thanks for Accepting!!! You will receive a call from Red Cross shortly',
      buttonText: 'Okay',
      duration:60000
    })
  };

  _onDenyPressed = () => {
    Toast.show({
      text: 'Bloor Donor Request Denied Successfully.',
      buttonText: 'Okay',
      duration:60000
    })
  };

  _onDonorRequestsListPressed = () => {
    this.props.navigation.navigate('DonorListScreen');
  };

  render() {
    return (
      <Root>
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
          <Title>Blood Receipient Details</Title>
        </Body>
      </Header>
      <Content>
      <Form>
      <Item>
      <Label>
        Blood Receipient Name : Naren
      </Label>
      </Item>
      <Item>
      <Label>
           Mobile : 123456789
      </Label>
      </Item>
      <Item>
      <Label>
           Place : Siruseri
      </Label>
      </Item>
      <Item>
      <Label>
           Area : Chennai
      </Label>
      </Item>
      <Item>
      <Label>
      </Label>
      </Item>
      <Item>

        <Button medium onPress={this._onAcceptPressed}><Text>Accept</Text></Button>
        <Label>
      </Label>
      <Button medium onPress={this._onDenyPressed}><Text>Deny</Text></Button>

      </Item>
      <Item>
      <Label>
      </Label>
      <Label>
      </Label>
      <Label>
      </Label>
      </Item>
      <Button medium full onPress={this._onDonorRequestsListPressed}><Text>View Donation Requests List Again</Text></Button>
      </Form>
      </Content>
      <FooterBar navigation={this.props.navigation}/>
    </Container>
    </Root>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

DonorListDetailsScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(DonorListDetailsActions.loadDonorListDetailsInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonorListDetailsScreen)
