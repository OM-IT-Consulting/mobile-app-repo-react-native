import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RegisterActions from 'App/Stores/Register/Actions'
import Style from './RegisterScreenStyle'
import { nameValidator,genderValidator,dobValidator,emailValidator,bloodGroupValidator,frequentDonorValidator,countryValidator,stateValidator,districtValidator,talukValidator,placeValidator,areaValidator,addressValidator,pinCodeValidator } from '../../Core/utils';
import { Container, Header, Content, Form, Item, Input, Left, Body, Right, Title,Icon, Label,Text,Button,Picker } from 'native-base';

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
    const nameError = nameValidator(this.state.name);
    const emailIdError = emailValidator(this.state.emailId);
    const genderError = genderValidator(this.state.gender);
    const dobError = dobValidator(this.state.dob);
    const bloodGroupError = bloodGroupValidator(this.state.bloodGroup);
    const frequentDonorError = frequentDonorValidator(this.state.frequentDonor);
    const countryError = countryValidator(this.state.countryError);
    const stateError = stateValidator(this.state.stateError);
    const districtError = districtValidator(this.state.districtError);
    const talukError = talukValidator(this.state.talukError);
    const placeError = placeValidator(this.state.placeError);
    const areaError = areaValidator(this.state.areaError);
    const addressError = addressValidator(this.state.addressError);
    const pinCodeError = pinCodeValidator(this.state.pinCodeError);

    if (emailIdError || nameError || genderError || dobError || bloodGroupError || frequentDonorError || countryError || stateError || districtError || talukError || placeError || areaError || addressError || pinCodeError) {
      this.setState({
        nameError : nameError,
        emailIdError : emailIdError,
        genderError : genderError,
        dobError : dobError,
        bloodGroupError : bloodGroupError,
        frequentDonorError : frequentDonorError,
        countryError : countryError,
        stateError : stateError,
        districtError : districtError,
        talukError : talukError,
        placeError : placeError,
        areaError : areaError,
        addressError : addressError,
        pinCodeError : pinCodeError
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
          <Left/>
          <Body>
            <Title >New User Registration</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name *</Label>
              <Input
              value={this.state.name}
              onChangeText={this.handleNameChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.nameError)?this.state.nameError:""}</Text>

            <Item stackedLabel picker>
              <Label>Gender *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.gender}
                style={Style.selectBox}
                onValueChange={this.handleGenderChange}
                >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.genderError)?this.state.genderError:""}</Text>

            <Item stackedLabel>
              <Label>Date Of Birth *</Label>
              <Input
                value={this.state.dob}
                onChangeText={this.handleDOBChange}
                placeholder="dd/MM/yyyy"
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.dobError)?this.state.dobError:""}</Text>

            <Item stackedLabel>
              <Label>Email ID</Label>
              <Input
                value={this.state.emailId}
                onChangeText={this.handleEmailIdChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.emailIdError)?this.state.emailIdError:""}</Text>


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

            <Item stackedLabel>
              <Label>Frequent Donor *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.frequentDonor}
                style={Style.selectBox}
                onValueChange={this.handleFrequentDonorChange}
                >
                <Picker.Item label="yes" value="Yes" />
                <Picker.Item label="no" value="No" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.frequentDonorError)?this.state.frequentDonorError:""}</Text>

            <Item stackedLabel>
              <Label>Country *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.country}
                style={Style.selectBox}
                onValueChange={this.handleCountryChange}
                >
                <Picker.Item value="in" label="India" />
                <Picker.Item value="sg" label="Singapore" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.countryError)?this.state.countryError:""}</Text>

            <Item stackedLabel>
              <Label>State *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.state}
                style={Style.selectBox}
                onValueChange={this.handleStateChange}
                >
                <Picker.Item value="tn" label="Tamil Nadu" />
                <Picker.Item value="kl" label="Kerala" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.stateError)?this.state.stateError:""}</Text>

            <Item stackedLabel>
              <Label>District *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.district}
                style={Style.selectBox}
                onValueChange={this.handleDistrictChange}
                >
                <Picker.Item value="cp" label="ChengalPattu" />
                <Picker.Item value="th" label="Thiruvallur" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.districtError)?this.state.districtError:""}</Text>

            <Item stackedLabel>
              <Label>Taluk *</Label>
              <Picker
                mode="dropdown"
                selectedValue={this.state.taluk}
                style={Style.selectBox}
                onValueChange={this.handleTalukChange}
                >
                <Picker.Item value="t1" label="Taluk1" />
                <Picker.Item value="t2" label="Taluk2" />
              </Picker>
            </Item>
            <Text style={{ color: "red" }}>{(this.state.talukError)?this.state.talukError:""}</Text>

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
              <Label>Address *</Label>
              <Input
              value={this.state.address}
              onChangeText={this.handleAddressChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.addressError)?this.state.addressError:""}</Text>

            <Item stackedLabel>
              <Label>Pin code *</Label>
              <Input
              value={this.state.pinCode}
              onChangeText={this.handlePinCodeChange}
              />
            </Item>
            <Text style={{ color: "red" }}>{(this.state.pinCodeError)?this.state.pinCodeError:""}</Text>
            <Button large full onPress={this._onRegisterPressed}><Text> Register </Text></Button>
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
