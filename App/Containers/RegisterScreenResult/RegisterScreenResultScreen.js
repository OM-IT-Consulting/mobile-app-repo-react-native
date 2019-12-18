import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RegisterScreenResultActions from 'App/Stores/RegisterScreenResult/Actions'
import Style from './RegisterScreenResultScreenStyle'
import { Container, Header, Title, Content, Button, Left, Form, Item, Right, Label, Body, Icon, Text, Badge } from 'native-base';

/**
 * This screen displays the RegisterScreenResult page of the mobile app.
 */
class RegisterScreenResultScreen extends React.Component {

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
      <Header>
        <Body>
          <Title>New User Registration</Title>
        </Body>
      </Header>
      <Content>
      <Form>
      <Item>
        <Label style={{fontWeight: 'bold'}}>
          User Registration successful.
        </Label>
        </Item>

        <Label>
        </Label>

        <Button large full onPress={this._onLoginPressed}><Text>Continue to Login</Text></Button>
      </Form>
      </Content>
    </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

RegisterScreenResultScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RegisterScreenResultActions.loadRegisterScreenResultInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreenResultScreen)
