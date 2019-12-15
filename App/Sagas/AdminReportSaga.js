import { put, call } from 'redux-saga/effects'
import AdminReportActions from 'App/Stores/AdminReport/Actions'
import { adminReportService } from 'App/Services/AdminReportService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminReportInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminReportService.loadInitialPageData)
  console.log('initialData in AdminReportSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminReportActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminReportActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}