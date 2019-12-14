import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { LoginTypes } from 'App/Stores/Login/Actions'
import { SampleTypes } from 'App/Stores/Sample/Actions'
import { ForgotPasswordTypes } from 'App/Stores/ForgotPassword/Actions'
import { RegisterTypes } from 'App/Stores/Register/Actions'
import { DashBoardTypes } from 'App/Stores/DashBoard/Actions'
import { DonorListTypes } from 'App/Stores/DonorList/Actions'
import { AdminListTypes } from 'App/Stores/AdminList/Actions'
import { LogoutTypes } from 'App/Stores/Logout/Actions'
import { RecipientDonorListTypes } from 'App/Stores/RecipientDonorList/Actions'
import { RecipientDonorListResultTypes } from 'App/Stores/RecipientDonorListResult/Actions'
import { AdminDonorShareTypes } from 'App/Stores/AdminDonorShare/Actions'
import { ForgotPasswordOTPTypes } from 'App/Stores/ForgotPasswordOTP/Actions'
import { ForgotPasswordResultTypes } from 'App/Stores/ForgotPasswordResult/Actions'
import { RegisterScreenOTPTypes } from 'App/Stores/RegisterScreenOTP/Actions'
import { RegisterScreenResultTypes } from 'App/Stores/RegisterScreenResult/Actions'
import { RecipientDonorListDetailsTypes } from 'App/Stores/RecipientDonorListDetails/Actions'
import { DonorListDetailsTypes } from 'App/Stores/DonorListDetails/Actions'
import { AdminListSendResponseTypes } from 'App/Stores/AdminListSendResponse/Actions'
import { AdminReportTypes } from 'App/Stores/AdminReport/Actions'
import { AdminReportDetailsTypes } from 'App/Stores/AdminReportDetails/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { loadInitialPageData } from './LoginSaga'
import { loadSampleInitialPageData } from './SampleSaga'
import { loadForgotPasswordInitialPageData } from './ForgotPasswordSaga'
import { loadRegisterInitialPageData } from './RegisterSaga'
import { loadDashBoardInitialPageData } from './DashBoardSaga'
import { loadDonorListInitialPageData } from './DonorListSaga'
import { loadAdminListInitialPageData } from './AdminListSaga'
import { loadAdminDonorShareInitialPageData } from './AdminDonorShareSaga'
import { loadForgotPasswordOTPInitialPageData } from './ForgotPasswordOTPSaga'
import { loadLogoutInitialPageData } from './LogoutSaga'
import { loadRecipientDonorListInitialPageData } from './RecipientDonorListSaga'
import { loadRecipientDonorListResultInitialPageData } from './RecipientDonorListResultSaga'
import { loadForgotPasswordResultInitialPageData } from './ForgotPasswordResultSaga'
import { loadRegisterScreenOTPInitialPageData } from './RegisterScreenOTPSaga'
import { loadRegisterScreenResultInitialPageData } from './RegisterScreenResultSaga'
import { loadRecipientDonorListDetailsInitialPageData } from './RecipientDonorListDetailsSaga'
import { loadDonorListDetailsInitialPageData } from './DonorListDetailsSaga'
import { loadAdminListSendResponseInitialPageData } from './AdminListSendResponseSaga'
import { loadAdminReportInitialPageData } from './AdminReportSaga'
import { loadAdminReportDetailsInitialPageData } from './AdminReportDetailsSaga'

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
    // Call `loadDonorListInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(DonorListTypes.LOAD_DONOR_LIST_INITIAL_PAGE_DATA, loadDonorListInitialPageData),
    // Call `loadAdminListInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(AdminListTypes.LOAD_ADMIN_LIST_INITIAL_PAGE_DATA, loadAdminListInitialPageData),
    // Call `loadAdminDonorShareInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(AdminDonorShareTypes.LOAD_ADMIN_DONOR_SHARE_INITIAL_PAGE_DATA, loadAdminDonorShareInitialPageData),
    // Call `loadForgotPasswordOTPInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(ForgotPasswordOTPTypes.LOAD_FORGOT_PASSWORD_OTP_INITIAL_PAGE_DATA, loadForgotPasswordOTPInitialPageData),
    // Call `loadLogoutInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(LogoutTypes.LOAD_LOGOUT_INITIAL_PAGE_DATA, loadLogoutInitialPageData),
    // Call `loadRecipientDonorListInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RecipientDonorListTypes.LOAD_RECIPIENT_DONOR_LIST_INITIAL_PAGE_DATA, loadRecipientDonorListInitialPageData),
    // Call `loadRecipientDonorListResultInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RecipientDonorListResultTypes.LOAD_RECIPIENT_DONOR_LIST_RESULT_INITIAL_PAGE_DATA, loadRecipientDonorListResultInitialPageData),
    // Call `loadForgotPasswordResultResultInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(ForgotPasswordResultTypes.LOAD_FORGOT_PASSWORD_RESULT_INITIAL_PAGE_DATA, loadForgotPasswordResultInitialPageData),
    // Call `loadRegisterScreenOTPInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RegisterScreenOTPTypes.LOAD_REGISTERSCREEN_OTP_INITIAL_PAGE_DATA, loadRegisterScreenOTPInitialPageData),
    // Call `loadRegisterScreenResultInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RegisterScreenResultTypes.LOAD_REGISTER_SCREEN_RESULT_INITIAL_PAGE_DATA, loadRegisterScreenResultInitialPageData),
    // Call `loadRecipientDonorListDetailsInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(RecipientDonorListDetailsTypes.LOAD_RECIPIENT_DONOR_LIST_DETAILS_INITIAL_PAGE_DATA, loadRecipientDonorListDetailsInitialPageData),
    // Call `loadDonorListDetailsInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(DonorListDetailsTypes.LOAD_DONOR_LIST_DETAILS_INITIAL_PAGE_DATA, loadDonorListDetailsInitialPageData),
    // Call `loadAdminListSendResponseInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(AdminListSendResponseTypes.LOAD_ADMIN_LIST_SEND_RESPONSE_INITIAL_PAGE_DATA, loadAdminListSendResponseInitialPageData),
    // Call `loadAdminReportInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(AdminReportTypes.LOAD_ADMIN_REPORT_INITIAL_PAGE_DATA, loadRecipientDonorListResultInitialPageData),
    // Call `loadAdminReportDetailsInitialPageData()` when a `LOAD_INITIAL_PAGE_DATA` action is triggered
    takeEvery(AdminReportDetailsTypes.LOAD_ADMIN_REPORT_DETAILS_INITIAL_PAGE_DATA, loadAdminReportDetailsInitialPageData)
  ])
}
