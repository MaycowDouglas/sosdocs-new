import { t, Trans } from '@lingui/macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { classNames } from '~/utils'

import { Heading } from '../atoms/Heading'
import { MediaIcon } from '../atoms/Icons'
import { IconText } from '../atoms/IconText'
import { NavbarBrand } from '../atoms/NavbarBrand'
import { NavbarCollapse } from '../atoms/NavbarCollapse'
import { NavbarItem } from '../atoms/NavbarItem'
import { NavbarLink } from '../atoms/NavbarLink'
import { NavbarToggle } from '../atoms/NavbarToggle'
import { Text } from '../atoms/Text'
import { NavbarDropdown } from '../molecules/NavbarDropdown'

type Props = {
  active: boolean
}

export const Navbar = ({ active = false }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [showAboutMenu, setAboutMenuVisibility] = useState(false)
  const [showSolutionsMenu, setSolutionsMenuVisibility] = useState(false)
  const { pathname } = useRouter()

  async function handleToggleMenu(menu: 'about' | 'solutions') {
    switch (menu) {
      case 'about':
        if (showSolutionsMenu) {
          setSolutionsMenuVisibility(false)
          await new Promise((r) => setTimeout(r, 300))
        }
        setAboutMenuVisibility(!showAboutMenu)
        break

      case 'solutions':
        if (showAboutMenu) {
          setAboutMenuVisibility(false)
          await new Promise((r) => setTimeout(r, 300))
        }
        setSolutionsMenuVisibility(!showSolutionsMenu)
        break
    }
  }

  return (
    <div
      className={classNames(
        'fixed z-40 ',
        isOpen ? 'top-0' : active ? 'top-5' : 'top-14',
        'left-1/2 -translate-x-1/2 container px-0 md:px-2 lg:px-5 transition-all'
      )}
    >
      <nav
        className={classNames(
          'p-5 flex items-center justify-between bg-white text-primary-300 rounded-xl shadow-xl',
          'md:px-7',
          'lg:py-3 lg:px-12 lg:gap-x-10',
          'xl:px-20 xl:gap-x-20'
        )}
      >
        <NavbarBrand />
        <NavbarToggle isOpen={isOpen} onClick={() => setOpen(!isOpen)} />

        <NavbarCollapse isOpen={isOpen}>
          <ul className="lg:flex">
            <NavbarItem>
              <NavbarLink href="/" as="/" isActive={pathname === '/'}>
                <Trans>Home</Trans>
              </NavbarLink>
            </NavbarItem>
            <NavbarItem className="md:hidden">
              <NavbarLink href="/" as="/" isActive={pathname === '/about'}>
                <Trans>Sobre nós</Trans>
              </NavbarLink>
            </NavbarItem>
            <NavbarItem className="md:hidden">
              <NavbarLink href="/" as="/" isActive={pathname === '/solutions'}>
                <Trans>Soluções</Trans>
              </NavbarLink>
            </NavbarItem>
            <NavbarItem className="group hidden md:inline-flex">
              <span
                className={classNames(
                  pathname === '/about' ? 'font-bold' : 'font-normal',
                  'relative inline-flex items-center gap-2 cursor-pointer'
                )}
                onClick={() => handleToggleMenu('about')}
              >
                {pathname === '/about' && (
                  <svg
                    className="absolute -top-1 right-6 w-6 h-1 fill-none"
                    viewBox="0 0 24 3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-primary-300">
                      <rect x="12" className="w-3 h-1" fill="currentColor" />
                      <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
                      <path
                        d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z"
                        fill="currentColor"
                      />
                      <circle cx="5.5" cy="1.5" r="1.5" fill="currentColor" />
                    </g>
                  </svg>
                )}
                <Trans>Sobre nós</Trans>
                <FiChevronDown strokeWidth={3} />
              </span>
              <span
                className={classNames(
                  '-z-20 absolute top-14 left-5 right-5 grid grid-cols-12',
                  'rounded-b-xl bg-white overflow-hidden transition duration-1000 ease-in-out',
                  showAboutMenu ? 'opacity-100' : '-translate-y-[200%] opacity-0'
                )}
              >
                <span className="text-left bg-neutral-200 p-20 col-span-5">
                  <Heading dark tag="h2" className="text-3xl">
                    Conheça nossa história
                  </Heading>
                  <Text color="darkMuted" className="mt-3 mb-5">
                    Conheça os passos dados pela SOS Docs desde seu surgimento até hoje.
                  </Text>

                  <Link
                    href="/about"
                    className="px-6 py-3 inline-flex items-center justify-center border-2 border-secondary-200 rounded-full bg-transparent text-primary-300"
                  >
                    Conhecer a SOS Docs
                  </Link>
                </span>

                <span className="grid grid-cols-4 place-content-center col-span-7 p-20">
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Nossa história`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Cases`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Unidades`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Trabalhe conosco`} />
                  </Link>
                </span>
              </span>
            </NavbarItem>
            <NavbarItem className="group hidden md:inline-flex">
              <span
                className={classNames(
                  pathname === '/solutions' ? 'font-bold' : 'font-normal',
                  'relative inline-flex items-center gap-2 cursor-pointer'
                )}
                onClick={() => handleToggleMenu('solutions')}
              >
                {pathname === '/solutions' && (
                  <svg
                    className="absolute -top-1 right-6 w-6 h-1 fill-none"
                    viewBox="0 0 24 3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-primary-300">
                      <rect x="12" className="w-3 h-1" fill="currentColor" />
                      <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
                      <path
                        d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z"
                        fill="currentColor"
                      />
                      <circle cx="5.5" cy="1.5" r="1.5" fill="currentColor" />
                    </g>
                  </svg>
                )}
                <Trans>Soluções</Trans>
                <FiChevronDown strokeWidth={3} />
              </span>
              <span
                className={classNames(
                  '-z-20 absolute top-14 left-5 right-5 grid grid-cols-12',
                  'rounded-b-xl',
                  'bg-white overflow-hidden transition duration-1000 ease-in-out',
                  showSolutionsMenu ? 'opacity-100' : '-translate-y-[200%] opacity-0'
                )}
              >
                <span className="text-left bg-neutral-200 p-20 col-span-5">
                  <Heading dark tag="h2" className="text-3xl">
                    Apresentamos soluções para o seu negócio.
                  </Heading>
                  <Text color="darkMuted" className="mt-3 mb-5">
                    Nossas soluções são desenvolvidas com o intuito de atender a sua empresa, com
                    segurança e excelência.
                  </Text>

                  <Link
                    href="/solutions"
                    className="px-6 py-3 inline-flex items-center justify-center border-2 border-secondary-200 rounded-full bg-transparent text-primary-300"
                  >
                    Nossas Soluções
                  </Link>
                </span>

                <span className="grid grid-cols-4 place-content-center col-span-7 p-20">
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Guarda de documentos e mídias`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Tratamento Documental`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`LGPD`} />
                  </Link>
                  <Link href="">
                    <IconText icon={<MediaIcon />} text={t`Transformação digital`} />
                  </Link>
                </span>
              </span>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/insights" as={t`/conteudo`} isActive={pathname === '/insights'}>
                <Trans>Conteúdo</Trans>
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/contact" as={t`/contato`} isActive={pathname === '/contact'}>
                <Trans>Contato</Trans>
              </NavbarLink>
            </NavbarItem>
          </ul>

          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
              'inline-flex items-center gap-2 px-9 py-2 mt-2 lg:mt-0 rounded-full bg-neutral-250 shadow transition-all'
            )}
          >
            <Trans>Área do cliente</Trans>
          </a>
        </NavbarCollapse>
      </nav>
    </div>
  )
}
