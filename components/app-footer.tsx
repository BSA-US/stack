import type { FC } from 'react'

import { bsaUrl } from '~/constants'

interface AppFooterProps {
  className?: string
}

export const AppFooter: FC<AppFooterProps> = ({ className = '' }) => (
  <footer className={`border-t-2 py-4 text-xs font-mono ${className}`}>
    <p>
      A BSA Open Tech Development project by{' '}
      <a className='underline whitespace-nowrap' href={bsaUrl}>
        Black Socialists in America
      </a>
    </p>
  </footer>
)
