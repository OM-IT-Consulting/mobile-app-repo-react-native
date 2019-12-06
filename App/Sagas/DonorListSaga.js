import { put, call } from 'redux-saga/effects'
import DonorListActions from 'App/Stores/DonorList/Actions'
import { donorListService } from 'App/Services/DonorListService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadDonorListInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(donorListService.loadInitialPageData)
  console.log('initialData in DonorListSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(DonorListActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      DonorListActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}