import _useSWR from 'swr'

import { fetcher } from './_utils'

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const useSWR = <Data extends any = any, Error = any>(url: string) => {
  const { data, error } = _useSWR<Data, Error>(url, fetcher)

  const headLink = (
    <link rel='preload' href={url} as='fetch' crossOrigin='anonymous'></link>
  )

  return { data, error, headLink, url }
}
