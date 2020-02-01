import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AdminListSendResponseActions from 'App/Stores/AdminListSendResponse/Actions'
import Style from './AdminListSendResponseScreenStyle'
import { Container, Header, Root, Toast, Label, Content, CheckBox, List, Icon, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the AdminListSendResponse page of the mobile app.
 */
class AdminListSendResponseScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onSendResponsePressed = () => {
    console.log('_onSendResponsePressed');
    Toast.show({
      text: 'Thanks !!! response message sent successfully.',
      buttonText: 'Okay',
      duration:60000
    })
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
              <Title numberOfLines={2}>Donor List for Megha(Heart Surgery)</Title>
            </Body>
          </Header>
          <Content>
            <Form>
                <List>
                  <ListItem>
                    <CheckBox/>
                    <Body>
                        <Text note numberOfLines={3}><Label style={{fontWeight: 'bold'}}>Megha</Label>.Blood Group O+, Siruseri , Chennai. Mobile No 973456789.</Text>
                    </Body>
                  </ListItem>
                  <ListItem>
                    <CheckBox/>
                    <Body>
                        <Text note numberOfLines={3}><Label style={{fontWeight: 'bold'}}>Sivaram</Label>.Blood Group B+, Anna Nagar , Chennai. Mobile No 988456789.</Text>
                    </Body>
                  </ListItem>
                </List>
                <Button medium full onPress={this._onSendResponsePressed}><Text> Send Response to Donors</Text></Button>
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

AdminListSendResponseScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(AdminListSendResponseActions.loadAdminListSendResponseInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminListSendResponseScreen)
