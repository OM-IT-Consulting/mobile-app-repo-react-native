import { put, call } from 'redux-saga/effects'
import RecipientNotificationActions from 'App/Stores/RecipientNotification/Actions'
import { recipientNotificationService } from 'App/Services/RecipientNotificationService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRecipientNotificationInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(recipientNotificationService.loadInitialPageData)
  console.log('initialData in RecipientNotificationSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RecipientNotificationActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RecipientNotificationActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}