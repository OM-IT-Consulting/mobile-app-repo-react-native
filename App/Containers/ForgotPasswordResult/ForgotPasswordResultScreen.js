import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ForgotPasswordResultActions from 'App/Stores/ForgotPasswordResult/Actions'
import { Container, Header, Title, Content, Button, Left, Form, Item, Right, Label, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the ForgotPasswordResult page of the mobile app.
 */
class ForgotPasswordResultScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onLoginPressed = () => {
    this.props.navigation.navigate('MainScreen');
  };

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: 'red'}}>
        <Body>
          <Title>Forgot Password</Title>
        </Body>
      </Header>
      <Content>
      <Form>
      <Item>
        <Label style={{fontWeight: 'bold'}}>
          Password updated successfully.
        </Label>
        </Item>

        <Label>
        </Label>

        <Button style={{backgroundColor: 'red'}} large full onPress={this._onLoginPressed}><Text>Continue to Login</Text></Button>
      </Form>
      </Content>
    </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

ForgotPasswordResultScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(ForgotPasswordResultActions.loadForgotPasswordResultInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordResultScreen)
