import { ReactNode } from 'react'

import { classNames } from '~/utils'

type Props = {
  tag?: 'p' | 'address'
  title?: string
  color?: 'dark' | 'light' | 'darkMuted' | 'lightMuted'
  children: ReactNode
  className?: string
}

export const Text = ({ tag = 'p', color = 'light', className = '', children, title }: Props) => {
  const Tag = tag as keyof JSX.IntrinsicElements

  const colors = {
    dark: 'text-primary-300',
    light: 'text-white',
    darkMuted: 'text-slate-200',
    lightMuted: 'text-slate-100',
  }

  return (
    <Tag title={title} className={classNames(colors[color], className)}>
      {children}
    </Tag>
  )
}
