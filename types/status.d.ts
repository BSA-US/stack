import type { Action } from './_common'

export interface Status {
  text: string
  actions?: Partial<Action>[]
}
