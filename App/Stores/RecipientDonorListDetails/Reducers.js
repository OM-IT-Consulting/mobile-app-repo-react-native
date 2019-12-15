/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RecipientDonorListDetailsTypes } from './Actions'

export const loadRecipientDonorListDetailsInitialPageData = (state) => ({
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
  [RecipientDonorListDetailsTypes.LOAD_RECIPIENT_DONOR_LIST_DETAILS_INITIAL_PAGE_DATA]: loadRecipientDonorListDetailsInitialPageData,
  [RecipientDonorListDetailsTypes.LOAD_INITIAL_DATA_SUCCESS]: loadInitialDataSuccess,
  [RecipientDonorListDetailsTypes.LOAD_INITIAL_DATA_FAILURE]: loadInitialDataFailure,
})
