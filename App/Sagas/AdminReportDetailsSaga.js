import { put, call } from 'redux-saga/effects'
import AdminReportDetailsActions from 'App/Stores/AdminReportDetails/Actions'
import { adminReportDetailsService } from 'App/Services/AdminReportDetailsService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminReportDetailsInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminReportDetailsService.loadInitialPageData)
  console.log('initialData in AdminReportDetailsSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminReportDetailsActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminReportDetailsActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}