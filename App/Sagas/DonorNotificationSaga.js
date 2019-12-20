import { put, call } from 'redux-saga/effects'
import DonorNotificationActions from 'App/Stores/DonorNotification/Actions'
import { donorNotificationService } from 'App/Services/DonorNotificationService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadDonorNotificationInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(donorNotificationService.loadInitialPageData)
  console.log('initialData in DonorNotificationSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(DonorNotificationActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      DonorNotificationActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}