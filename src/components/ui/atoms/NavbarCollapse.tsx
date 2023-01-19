import { HTMLAttributes } from 'react'

import { classNames } from '~/utils'

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
}

export const NavbarCollapse = ({ isOpen, children }: Props) => (
  <div
    className={classNames(
      isOpen ? 'absolute' : 'hidden',
      '-z-10 top-10 left-0 h-screen w-full px-5 py-20 bg-white text-center',
      'lg:-z-0 lg:h-auto lg: lg:p-0 lg:flex lg:justify-between lg:items-center'
    )}
  >
    {children}
  </div>
)
