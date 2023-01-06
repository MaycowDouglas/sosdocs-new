import { HTMLAttributes } from 'react'

import { classNames } from '~/utils'

type Props = HTMLAttributes<HTMLUListElement> & {
  isOpen: boolean
}

export const DropdownMenu = ({ isOpen = false, children, ...rest }: Props) => (
  <ul
    className={classNames(
      isOpen ? 'absolute' : 'hidden',
      'z-50 w-44 right-2 top-7 translate-x-1/2 px-5 py-3',
      'rounded-2xl bg-white shadow-[0px_0px_35px_rgba(0,0,0,0.08)]'
    )}
    {...rest}
  >
    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></span>
    {children}
  </ul>
)
