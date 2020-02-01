import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SupportActions from 'App/Stores/Support/Actions'
import Style from './DonorNotificationScreenStyle'
import { Container, Header, Content, List, Icon, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the DonorNotification page of the mobile app.
 */
class DonorNotificationScreen extends React.Component {

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
          <Title>Notifications</Title>
        </Body>
      </Header>
      <Content>
        <Form>
            <List>
              <ListItem thumbnail>
                <Body>
                  <Text>Blood Donation to Megha</Text>
                  <Text note numberOfLines={2}>Thank you for donating blood to Megha in Apollo Hospital.</Text>
                </Body>
              </ListItem>
              <ListItem thumbnail>
                <Body>
                  <Text>Blood Donation to Prem</Text>
                  <Text note numberOfLines={2}>Thanks for the interest shown. We will contact you if we have any future requirements.</Text>
                </Body>
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

DonorNotificationScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(SupportActions.loadSupportInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonorNotificationScreen)
