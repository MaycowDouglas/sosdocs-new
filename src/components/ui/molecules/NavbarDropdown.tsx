import { t } from '@lingui/macro'
import Link from 'next/link'

import { MediaIcon } from '../atoms/Icons'
import { IconText } from '../atoms/IconText'
import { NavbarItem } from '../atoms/NavbarItem'
import { NavLink } from '../atoms/NavLink'

export const NavbarDropdown = () => {
  return (
    <NavbarItem>
      <NavLink className="peer">Sobre Nós</NavLink>
      <span className="absolute left-0 hidden peer-hover:block bg-white">
        <span>
          <h2>Conheça nossa história</h2>
          <p>Conheça os passos dados pela SOS Docs desde seu surgimento até hoje.</p>

          <Link href="">Conhecer a SOS Docs</Link>
        </span>

        <span>
          <IconText icon={<MediaIcon />} text={t`Nossa história`} />
          <IconText icon={<MediaIcon />} text={t`Cases`} />
          <IconText icon={<MediaIcon />} text={t`Unidades`} />
          <IconText icon={<MediaIcon />} text={t`Trabalhe conosco`} />
        </span>
      </span>
    </NavbarItem>
  )
}
