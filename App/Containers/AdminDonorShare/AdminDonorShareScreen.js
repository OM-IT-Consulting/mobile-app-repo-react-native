import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AdminDonorShareActions from 'App/Stores/AdminDonorShare/Actions'
import Style from './AdminDonorShareScreenStyle'
import { Container, Header, Content, List, Icon, Root, Item, Label, Toast, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the AdminDonorShare page of the mobile app.
 */
class AdminDonorShareScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onSharePressed = () => {
    Toast.show({
      text: 'Donor details successfully shared with the recipient',
      buttonText: 'Okay',
      duration:60000
    })
  };

  _onDenyPressed = () => {
    Toast.show({
      text: 'Thanks !!! response message sent successfully.',
      buttonText: 'Okay',
      duration:60000
    })
  };

  _onDonorRequestsListPressed = () => {
    this.props.navigation.navigate('AdminReportScreen');
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
          <Title>Blood Donor Details</Title>
        </Body>
      </Header>
      <Content>
      <Form>
      <Item>
      <Label>
        Blood Receipient Name : Sivaram
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

        <Button medium onPress={this._onSharePressed}><Text>Share</Text></Button>
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
      <Button medium full onPress={this._onDonorRequestsListPressed}><Text>View Donors List Again</Text></Button>
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

AdminDonorShareScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(AdminDonorShareActions.loadAdminDonorShareInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDonorShareScreen)
