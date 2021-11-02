import type { NextPage } from 'next'

import { Status } from '~/components'
import { useArtifacts, useStatus } from '~/hooks'
import { LandingPage } from '~/layouts'

const IndexPage: NextPage = () => {
  const { artifacts } = useArtifacts()
  const { status } = useStatus()

  return (
    <LandingPage
      classNameDonate='lg:(top-auto bottom-20)'
      classNameMain='flex flex-col space-y-12 lg:space-y-16'
      footer
    >
      <div className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-6xl leading-12 lg:(text-7xl leading-16)'>
            Stack
          </h1>
          <p className='font-mono uppercase'>Accessible democratic meetings</p>
        </section>
        <section className='col-span-3 leading-5 space-y-2 lg:(col-start-3 col-span-3 text-4xl leading-8 space-y-4) xl:(col-start-2 col-span-2)'>
          <p>
            Stack is an app for online and in-person meetings with tools for
            easy, democratic decision-making.
          </p>
          {status?.text && <Status />}
        </section>
      </div>
      {artifacts?.length && (
        <section className='border-t-2 space-y-8'>
          <div className='flex'>
            <p className='px-4 py-2 bg-black text-white font-mono uppercase lg:(px-6 py-4)'>
              Artifacts
            </p>
          </div>
          <div className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
            <section className='col-span-3 flex-shrink-0 lg:col-span-2 xl:col-span-1'>
              <ul className='space-y-2'>
                {artifacts
                  .sort((a, b) => a.order - b.order)
                  .map(({ name, url, caption }, i) => (
                    <li className={i ? '' : 'text-3xl'} key={name}>
                      <a className='underline' href={url}>
                        {name}
                      </a>
                      {caption && <p className='text-xs'>{caption}</p>}
                    </li>
                  ))}
              </ul>
            </section>
            <section className='col-span-3 max-w-108 space-y-2 lg:(col-start-3 col-span-3 space-y-4) xl:(col-start-2 col-span-2)'>
              <h6>
                <p className='font-bold'>Status of artifacts</p>
                <p className='text-xs'>
                  tl;dr: Expect tweaks, additions, and a facelift.
                </p>
              </h6>
              <ul className='pl-6 list-disc space-y-2'>
                <li>
                  <strong className='font-bold'>Fidelity:&#32;</strong>
                  Since Stack’s identity is in the works, the app is currently
                  unbranded. Things won’t move around much, but they might look
                  totally different in a month.
                </li>
                <li>
                  <strong className='font-bold'>Coverage:&#32;</strong>
                  All of the features that power meetings on Stack are here, but
                  we still need to flesh out details + add some standard
                  features (e.g. signups, invites).
                </li>
              </ul>
            </section>
          </div>
        </section>
      )}
    </LandingPage>
  )
}

export default IndexPage
