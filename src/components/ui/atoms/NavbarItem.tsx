import { LiHTMLAttributes } from 'react'

import { classNames } from '~/utils'

export const NavbarItem = ({
  className = '',
  children,
  ...rest
}: LiHTMLAttributes<HTMLLIElement>) => (
  <li className={classNames('px-3 py-1', className)} {...rest}>
    {children}
  </li>
)
