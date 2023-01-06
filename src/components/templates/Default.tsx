import Head from 'next/head'
import { ReactNode } from 'react'

import { Footer } from '~/components/ui/organisms/Footer'
import { Header } from '~/components/ui/organisms/Header'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export const TemplateDefault = ({ title, description, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)
