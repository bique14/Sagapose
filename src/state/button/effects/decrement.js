// @flow

import type {Effect} from '../../types'

import {
  takeEvery,
  put
} from 'redux-saga/effects'
import { buttonActions } from '../actions'

export function* decrementEffect(): Effect {
  const action = yield takeEvery(buttonActions.decreaseValue.id)
  yield put({ type: 'button/DECREASE_VALUE' })
}
