import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RecipientDonorListResultActions from 'App/Stores/RecipientDonorListResult/Actions'
import Style from './RecipientDonorListResultScreenStyle'
import { Container, Header, Title, Form, Item, Label, Input, Picker, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
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
            <Item stackedLabel>
              <Label>Name *</Label>
              <Input
              />
            </Item>
            <Button medium full onPress={this._onAgainSearchPressed}><Text> Search Donor </Text></Button>
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
