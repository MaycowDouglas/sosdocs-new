import { t, Trans } from '@lingui/macro'
import { BsTelephone } from 'react-icons/bs'

import LocaleSwitcher from '~/components/ui/molecules/LocaleSwitcher'

export const Header = () => {
  const phone = t`+55 0800 591 1478`

  return (
    <header className="py-3 bg-[linear-gradient(90deg,_#000F69_55.12%,_#000F69_64.09%,_#000F69_73.07%,_#071E92_82.05%,_#071E92_91.02%,_#001240_100%)]">
      <div className="container flex items-center justify-between">
        <LocaleSwitcher />
        <a className="inline-flex items-center gap-2 text-white text-sm" href={`tel:+${phone}`}>
          <BsTelephone />
          <span>
            <Trans>Vendas</Trans>
          </span>
          <span className="hidden md:block">{phone}</span>
        </a>
      </div>
    </header>
  )
}
