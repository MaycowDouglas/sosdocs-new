import { ReactNode } from 'react'

import { classNames } from '~/utils'

type Props = {
  tag?: 'p' | 'address'
  color?: 'dark' | 'light' | 'darkMuted' | 'lightMuted'
  children: ReactNode
  className?: string
}

export const Text = ({ tag = 'p', color = 'light', className = '', children }: Props) => {
  const Tag = tag as keyof JSX.IntrinsicElements

  const colors = {
    dark: 'text-primary-300',
    light: 'text-white',
    darkMuted: 'text-slate-200',
    lightMuted: 'text-slate-100',
  }

  return <Tag className={classNames(colors[color], className)}>{children}</Tag>
}
