import fetch from 'isomorphic-unfetch'

export const fetcher = (url: string) => fetch(url).then(r => r.json())
