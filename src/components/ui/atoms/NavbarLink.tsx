import Link from 'next/link'
import { ReactNode } from 'react'

import { classNames } from '~/utils'

type Props = {
  as: string
  href: string
  isActive: boolean
  children: ReactNode
}

export const NavbarLink = ({ as, href, isActive, children }: Props) => (
  <Link href={href} as={as} legacyBehavior>
    <a className={classNames(isActive ? 'font-bold' : 'font-normal', 'text-lg lg:text-base')}>
      {children}
    </a>
  </Link>
)
