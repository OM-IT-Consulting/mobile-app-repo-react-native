import { put, call } from 'redux-saga/effects'
import AdminListSendResponseActions from 'App/Stores/AdminListSendResponse/Actions'
import { adminListSendResponseService } from 'App/Services/AdminListSendResponseService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminListSendResponseInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminListSendResponseService.loadInitialPageData)
  console.log('initialData in AdminListSendResponseSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminListSendResponseActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminListSendResponseActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}