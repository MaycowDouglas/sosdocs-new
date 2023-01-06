import { Trans } from '@lingui/macro'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

import { SosdocsIcon } from '../atoms/Icons'

export const Footer = () => {
  return (
    <footer className="bg-neutral-400 text-white py-14">
      <div className="container">
        <div className="lg:px-10 xl:px-20 flex flex-col gap-10 text-center lg:text-left">
          <div className="mb-5 grid grid-cols-12 gap-y-10 lg:gap-10">
            <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start gap-5">
              <div className="w-48">
                <SosdocsIcon />
              </div>

              <div>
                <p className="text-lg">
                  <Trans>Central de atendimento</Trans>
                </p>
                <a
                  href="tel:+5508005911478"
                  className="flex justify-center items-center lg:justify-start gap-2 mt-2"
                >
                  <BsTelephoneFill className="text-secondary-200" />
                  <span className="text-neutral-150">
                    <Trans>+55 0800 591 1478</Trans>
                  </span>
                </a>
              </div>

              <ul className="flex items-center gap-2">
                <li className="border-[1px] border-neutral-150 rounded-full p-3">
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="border-[1px] border-neutral-150 rounded-full p-3">
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="border-[1px] border-neutral-150 rounded-full p-3">
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col lg:flex-row gap-10">
              <div>
                <h2 className="mb-3 font-bold">
                  <Trans>Institucional</Trans>
                </h2>
                <ul className="space-y-1">
                  <li>
                    <Link href="/sobre-nos" legacyBehavior>
                      <a>
                        <Trans>Sobre nós</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cases" legacyBehavior>
                      <a>
                        <Trans>Cases</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/unidades" legacyBehavior>
                      <a>
                        <Trans>Unidades</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trabalhe-conosco" legacyBehavior>
                      <a>
                        <Trans>Trabalhe conosco</Trans>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 font-bold">
                  <Trans>Soluções</Trans>
                </h2>
                <ul className="space-y-1">
                  <li>
                    <Link href="/solucoes/guarda-documental" legacyBehavior>
                      <a>
                        <Trans>Guarda de documentos e mídias</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solucoes/tratamento-documental" legacyBehavior>
                      <a>
                        <Trans>Tratamento Documental</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solucoes/transformacao-digital" legacyBehavior>
                      <a>
                        <Trans>Transformação Digital</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solucoes/lgpd" legacyBehavior>
                      <a>LGPD</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 font-bold">
                  <Trans>Conteúdo</Trans>
                </h2>
                <ul className="space-y-1">
                  <li>
                    <Link href="/conteudo/blog" legacyBehavior>
                      <a>
                        <Trans>Blog</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/conteudo/podcasts" legacyBehavior>
                      <a>
                        <Trans>Podcast</Trans>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/conteudo/webnario" legacyBehavior>
                      <a>
                        <Trans>Webnário</Trans>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-neutral-150 pt-7">
            <p className="text-neutral-150 text-sm">
              © 2022 SOS Docs. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
