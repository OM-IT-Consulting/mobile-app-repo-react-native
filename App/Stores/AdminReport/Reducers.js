/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AdminReportTypes } from './Actions'

export const loadAdminReportInitialPageData = (state) => ({
  ...state,
  initialDataIsLoading: false,
  initialDataErrorMessage: null,
})

export const loadInitialDataSuccess = (state, { initialData }) => ({
  ...state,
  initialData: initialData,
  initialDataIsLoading: false,
  initialDataErrorMessage: null,
})

export const loadInitialDataFailure = (state, { errorMessage }) => ({
  ...state,
  initialData: {},
  initialDataIsLoading: false,
  initialDataErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AdminReportTypes.LOAD_ADMIN_REPORT_INITIAL_PAGE_DATA]: loadAdminReportInitialPageData,
  [AdminReportTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [AdminReportTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
