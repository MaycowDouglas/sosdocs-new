import { Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { TemplateDefault } from '~/components/templates/Default'
import {
  BoardIcon,
  CogTechIcon,
  DocScanIcon,
  MediaIcon,
  RocketIcon,
} from '~/components/ui/atoms/Icons'
import { Line } from '~/components/ui/atoms/Line'
import useClients from '~/hooks/useClients'
import BgHero from '~/public/images/backgrounds/bg-hero.jpg'
import BgStorage from '~/public/images/backgrounds/bg-storage.jpg'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
import { classNames } from '~/utils'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const HomePage: NextPage = () => {
  return (
    <TemplateDefault title="" description="">
      <main className="relative">
        <Image src={BgHero} alt="" fill className="object-cover" priority quality={100} />
        <div className="relative z-10 container pt-28 xl:pt-44 pb-20 text-white text-center md:text-left">
          <div className="space-y-16 lg:w-4/5 px-5 xl:px-16">
            <div className="space-y-2">
              <Line />
              <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold md:w-3/4">
                <Trans>
                  Estrutura, sistemas e equipes altamente capacitadas para atender a sua empresa!
                </Trans>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              <div className="relative rounded-xl overflow-hidden bg-neutral-210">
                <div className="p-7 pb-8">
                  <h2 className="text-xl font-semibold mb-2">
                    <Trans>Transformação digital</Trans>
                  </h2>
                  <p className="mb-10">
                    <Trans>Desenvolvemos soluções customizadas para o seu negocio.</Trans>
                  </p>
                </div>
                <Link href="" legacyBehavior>
                  <a
                    className={classNames(
                      'absolute bottom-0 left-0 right-0 flex items-center justify-between px-7 py-3',
                      'text-sm font-semibold bg-gradient-to-l from-secondary-400 to-secondary-500'
                    )}
                  >
                    <Trans>Quer o para a minha empresa</Trans>{' '}
                    <BsArrowRight className="text-xl text-primary-300 stroke-2" />
                  </a>
                </Link>
              </div>
              <div className="relative rounded-xl overflow-hidden bg-neutral-210">
                <div className="p-7 pb-8">
                  <h2 className="text-xl mb-2">
                    <Trans>
                      Para <strong className="font-semibold">Governo</strong>
                    </Trans>
                  </h2>
                  <p className="mb-10">
                    <Trans>Gestão pública eficiente, transparente e digital!</Trans>
                  </p>
                </div>
                <Link href="" legacyBehavior>
                  <a
                    className={classNames(
                      'absolute bottom-0 left-0 right-0 flex items-center justify-between px-7 py-3',
                      'text-sm font-semibold bg-gradient-to-l from-secondary-400 to-secondary-500'
                    )}
                  >
                    <Trans>Conhecer soluções</Trans>{' '}
                    <BsArrowRight className="text-xl text-primary-300 stroke-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-primary-300 text-white pt-14 pb-28 text-center md:text-left">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-20 xl:gap-16 items-stretch px-5 xl:px-16">
            <div className="relative lg:col-span-6 md:w-4/5 mx-auto md:mx-0 xl:w-full">
              <div className="space-y-2">
                <Line />
                <h2 className="text-lg md:text-3xl font-semibold">
                  <Trans>
                    Acelerar o processo de transformação de pessoas e informações é o nosso
                    propósito
                  </Trans>
                </h2>
              </div>
              <div className="lg:absolute bottom-0 mt-5 flex items-center gap-5">
                <div className="hidden lg:block w-16 h-14 p-2 rounded-xl bg-gradient-to-r from-primary-400 to-primary-300 text-secondary-300">
                  <RocketIcon />
                </div>
                <p className="w-fit md:text-lg md:leading-6 lg:text-base">
                  <Trans>
                    Conheça abaixo os serviços que oferecemos, nossos produtos e casos de sucesso.
                  </Trans>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-5 mb-10 text-neutral-250">
                <p>
                  <Trans>
                    Somos uma empresa que apoia nossos clientes em seus negócios por meio de
                    soluções inovadoras e tecnológicas voltadas para a gestão da informação.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    Com soluções eficientes, auxiliamos os nossos clientes a reduzir custos de
                    armazenagem de documentos, reduzir riscos, cumprir os prazos de legislações
                    vigentes e utilizar as suas informações de forma rápida e segura, garantindo a
                    sua disponibilidade.
                  </Trans>
                </p>
              </div>

              <Link href="/sobre-nos" legacyBehavior>
                <a className="inline-flex items-center gap-2 px-9 py-3 font-medium border-2 border-secondary-300 rounded-full">
                  <Trans>Conheça a SOS Docs</Trans>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-14 pb-28">
        <div className="container">
          <div className="xl:px-16 text-center md:text-left">
            <div
              className={classNames(
                'gap-4 mb-16 flex flex-col items-end',
                'md:flex-row md:justify-between'
              )}
            >
              <div className="space-y-2 lg:w-5/12 xl:w-4/12">
                <Line />
                <h2 className="text-3xl lg:text-4xl text-primary-300 font-semibold">
                  <Trans>A melhor solução para o seu negócio</Trans>
                </h2>
              </div>
              <div className="lg:w-5/12 xl:w-4/12 lg:text-lg md:text-right text-neutral-350">
                <p>
                  <Trans>
                    Implemente processos tecnológicos à gestão da informação no seu negócio.
                  </Trans>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <Link href="" legacyBehavior>
                <a className="relative space-y-5 px-14 pb-24 pt-14 border-4 rounded-2xl border-primary-400 hover:border-yellow-500">
                  <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                    <MediaIcon />
                  </span>

                  <h3 className="text-2xl text-blue-900 font-semibold">
                    <Trans>Guarda de documentos e mídias</Trans>
                  </h3>

                  <p className="text-slate-500">
                    <Trans>
                      Estrutura, sistemas e equipes altamente capacitadas para realizar a guarda de
                      documentos da sua empresa.
                    </Trans>
                  </p>

                  <span className="absolute bottom-8 right-8 p-4 inline-flex rounded-full bg-gray-200">
                    <BsArrowRight strokeWidth={0.5} className="text-blue-900 text-2xl" />
                  </span>
                </a>
              </Link>

              <Link href="" legacyBehavior>
                <a className="relative space-y-5 px-14 pb-24 pt-14 border-4 rounded-2xl border-primary-400 hover:border-yellow-500">
                  <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                    <DocScanIcon />
                  </span>

                  <h3 className="text-2xl text-blue-900 font-semibold">Transformação digital</h3>

                  <p className="text-slate-500">
                    <Trans>
                      Mais organização e facilidade para você e sua empresa. Armazene seus arquivos
                      físicos ou digitais em um local seguro de maneira organizada.
                    </Trans>
                  </p>

                  <span className="absolute bottom-8 right-8 p-4 inline-flex rounded-full bg-gray-200">
                    <BsArrowRight strokeWidth={0.5} className="text-blue-900 text-2xl" />
                  </span>
                </a>
              </Link>

              <Link href="" legacyBehavior>
                <a className="relative space-y-5 px-14 pb-24 pt-14 border-4 rounded-2xl border-primary-400 hover:border-yellow-500">
                  <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                    <CogTechIcon />
                  </span>

                  <h3 className="text-2xl text-blue-900 font-semibold">
                    <Trans>Transformação digital</Trans>
                  </h3>

                  <p className="text-slate-500">
                    <Trans>
                      Desenvolvemos soluções customizadas para o seu negocio aplicando a metodo-
                      logia de ondas.
                    </Trans>
                  </p>

                  <span className="absolute bottom-8 right-8 p-4 inline-flex rounded-full bg-gray-200">
                    <BsArrowRight strokeWidth={0.5} className="text-blue-900 text-2xl" />
                  </span>
                </a>
              </Link>

              <Link href="" legacyBehavior>
                <a className="relative space-y-5 px-14 pb-24 pt-14 border-4 rounded-2xl border-primary-400 hover:border-yellow-500">
                  <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                    <BoardIcon />
                  </span>

                  <h3 className="text-2xl text-blue-900 font-semibold">LGPD</h3>

                  <p className="text-slate-500">
                    <Trans>
                      Mais organização e facilidade para você e sua empresa. Armazene seus arquivos
                      físicos ou digitais em um local seguro de maneira organizada.
                    </Trans>
                  </p>

                  <span className="absolute bottom-8 right-8 p-4 inline-flex rounded-full bg-gray-200">
                    <BsArrowRight strokeWidth={0.5} className="text-blue-900 text-2xl" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-14 pb-28">
        <Image src={BgStorage} alt="" fill className="object-cover" />
        <div className="container relative z-10">
          <div className="xl:px-16 space-y-4 text-center">
            <Line />
            <h2 className="xl:w-1/2 text-3xl xl:text-4xl text-white font-semibold">
              <Trans>Empresas líderes no mercado confiam na SOS Docs</Trans>
            </h2>
          </div>
        </div>
      </section>
      <section className="relative pt-14 pb-28">
        <div className="container">
          <div className="px-16">
            <div className="flex items-end justify-between">
              <div className="space-y-4">
                <Line />
                <h2 className="text-4xl text-primary-400 font-semibold">
                  <Trans>Últimas publicações</Trans>
                </h2>
              </div>
              <Link href="" legacyBehavior>
                <a className="inline-flex items-center gap-2">
                  <Trans>Ver mais artigos</Trans> <FaAngleDoubleRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-14 pb-28">
        <Image src={BgWeb} alt="" fill className="object-cover" quality={100} />
        <div className="container relative z-10">
          <div className="w-3/4 mx-auto space-y-8 text-center">
            <h2 className="text-white font-semibold text-5xl">
              <Trans>Saiba como a SOS Docs pode auxiliar a gestão documental do seu negócio</Trans>
            </h2>
            <p className="text-slate-400 text-lg">
              <Trans>
                Para atingir todos os seus objetivos de negócio e crescer digitalmente com
                velocidade, você precisa do melhor em criatividade, performance e tecnologia.
              </Trans>
            </p>
            <Link href="sobre-nos" legacyBehavior>
              <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-400 text-white">
                <Trans>Conheça a SOS Docs</Trans>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </TemplateDefault>
  )
}

export default HomePage
