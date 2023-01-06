import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { classNames } from '~/utils'

export const NavLink = ({
  className = '',
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={classNames(className, 'flex items-center gap-2 text-sm')} {...rest}>
    {children}
  </a>
)
