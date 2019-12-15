import { put, call } from 'redux-saga/effects'
import RegisterScreenResultActions from 'App/Stores/RegisterScreenResult/Actions'
import { registerScreenResultService } from 'App/Services/RegisterScreenResultService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRegisterScreenResultInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(registerScreenResultService.loadInitialPageData)
  console.log('initialData in RegisterScreenResultSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RegisterScreenResultActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RegisterScreenResultActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}