import Link from 'next/link'
import { ReactNode } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'

type Props = {
  href?: string
  icon: ReactNode
  title: string
  text: string
}

export const SolutionCard = ({ href = '', icon, title, text }: Props) => (
  <Link href={href} legacyBehavior>
    <a className="relative space-y-5 px-5 lg:px-10 xl:px-16 pb-24 pt-14 border-4 rounded-2xl border-primary-400 hover:border-secondary-100">
      <span className="inline-flex w-auto h-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">{icon}</span>

      <Heading tag="h3" className="text-xl lg:text-2xl xl:text-3xl" dark>
        {title}
      </Heading>

      <Text color="darkMuted">{text}</Text>

      <span className="absolute bottom-8 right-8 p-4 inline-flex rounded-full bg-neutral-250">
        <BsArrowRight strokeWidth={0.5} className="text-primary-300 text-2xl" />
      </span>
    </a>
  </Link>
)
