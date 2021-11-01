import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'destyle.css'
import 'windi.css'

import '~/styles/index.css'
import { useArtifacts, useStatus } from '~/hooks'

function StackApp({ Component, pageProps }: AppProps) {
  const { artifactsHeadLink } = useArtifacts()
  const { statusHeadLink } = useStatus()

  return (
    <>
      <Head>
        {artifactsHeadLink}
        {statusHeadLink}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default StackApp
