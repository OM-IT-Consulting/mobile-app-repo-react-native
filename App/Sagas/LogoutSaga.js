import { put, call } from 'redux-saga/effects'
import LogoutActions from 'App/Stores/Logout/Actions'
import { logoutService } from 'App/Services/LogoutService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadLogoutInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(logoutService.loadInitialPageData)
  console.log('initialData in LogoutSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(LogoutActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      LogoutActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}