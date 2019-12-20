import { put, call } from 'redux-saga/effects'
import AdminNotificationActions from 'App/Stores/AdminNotification/Actions'
import { adminNotificationService } from 'App/Services/AdminNotificationService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminNotificationInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminNotificationService.loadInitialPageData)
  console.log('initialData in AdminNotificationSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminNotificationActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminNotificationActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}