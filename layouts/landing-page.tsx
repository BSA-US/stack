import Link from 'next/link'
import type { FC } from 'react'

import { AppFooter } from '~/components'
import { donateUrl, twitterUrl } from '~/constants'

const isDevelopment = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
  : process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== 'production'
  : false

interface LandingPageProps {
  classNameDonate?: string
  classNameLayout?: string
  classNameMain?: string
  footer?: boolean
}

export const LandingPage: FC<LandingPageProps> = ({
  classNameDonate = '',
  classNameLayout = '',
  classNameMain = '',
  children,
  footer
}) => {
  return (
    <div
      className={`relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-8 pb-0 space-y-16) xl:px-16 min-h-screen ${classNameLayout}`}
    >
      {isDevelopment && (
        <div className='flex justify-between p-2 bg-hero-diagonal-lines bg-lime-200 font-mono text-xs'>
          <p>OTD development build</p>
          <a className='underline' href='https://thestack.app' target='_self'>
            thestack.app →
          </a>
        </div>
      )}
      <header className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 items-end gap-8'>
        <Link href='/'>
          <figure
            className='h-18 w-18 cursor-pointer lg:col-span-2 xl:col-span-1'
            style={{
              background: `url('/globe-glyph-k.svg') no-repeat center center`,
              backgroundSize: 'contain',
            }}
          />
        </Link>
        <nav className='col-span-2 justify-self-end lg:(col-start-3 col-span-3 justify-self-auto) xl:(col-start-2 col-span-2)'>
          <div className='flex flex-col border-b-2 py-2 pr-28 leading-6 font-bold xs:(flex-row items-end pr-32 space-x-8) sm:pr-64 md:pr-88'>
            <div className='flex flex-col'>
              <a href={twitterUrl}>Twitter</a>
              <a href='https://dualpower.app/open-design'>
                Biweekly meetings at dualpower.app
              </a>
            </div>
          </div>
          <a
            className={`absolute right-4 top-4 grid place-content-center rounded-full h-20 w-20 border-2 text-center cursor-pointer xs:top-2 lg:right-16 ${
              isDevelopment ? 'top-24 xs:top-22' : 'top-4 xs:top-2'
            } ${classNameDonate}`}
            href={donateUrl}
          >
            Donate
          </a>
        </nav>
      </header>
      <main className={`flex-grow ${classNameMain}`}>{children}</main>
      {footer && <AppFooter className="flex-shrink-none" />}
    </div>
  )
}
