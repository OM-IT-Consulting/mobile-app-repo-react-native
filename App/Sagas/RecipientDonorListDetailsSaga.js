import { put, call } from 'redux-saga/effects'
import RecipientDonorListDetailsActions from 'App/Stores/RecipientDonorListDetails/Actions'
import { recipientDonorListDetailsService } from 'App/Services/RecipientDonorListDetailsService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRecipientDonorListDetailsInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(recipientDonorListDetailsService.loadInitialPageData)
  console.log('initialData in RecipientDonorListDetailsSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RecipientDonorListDetailsActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RecipientDonorListDetailsActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}