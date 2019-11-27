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
        onValueChange={(itemValue, itemIndex) =>
          this.setState({gender: itemValue})
        }>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

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
