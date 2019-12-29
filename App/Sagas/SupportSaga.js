import { put, call } from 'redux-saga/effects'
import SupportActions from 'App/Stores/Support/Actions'
import { supportService } from 'App/Services/SupportService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadSupportInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(supportService.loadInitialPageData)
  console.log('initialData in SupportSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(SupportActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      SupportActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}