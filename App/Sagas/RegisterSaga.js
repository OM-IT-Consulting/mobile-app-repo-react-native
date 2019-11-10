import { put, call } from 'redux-saga/effects'
import RegisterActions from 'App/Stores/Register/Actions'
import { registerService } from 'App/Services/RegisterService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRegisterInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(registerService.loadInitialPageData)
  console.log('initialData in RegisterSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RegisterActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RegisterActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}