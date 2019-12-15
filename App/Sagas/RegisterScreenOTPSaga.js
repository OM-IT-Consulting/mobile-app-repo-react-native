import { put, call } from 'redux-saga/effects'
import RegisterScreenOTPActions from 'App/Stores/RegisterScreenOTP/Actions'
import { registerScreenOTPService } from 'App/Services/RegisterScreenOTPService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRegisterScreenOTPInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(registerScreenOTPService.loadInitialPageData)
  console.log('initialData in RegisterScreenOTPSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RegisterScreenOTPActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RegisterScreenOTPActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}