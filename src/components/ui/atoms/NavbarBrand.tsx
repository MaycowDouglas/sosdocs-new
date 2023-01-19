import Link from 'next/link'

import { SosdocsIcon } from './Icons'

export const NavbarBrand = () => (
  <Link href="/" legacyBehavior>
    <a className={'w-28 lg:w-40'}>
      <SosdocsIcon />
    </a>
  </Link>
)
