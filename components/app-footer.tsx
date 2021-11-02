import type { FC } from 'react'

import { bsaUrl } from '~/constants'

export const AppFooter: FC<{
  className?: string
}> = ({ className = '' }) => (
  <footer className={`border-t-2 py-4 text-xs font-mono ${className}`}>
    <p>
      A BSA Open Tech Development project by{' '}
      <a className='underline whitespace-nowrap' href={bsaUrl}>
        Black Socialists in America
      </a>
    </p>
  </footer>
)
