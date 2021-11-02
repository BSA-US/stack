import Document, { Html, Head, Main, NextScript } from 'next/document'

class StackDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* TWITTER CARD */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@AppForStack' />
          <meta name='twitter:creator' content='@AppForStack' />
          <meta name='twitter:title' content='The Stack App' />
          <meta
            name='twitter:description'
            content='Stack is an app for online and in-person meetings with tools for easy, democratic decision-making.'
          />
          <meta
            name='twitter:image'
            content='https://stackthe.app/twitter-card.png'
          />
          <meta
            name='twitter:image:alt'
            content='Stack — Accessible democratic meetings'
          />
          {/* OPEN GRAPH */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://stackthe.app' />
          <meta property='og:title' content='The Stack App' />
          <meta
            property='og:description'
            content='Stack is an app for online and in-person meetings with tools for easy, democratic decision-making.'
          />
          <meta
            property='og:image'
            content='https://stackthe.app/open-graph.png'
          />
          <meta property='og:image:width' content='2400' />
          <meta property='og:image:height' content='2400' />
          <meta
            property='og:image:alt'
            content='Stack — Accessible democratic meetings'
          />
          <meta property='og:image:type' content='image/png' />
          {/* FAVICON */}
          <link
            href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default StackDocument
