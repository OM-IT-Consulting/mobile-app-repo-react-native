import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RecipientDonorListActions from 'App/Stores/RecipientDonorList/Actions'
import Style from './RecipientDonorListScreenStyle'
import { Container, Header, Title, Form, Item, Label, Input, Picker, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the RecipientDonorList page of the mobile app.
 */
class RecipientDonorListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onSearchPressed = () => {
    this.props.navigation.navigate('RecipientDonorListResultScreen');
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
          <Title>Search Donor</Title>
        </Body>
      </Header>
      <Content>
        <Form>
            <Item stackedLabel>
              <Label>Name *</Label>
              <Input
              />
            </Item>
            <Button medium full onPress={this._onSearchPressed}><Text> Search Donor </Text></Button>
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

RecipientDonorListScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RecipientDonorListActions.loadRecipientDonorListInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientDonorListScreen)
