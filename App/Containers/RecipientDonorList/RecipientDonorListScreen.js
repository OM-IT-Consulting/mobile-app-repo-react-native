import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RecipientDonorListActions from 'App/Stores/RecipientDonorList/Actions'
import Style from './RecipientDonorListScreenStyle'
import { Container, Header, Title, Form, Item, Label, Input, Picker, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import FooterBar from '../../Components/FooterBar'
import { bloodGroupValidator,placeValidator,areaValidator } from '../../Core/utils';

/**
 * This screen displays the RecipientDonorList page of the mobile app.
 */
class RecipientDonorListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bloodGroup : '',
      bloodGroupError : '',
      place : '',
      placeError : '',
      area : '',
      areaError : ''
    };
    this.handleBloodGroupChange = this.handleBloodGroupChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  handleBloodGroupChange(itemValue, itemIndex) {
    this.setState({
      bloodGroup: itemValue
    });
  }

  handlePlaceChange(itemValue, itemIndex) {
    this.setState({
      place: itemValue
    });
  }

  handleAreaChange(itemValue, itemIndex) {
    this.setState({
      area: itemValue
    });
  }

  _onSearchPressed = () => {
    const bloodGroupError = bloodGroupValidator(this.state.bloodGroup);
    const placeError = placeValidator(this.state.placeError);
    const areaError = areaValidator(this.state.areaError);

    if ( bloodGroupError || placeError || areaError) {
      this.setState({
        bloodGroupError : bloodGroupError,
        placeError : placeError,
        areaError : areaError
      });
      return;
    }
    this.props.navigation.navigate('RecipientDonorListResultScreen');
  };

  componentDidMount() {
    this._loadInitialPageData()
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: 'red'}}>
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
              <Label>Area *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.area}
                style={Style.selectBox}
                onValueChange={this.handleAreaChange}
                >
                <Picker.Item value="area1" label="Area1" />
                <Picker.Item value="area2" label="Area2" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.areaError)?this.state.areaError:""}</Text>

            <Item stackedLabel>
              <Label>Place *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.place}
                style={Style.selectBox}
                onValueChange={this.handlePlaceChange}
                >
                <Picker.Item value="place1" label="Place1" />
                <Picker.Item value="place2" label="Place2" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.placeError)?this.state.placeError:""}</Text>

            <Item stackedLabel>
              <Label>Blood Group *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.bloodGroup}
                style={Style.selectBox}
                onValueChange={this.handleBloodGroupChange}
                >
                <Picker.Item label="O-Positive" value="O-Positive" />
                <Picker.Item label="O-Negative" value="O-Negative" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.bloodGroupError)?this.state.bloodGroupError:""}</Text>

            <Button style={{backgroundColor: 'red'}} medium full onPress={this._onSearchPressed}><Text> Search Donor </Text></Button>
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
