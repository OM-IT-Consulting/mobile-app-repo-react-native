import { put, call } from 'redux-saga/effects'
import RecipientDonorListResultActions from 'App/Stores/RecipientDonorListResult/Actions'
import { recipientDonorListResultService } from 'App/Services/RecipientDonorListResultService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRecipientDonorListResultInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(recipientDonorListResultService.loadInitialPageData)
  console.log('initialData in RecipientDonorListResultSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RecipientDonorListResultActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RecipientDonorListResultActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}