import React from 'react'
import { Text, View,Picker, ActivityIndicator, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import RegisterActions from 'App/Stores/Register/Actions'
import Style from './RegisterScreenStyle'
import Background from '../../Components/Background';
import Logo from '../../Components/Logo';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import TextInput from '../../Components/TextInput';
import { nameValidator,genderValidator,dobValidator,emailValidator,bloodGroupValidator,frequentDonorValidator,countryValidator,stateValidator,districtValidator,talukValidator,placeValidator,areaValidator,addressValidator,pinCodeValidator } from '../../Core/utils';

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
    this.props.navigation.navigate('LoginScreen');
  };

  componentDidMount() {
    this._loadInitialPageData()
  }

  render() {
    return (
      <Background>
  
        <Header>Registration Screen</Header>

        <Text style={Style.label}>Name *</Text>
        <TextInput
        returnKeyType="next"
        value={this.state.name}
        onChangeText={this.handleNameChange}
        error={!!this.state.nameError}
        errorText={this.state.nameError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="name"
        keyboardType="default"
       />

      <Text style={Style.label}>Gender *</Text>
      <Picker
        selectedValue={this.state.gender}
        style={Style.selectBox}
        onValueChange={this.handleGenderChange}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Text style={Style.label}>Date Of Birth *</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.dob}
        onChangeText={this.handleDOBChange}
        error={!!this.state.dobError}
        errorText={this.state.dobError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="none"
        keyboardType="default"
      />

      <Text style={Style.label}>Email ID</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.emailId}
        onChangeText={this.handleEmailIdChange}
        error={!!this.state.emailIdError}
        errorText={this.state.emailIdError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="none"
        keyboardType="default"
      />

      <Text style={Style.label}>Blood Group *</Text>
      <Picker
        selectedValue={this.state.bloodGroup}
        style={Style.selectBox}
        onValueChange={this.handleBloodGroupChange}>
        <Picker.Item label="O-Positive" value="O-Positive" />
        <Picker.Item label="O-Negative" value="O-Negative" />
      </Picker>

      <Text style={Style.label}>Frequent Donor *</Text>
      <Picker
        selectedValue={this.state.frequentDonor}
        style={Style.selectBox}
        onValueChange={this.handleFrequentDonorChange}>
        <Picker.Item label="yes" value="Yes" />
        <Picker.Item label="no" value="No" />
      </Picker>

      <Text style={Style.label}>Country *</Text>
      <Picker
        selectedValue={this.state.country}
        style={Style.selectBox}
        onValueChange={this.handleCountryChange}>
        <Picker.Item label="in" value="India" />
        <Picker.Item label="sg" value="Singapore" />
      </Picker>

      <Text style={Style.label}>State *</Text>
      <Picker
        selectedValue={this.state.state}
        style={Style.selectBox}
        onValueChange={this.handleStateChange}>
        <Picker.Item label="tn" value="Tamil Nadu" />
        <Picker.Item label="kl" value="Kerala" />
      </Picker>

      <Text style={Style.label}>District *</Text>
      <Picker
        selectedValue={this.state.district}
        style={Style.selectBox}
        onValueChange={this.handleDistrictChange}>
        <Picker.Item label="cp" value="ChengalPattu" />
        <Picker.Item label="th" value="Thiruvallur" />
      </Picker>

      <Text style={Style.label}>Taluk *</Text>
      <Picker
        selectedValue={this.state.taluk}
        style={Style.selectBox}
        onValueChange={this.handleTalukChange}>
        <Picker.Item label="t1" value="Taluk1" />
        <Picker.Item label="t2" value="Taluk2" />
      </Picker>

      <Text style={Style.label}>Place *</Text>
      <Picker
        selectedValue={this.state.place}
        style={Style.selectBox}
        onValueChange={this.handlePlaceChange}>
        <Picker.Item label="place1" value="Place1" />
        <Picker.Item label="place2" value="Place2" />
      </Picker>

      <Text style={Style.label}>Area *</Text>
      <Picker
        selectedValue={this.state.area}
        style={Style.selectBox}
        onValueChange={this.handleAreaChange}>
        <Picker.Item label="area1" value="Area1" />
        <Picker.Item label="area2" value="Area2" />
      </Picker>

      <Text style={Style.label}>Address*</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.address}
        onChangeText={this.handleAddressChange}
        error={!!this.state.addressError}
        errorText={this.state.addressError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="none"
        keyboardType="default"
      />

      <Text style={Style.label}>Pin code*</Text>
      <TextInput
        returnKeyType="next"
        value={this.state.pinCode}
        onChangeText={this.handlePinCodeChange}
        error={!!this.state.pinCodeError}
        errorText={this.state.pinCodeError}
        autoCapitalize="none"
        autoCompleteType="off"
        textContentType="none"
        keyboardType="default"
      />

      <Button mode="contained" onPress={this._onRegisterPressed}>
        Register
      </Button>

      </Background>
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
