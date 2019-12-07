import { put, call } from 'redux-saga/effects'
import RecipientDonorListActions from 'App/Stores/RecipientDonorList/Actions'
import { recipientDonorListService } from 'App/Services/RecipientDonorListService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadRecipientDonorListInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(recipientDonorListService.loadInitialPageData)
  console.log('initialData in RecipientDonorListSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(RecipientDonorListActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      RecipientDonorListActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}