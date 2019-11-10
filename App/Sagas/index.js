import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { LoginTypes } from 'App/Stores/Login/Actions'
import { SampleTypes } from 'App/Stores/Sample/Actions'
import { ForgotPasswordTypes } from 'App/Stores/ForgotPassword/Actions'
import { RegisterTypes } from 'App/Stores/Register/Actions'
import { DashBoardTypes } from 'App/Stores/DashBoard/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { loadInitialPageData } from './LoginSaga'
import { loadSampleInitialPageData } from './SampleSaga'
import { loadForgotPasswordInitialPageData } from './ForgotPasswordSaga'
import { loadRegisterInitialPageData } from './RegisterSaga'
import { loadDashBoardInitialPageData } from './DashBoardSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeEvery(ExampleTypes.FETCH_USER, fetchUser),
    // Call `loadInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(LoginTypes.LOAD_INITIAL_PAGE_DATA, loadInitialPageData),
    // Call `loadSampleInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(SampleTypes.LOAD_SAMPLE_INITIAL_PAGE_DATA, loadSampleInitialPageData),
    // Call `loadForgotPasswordInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeLatest(ForgotPasswordTypes.LOAD_FORGOT_PASSWORD_INITIAL_PAGE_DATA, loadForgotPasswordInitialPageData),
    // Call `loadRegisterInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RegisterTypes.LOAD_REGISTER_INITIAL_PAGE_DATA, loadRegisterInitialPageData),
    // Call `loadDashBoardInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(DashBoardTypes.LOAD_DASH_BOARD_INITIAL_PAGE_DATA, loadDashBoardInitialPageData),
  ])
}
