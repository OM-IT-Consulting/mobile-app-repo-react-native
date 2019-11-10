import { put, call } from 'redux-saga/effects'
import DashBoardActions from 'App/Stores/DashBoard/Actions'
import { dashBoardService } from 'App/Services/DashBoardService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadDashBoardInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(dashBoardService.loadInitialPageData)
  console.log('initialData in DashBoardSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(DashBoardActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      DashBoardActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}