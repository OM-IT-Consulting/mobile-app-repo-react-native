import { put, call } from 'redux-saga/effects'
import ForgotPasswordResultActions from 'App/Stores/ForgotPasswordResult/Actions'
import { forgotPasswordResultService } from 'App/Services/ForgotPasswordResultService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadForgotPasswordResultInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(forgotPasswordResultService.loadInitialPageData)
  console.log('initialData in ForgotPasswordResultSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(ForgotPasswordResultActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      ForgotPasswordResultActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}