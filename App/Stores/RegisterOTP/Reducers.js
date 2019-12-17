/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RegisterOTPTypes } from './Actions'

export const loadRegisterOTPInitialPageData = (state) => ({
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
  [RegisterOTPTypes.LOAD_REGISTER_OTP_INITIAL_PAGE_DATA]: loadRegisterOTPInitialPageData,
  [RegisterOTPTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [RegisterOTPTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
