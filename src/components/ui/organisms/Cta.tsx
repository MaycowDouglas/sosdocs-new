import Image from 'next/image'
import Link from 'next/link'

import BgWeb from '~/public/images/backgrounds/bg-web.jpg'

import { Container } from '../atoms/Container'
import { Content } from '../atoms/Content'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'

type Props = {
  href: string
  title: string
  text: string
  call: string
}

export const Cta = ({ href, title, text, call }: Props) => (
  <section className="relative">
    <Image src={BgWeb} alt="" fill className="object-cover" quality={100} />
    <Container className="py-20">
      <Content className="text-center space-y-6 lg:mx-auto lg:w-11/12 xl:w-9/12">
        <Heading className="text-2xl md:text-3xl lg:text-5xl">{title}</Heading>
        <Text color="lightMuted" className="text-lg">
          {text}
        </Text>
        <Link href={href} legacyBehavior>
          <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-300 text-white">
            {call}
          </a>
        </Link>
      </Content>
    </Container>
  </section>
)
