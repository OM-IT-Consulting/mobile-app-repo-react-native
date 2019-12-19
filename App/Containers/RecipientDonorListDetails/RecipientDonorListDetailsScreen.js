import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RecipientDonorListDetailsActions from 'App/Stores/RecipientDonorListDetails/Actions'
import Style from './RecipientDonorListDetailsScreenStyle'
import { Container, Header, Title, Content, List, Button, Left, Form, Item, Right, Label, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'

/**
 * This screen displays the RecipientDonorListDetails page of the mobile app.
 */
class RecipientDonorListDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._loadInitialPageData()
  }

  _onAgainSearchPressed = () => {
    this.props.navigation.navigate('RecipientDonorListScreen');
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
          <Title>Donor Request</Title>
        </Body>
      </Header>
      <Content>
      <Form>
      <Item>
      <Label>
           Donor Name : Sivaram
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
      <Label style={{fontWeight: 'bold'}}>
          Your request has been submitted successfully.
        </Label>
      </Item>

       <Button medium full onPress={this._onAgainSearchPressed}><Text> Search Donor Again</Text></Button>
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

RecipientDonorListDetailsScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RecipientDonorListDetailsActions.loadRecipientDonorListDetailsInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipientDonorListDetailsScreen)
