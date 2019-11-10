import { put, call } from 'redux-saga/effects'
import SampleActions from 'App/Stores/Sample/Actions'
import { sampleService } from 'App/Services/SampleService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadSampleInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(sampleService.loadInitialPageData)
  console.log('initialData in SampleSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(SampleActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      SampleActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}