import type { Status } from '~/types'

import { useSWR } from './use-swr'

export const useStatus = () => {
  const res = useSWR<Status, unknown>('/api/status')

  const {
    data: status,
    error: statusError,
    headLink: statusHeadLink,
    url: statusUrl,
  } = res

  return {
    ...res,
    status,
    statusError,
    statusHeadLink,
    statusUrl,
  }
}
