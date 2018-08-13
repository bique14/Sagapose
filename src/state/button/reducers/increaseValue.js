// @flow

import type {Action} from '../../types'
import type {ButtonState} from '../types'
import type {IncreaseValuePayload} from '../actions/increaseValue'

export function increaseValueReducer(state: ButtonState, action: Action<IncreaseValuePayload>): ButtonState {
  return {
    ...state,
    count: state.count + 1
  }
}
