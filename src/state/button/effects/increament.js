// @flow

import type {Effect} from '../../types'

import {
  takeEvery,
  put
} from 'redux-saga/effects'
import { buttonActions } from '../actions'

export function* increamentEffect(): Effect {
  const action = yield takeEvery(buttonActions.increaseValue.id)
  yield put({ type: 'button/INCREASE_VALUE' })
}
