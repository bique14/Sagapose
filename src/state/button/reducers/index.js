// Auto-generated by the generator
// Don't manually edit this file

// @flow

import type { Action } from '../../types'
import type { ButtonState } from '../types'

import { increaseValueReducer } from './increaseValue'
import { decreaseValueReducer } from './decreaseValue'
import { initialState } from './initialState'

export const buttonReducer = (state: ButtonState = initialState, action: Action<any>): ButtonState => {
  console.log('reducer')
  switch (action.type) {
    case 'button/INCREASE_VALUE':
      return increaseValueReducer(state, action)
    case 'button/DECREASE_VALUE':
      return decreaseValueReducer(state, action)
    default:
      return state
  }
}