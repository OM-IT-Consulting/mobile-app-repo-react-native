/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DonorNotificationTypes } from './Actions'

export const loadDonorNotificationInitialPageData = (state) => ({
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
  [DonorNotificationTypes.LOAD_DONOR_NOTIFY_INITIAL_PAGE_DATA]: loadDonorNotificationInitialPageData,
  [DonorNotificationTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [DonorNotificationTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
