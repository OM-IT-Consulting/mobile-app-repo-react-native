import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { LoginTypes } from 'App/Stores/Login/Actions'
import { SampleTypes } from 'App/Stores/Sample/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { loadInitialPageData } from './LoginSaga'
import { loadSampleInitialPageData } from './SampleSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // Call `loadInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeLatest(LoginTypes.LOAD_INITIAL_PAGE_DATA, loadInitialPageData),
    // Call `loadInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeLatest(SampleTypes.LOAD_INITIAL_PAGE_DATA, loadSampleInitialPageData),
  ])
}
