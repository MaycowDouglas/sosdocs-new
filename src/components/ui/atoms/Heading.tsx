import { ReactNode } from 'react'

import { classNames } from '~/utils'

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark?: boolean
  children: ReactNode
  className?: string
}

export const Heading = ({ tag = 'h2', dark = false, className = '', children }: Props) => {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={classNames('font-semibold', dark ? 'text-primary-300' : 'text-white', className)}
    >
      {children}
    </Tag>
  )
}
