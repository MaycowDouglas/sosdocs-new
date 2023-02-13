import { t } from '@lingui/macro'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { DropdownItem } from '~/components/ui/atoms/DropdownItem'
import { DropdownMenu } from '~/components/ui/atoms/DropdownMenu'
import { NavLink } from '~/components/ui/atoms/NavLink'
import FlagBRA from '~/public/images/flags/bra.png'
import FlagPRY from '~/public/images/flags/pry.png'
import FlagUSA from '~/public/images/flags/usa.png'

export default function LocaleSwitcher() {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter((locale) => locale !== activeLocale)

  const languages: { [key: string]: string } = {
    en: t`Inglês`,
    es: t`Espanhol`,
    pt: t`Português`,
  }

  const countries: { [key: string]: string } = {
    en: t`Estados Unidos`,
    es: t`Paraguai`,
    pt: t`Brasil`,
  }

  const flags: { [key: string]: StaticImageData } = {
    en: FlagUSA,
    es: FlagPRY,
    pt: FlagBRA,
  }

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setOpen(!isOpen)}
        className="inline-flex items-center gap-3 text-white text-sm"
      >
        <span className="w-5">
          <Image src={flags[activeLocale!]} alt="" />
        </span>
        <span>{languages[activeLocale!]}</span>
        <FiChevronDown strokeWidth={3} />
      </button>
      <DropdownMenu isOpen={isOpen}>
        {otherLocales.map((locale, index) => {
          const { pathname, query, asPath } = router
          return (
            <DropdownItem key={locale} hasBorder={Object.keys(otherLocales).length - 1 !== index}>
              <Link href={{ pathname, query }} as={asPath} locale={locale} legacyBehavior passHref>
                <NavLink>
                  <span className="w-5">
                    <Image src={flags[locale!]} alt={countries[locale!]} />
                  </span>
                  <span>{languages[locale!]}</span>
                </NavLink>
              </Link>
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </div>
  )
}
