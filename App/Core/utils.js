export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';
  return '';
};

export const mobileNoValidator = mobileNo => {
  if (!mobileNo || mobileNo.length <= 0) return 'MobileNo cannot be empty.';
  return '';
};

export const otpValidator = otp => {
  if (!otp || otp.length <= 0) return 'OTP cannot be empty.';
  return '';
};

export const newPasswordValidator = newPassword => {
  if (!newPassword || newPassword.length <= 0) return 'New Password cannot be empty.';
  return '';
};

export const confirmPasswordValidator = confirmPassword => {
  if (!confirmPassword || confirmPassword.length <= 0) return 'Confirm Password cannot be empty.';
  return '';
};

export const genderValidator = gender => {
  if (!gender || gender.length <= 0) return 'Gender cannot be empty.';
  return '';
};

export const dobValidator = dob => {
  if (!dob || dob.length <= 0) return 'Date Of Birth cannot be empty.';
  return '';
};

export const bloodGroupValidator = bloodGroup => {
  if (!bloodGroup || bloodGroup.length <= 0) return 'Blood Group cannot be empty.';
  return '';
};

export const frequentDonorValidator = frequentDonor => {
  if (!frequentDonor || frequentDonor.length <= 0) return 'Frequent Donor cannot be empty.';
  return '';
};

export const countryValidator = country => {
  if (!country || country.length <= 0) return 'Country cannot be empty.';
  return '';
};

export const stateValidator = state => {
  if (!state || state.length <= 0) return 'State cannot be empty.';
  return '';
};

export const districtValidator = district => {
  if (!district || district.length <= 0) return 'District cannot be empty.';
  return '';
};

export const talukValidator = taluk => {
  if (!taluk || taluk.length <= 0) return 'Taluk cannot be empty.';
  return '';
};

export const placeValidator = place => {
  if (!place || place.length <= 0) return 'Place cannot be empty.';
  return '';
};

export const areaValidator = area => {
  if (!area || area.length <= 0) return 'Area cannot be empty.';
  return '';
};

export const addressValidator = address => {
  if (!address || address.length <= 0) return 'Address cannot be empty.';
  return '';
};

export const pinCodeValidator = pinCode => {
  if (!pinCode || pinCode.length <= 0) return 'Pin Code cannot be empty.';
  return '';
};