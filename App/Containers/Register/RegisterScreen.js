import React from 'react'
import { View,Picker, ScrollView, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RegisterActions from 'App/Stores/Register/Actions'
import Style from './RegisterScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import TextInput from '../../Components/TextInput';
import { nameValidator,genderValidator,dobValidator,emailValidator,bloodGroupValidator,frequentDonorValidator,countryValidator,stateValidator,districtValidator,talukValidator,placeValidator,areaValidator,addressValidator,pinCodeValidator } from '../../Core/utils';
import { Container, Header, Content, Form, Item, Input, Left, Body, Right, Title,Icon, Label,Text,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

/**
 * This screen displays the Register page of the mobile app.
 */
class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '', 
      nameError : '',
      gender : '',
      genderError : '',
      dob : '',
      dobError : '',
      emailId : '',
      emailIdError : '',
      bloodGroup : '',
      bloodGroupError : '',
      frequentDonor : '',
      frequentDonorError : '',
      country : '',
      countryError : '',
      state : '',
      stateError : '',
      district : '',
      districtError : '',
      taluk : '',
      talukError : '',
      place : '',
      placeError : '',
      area : '',
      areaError : '',
      address : '',
      addressError : '',
      pinCode : '',
      pinCodeError : ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleEmailIdChange = this.handleEmailIdChange.bind(this);
    this.handleBloodGroupChange = this.handleBloodGroupChange.bind(this);
    this.handleFrequentDonorChange = this.handleFrequentDonorChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleDistrictChange = this.handleDistrictChange.bind(this);
    this.handleTalukChange = this.handleTalukChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePinCodeChange = this.handlePinCodeChange.bind(this);
  }

  handleNameChange(text) {
    this.setState({
      name: text
    });
  }
  
  handleGenderChange(itemValue, itemIndex) {
    this.setState({
      gender: itemValue
    });
  }
  
  handleDOBChange(text) {
    this.setState({
      dob: text
    });
  }
  
  handleEmailIdChange(text) {
    this.setState({
      emailId: text
    });
  }
  
  handleBloodGroupChange(itemValue, itemIndex) {
    this.setState({
      bloodGroup: itemValue
    });
  }

  handleFrequentDonorChange(itemValue, itemIndex) {
    this.setState({
      frequentDonor: itemValue
    });
  }
  
  handleCountryChange(itemValue, itemIndex) {
    this.setState({
      country: itemValue
    });
  }
  
  handleStateChange(itemValue, itemIndex) {
    this.setState({
      state: itemValue
    });
  }
  
  handleDistrictChange(itemValue, itemIndex) {
    this.setState({
      district: itemValue
    });
  }
  
  handleTalukChange(itemValue, itemIndex) {
    this.setState({
      taluk: itemValue
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
  
  handleAddressChange(text) {
    this.setState({
      address: text
    });
  }
  
  handlePinCodeChange(text) {
    this.setState({
      pinCode: text
    });
  }
  
  _onRegisterPressed = () => {
    console.log('this.state.emailId',this.state.emailId);
    const emailIdError = emailValidator(this.state.emailId);
    if (emailIdError) {
      this.setState({
        emailIdError : emailIdError 
      });
      return;
    }
    this.props.navigation.navigate('MainScreen');
  };

  componentDidMount() {
    this._loadInitialPageData()
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>New User Registration</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input/>
            </Item>
            <Text>Username is mandatory</Text>
            <Item stackedLabel>
              <Label>Email ID</Label>
              <Input
                value={this.state.emailId}
                onChangeText={this.handleEmailIdChange}
              />
            </Item>
            <Text>{(this.state.emailIdError)?"Email Id is mandatory":""}</Text>
            <Button primary onPress={this._onRegisterPressed}><Text> Register </Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }
  
  _loadInitialPageData() {
    this.props.loadInitialPageData()
  }
}

RegisterScreen.propTypes = {
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
   loadInitialPageData: () => dispatch(RegisterActions.loadRegisterInitialPageData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
