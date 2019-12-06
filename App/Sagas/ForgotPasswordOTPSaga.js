import { put, call } from 'redux-saga/effects'
import ForgotPasswordOTPActions from 'App/Stores/ForgotPasswordOTP/Actions'
import { forgotPasswordOTPService } from 'App/Services/ForgotPasswordOTPService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadForgotPasswordOTPInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(forgotPasswordOTPService.loadInitialPageData)
  console.log('initialData in ForgotPasswordOTPSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(ForgotPasswordOTPActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      ForgotPasswordOTPActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}