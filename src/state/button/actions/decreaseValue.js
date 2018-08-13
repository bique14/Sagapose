// @flow
import type {Action} from '../../../state/types'

export type DecreaseValuePayload = {
  // TODO: Add payload content
}

const id = 'button/DECREASE_VALUE'

export const decreaseValue = (): Action<DecreaseValuePayload> => ({
  type: id,
})

decreaseValue.id = id
