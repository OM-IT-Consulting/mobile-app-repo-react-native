import { put, call } from 'redux-saga/effects'
import AdminDonorShareActions from 'App/Stores/AdminDonorShare/Actions'
import { adminDonorShareService } from 'App/Services/AdminDonorShareService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadAdminDonorShareInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(adminDonorShareService.loadInitialPageData)
  console.log('initialData in AdminDonorShareSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(AdminDonorShareActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      AdminDonorShareActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}