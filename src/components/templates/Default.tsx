import Head from 'next/head'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import { Footer } from '~/components/ui/organisms/Footer'
import { Header } from '~/components/ui/organisms/Header'
import { Navbar } from '~/components/ui/organisms/Navbar'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export const TemplateDefault = ({ title, description, children }: Props) => {
  const [scrollY, setScrollY] = useState(0)

  const onScroll = useCallback((ev: Event) => {
    const { pageYOffset, scrollY } = window
    setScrollY(window.pageYOffset)
  }, [])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true })
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Navbar active={scrollY > 56} />
      {children}
      <Footer />
    </>
  )
}
