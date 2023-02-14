import { ReactNode } from 'react'

import { Text } from './Text'

type Props = {
  icon: ReactNode
  text: string
}

export const IconText = ({ icon, text }: Props) => {
  return (
    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
      <span className="inline-flex justify-center items-center mx-auto md:w-20 h-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
        {icon}
      </span>
      <Text color="dark" className="w-3/4 lg:w-full text-sm">
        {text}
      </Text>
    </div>
  )
}
