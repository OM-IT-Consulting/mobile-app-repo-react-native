import { put, call } from 'redux-saga/effects'
import ContactUsActions from 'App/Stores/ContactUs/Actions'
import { contactUsService } from 'App/Services/ContactUsService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadContactUsInitialPageData() {
  // Fetch initial Data from an API
  const initialData = yield call(contactUsService.loadInitialPageData)
  console.log('initialData in ContactUsSaga-->',JSON.stringify(initialData));

  if (initialData) {
    yield put(ContactUsActions.loadInitialDataSuccess(initialData))
  } else {
    yield put(
      ContactUsActions.loadInitialDataFailure('There was an error while fetching initial Data.')
    )
  }
}