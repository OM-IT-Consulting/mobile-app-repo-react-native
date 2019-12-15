import { put, call } from 'redux-saga/effects'
import DonorListDetailsActions from 'App/Stores/DonorListDetails/Actions'
import { donorListDetailsService } from 'App/Services/DonorListDetailsService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadDonorListDetailsInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(donorListDetailsService.loadInitialPageData)
  console.log('initialData in DonorListDetailsSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(DonorListDetailsActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      DonorListDetailsActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}