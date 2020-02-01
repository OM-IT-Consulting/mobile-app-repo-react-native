import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ContactUsActions from 'App/Stores/ContactUs/Actions'
import Style from './ContactUsScreenStyle'
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the ContactUs page of the mobile app.
 */
class ContactUsScreen extends React.Component {

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
          <Title>Support Page</Title>
        </Body>
      </Header>
      <Content>
        <Text>
          
        </Text>
        <Text>
          
        </Text>
        <Text>
          For any support please email to support@redcross.com
        </Text>
      </Content>
      <FooterBar navigation={this.props.navigation}/>
    </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

ContactUsScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(ContactUsActions.loadContactUsInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsScreen)
