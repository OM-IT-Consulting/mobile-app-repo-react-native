/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ForgotPasswordOTPTypes } from './Actions'

export const loadForgotPasswordOTPInitialPageData = (state) => ({
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
  [ForgotPasswordOTPTypes.LOAD_FORGOT_PASSWORD_OTP_INITIAL_PAGE_DATA]: loadForgotPasswordOTPInitialPageData,
  [ForgotPasswordOTPTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [ForgotPasswordOTPTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
