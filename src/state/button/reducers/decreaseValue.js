// @flow

import type {Action} from '../../types'
import type {ButtonState} from '../types'
import type {DecreaseValuePayload} from '../actions/decreaseValue'

export function decreaseValueReducer(state: ButtonState, action: Action<DecreaseValuePayload>): ButtonState {
  console.log(action, state)
  return {
    ...state,
    count: state.count - 1
  }
}
