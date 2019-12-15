/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RegisterScreenResultTypes } from './Actions'

export const loadRegisterScreenResultInitialPageData = (state) => ({
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
  [RegisterScreenResultTypes.LOAD_REGISTER_SCREEN_RESULT_INITIAL_PAGE_DATA]: loadRegisterScreenResultInitialPageData,
  [RegisterScreenResultTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [RegisterScreenResultTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
