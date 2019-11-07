import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { loginService } from 'App/Services/LoginService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(loginService.loadInitialPageData)
  console.log('initialData in LoginSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(LoginActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      LoginActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}
