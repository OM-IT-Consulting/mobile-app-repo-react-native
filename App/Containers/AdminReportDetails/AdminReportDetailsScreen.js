import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AdminReportDetailsActions from 'App/Stores/AdminReportDetails/Actions'
import Style from './AdminReportDetailsScreenStyle'
import { Container, Header, Content, List, Icon, Title, Form, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the AdminReportDetails page of the mobile app.
 */
class AdminReportDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onSharePressed = () => {
    this.props.navigation.navigate('AdminDonorShareScreen');
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
          <Title numberOfLines={2}>Donor List for Megha(Heart Surgery)</Title>
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
                  <Button transparent onPress={this._onSharePressed} >
                    <Text>Share</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Body>
                  <Text>Sivaram</Text>
                  <Text note numberOfLines={2}>Blood Group B+, Anna Nagar , Chennai. Mobile No 988456789.</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onSharePressed}>
                    <Text>Share</Text>
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

AdminReportDetailsScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(AdminReportDetailsActions.loadAdminReportDetailsInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminReportDetailsScreen)
