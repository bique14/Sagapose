// @flow
import type {Action} from '../../../state/types'

export type IncreaseValuePayload = {
  // TODO: Add payload content
}

const id = 'button/INCREASE_VALUE'

export const increaseValue = (): Action<IncreaseValuePayload> => ({
  type: id,
})

increaseValue.id = id
