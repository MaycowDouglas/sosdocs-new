import { LiHTMLAttributes } from 'react'

import { classNames } from '~/utils'

type Props = LiHTMLAttributes<HTMLLIElement> & {
  hasBorder: boolean
}

export const DropdownItem = ({ hasBorder = false, children }: Props) => (
  <li className={classNames('py-3', hasBorder ? 'border-b-2 border-neutral-150' : '')}>
    {children}
  </li>
)
