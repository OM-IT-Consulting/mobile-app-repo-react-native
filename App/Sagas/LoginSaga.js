import { call } from 'redux-saga/effects'
import { loginService } from 'App/Services/LoginService'

/**
 * A saga can contain multiple functions.
 *
 */
export function* loadInitialPageData() {
  // Fetch user informations from an API
  const initialPageData = yield call(loginService.loadInitialPageData)
}
