import type { Artifact } from '~/types'

import { useSWR } from './use-swr'

export const useArtifacts = () => {
  const res = useSWR<Artifact[], unknown>('/api/artifacts')

  const {
    data: artifacts,
    error: artifactsError,
    headLink: artifactsHeadLink,
    url: artifactsUrl,
  } = res

  return {
    ...res,
    artifacts,
    artifactsError,
    artifactsHeadLink,
    artifactsUrl,
  }
}
