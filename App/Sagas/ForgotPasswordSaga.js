import { put, call } from 'redux-saga/effects'
import ForgotPasswordActions from 'App/Stores/ForgotPassword/Actions'
import { forgotPasswordService } from 'App/Services/ForgotPasswordService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadForgotPasswordInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(forgotPasswordService.loadInitialPageData)
  console.log('initialData in ForgotPasswordSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(ForgotPasswordActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      ForgotPasswordActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}