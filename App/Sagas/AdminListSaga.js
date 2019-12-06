import { put, call } from 'redux-saga/effects'
import AdminListActions from 'App/Stores/AdminList/Actions'
import { adminListService } from 'App/Services/AdminListService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminListInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminListService.loadInitialPageData)
  console.log('initialData in AdminListSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminListActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminListActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}