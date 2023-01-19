import { t, Trans } from '@lingui/macro'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { classNames } from '~/utils'

import { NavbarBrand } from '../atoms/NavbarBrand'
import { NavbarCollapse } from '../atoms/NavbarCollapse'
import { NavbarItem } from '../atoms/NavbarItem'
import { NavbarLink } from '../atoms/NavbarLink'
import { NavbarToggle } from '../atoms/NavbarToggle'

type Props = {
  active: boolean
}

export const Navbar = ({ active = false }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { pathname } = useRouter()

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
            <NavbarItem>
              <NavbarLink href="/about" as={t`/sobre-nos`} isActive={pathname === '/about'}>
                <Trans>Sobre nós</Trans>
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/solutions" as={t`/solucoes`} isActive={pathname === '/solutions'}>
                <Trans>Soluções</Trans>
              </NavbarLink>
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
