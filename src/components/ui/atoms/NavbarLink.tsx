import Link from 'next/link'
import { ReactNode } from 'react'

import { classNames } from '~/utils'

type Props = {
  as: string
  href: string
  isActive: boolean
  children: ReactNode
  className?: string
}

export const NavbarLink = ({ as, href, isActive, className = '', children }: Props) => (
  <Link
    as={as}
    href={href}
    className={classNames(
      'relative',
      className,
      isActive ? 'font-bold' : 'font-normal',
      'text-lg lg:text-base'
    )}
  >
    {isActive && (
      <svg
        className="absolute -top-1 right-0 w-6 h-1 fill-none"
        viewBox="0 0 24 3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="text-primary-300">
          <rect x="12" className="w-3 h-1" fill="currentColor" />
          <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
          <path
            d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z"
            fill="currentColor"
          />
          <circle cx="5.5" cy="1.5" r="1.5" fill="currentColor" />
        </g>
      </svg>
    )}
    {children}
  </Link>
)
