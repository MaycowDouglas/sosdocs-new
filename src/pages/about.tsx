import 'swiper/css'

import { Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { MediaIcon, RocketIcon } from '~/components/ui/atoms/Icons'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import useCertificates from '~/hooks/useCertificates'
import useClients from '~/hooks/useClients'
import useUnits from '~/hooks/useUnits'
import BgHero from '~/public/images/backgrounds/bg-hero-about.png'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
import CoupleLookingTablet from '~/public/images/couple-looking-tablet.jpg'
import ManSmilingLookingTablet from '~/public/images/man-smiling-looking-tablet.jpg'
import Team from '~/public/images/team.png'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const AboutPage: NextPage = () => {
  const certificates = useCertificates()
  const clients = useClients('private')
  const units = useUnits()

  return (
    <TemplateDefault title="" description="">
      <section className="relative bg-primary-300">
        <Container className="pt-28 pb-20 md:pt-32 xl:pt-36 xl:pb-28">
          <Content className="pt-14">
            <div className="text-center space-y-3 md:w-2/3 md:mx-auto lg:w-3/4">
              <p className="text-secondary-300 uppercase">Sobre nós</p>
              <Heading className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                Com mais de 20 anos de experiência e tecnologia
              </Heading>
              <Text color="lightMuted" className="lg:text-xl">
                Acelerar o processo de transformação de pessoas e informações é o nosso propósito.
              </Text>
            </div>

            <div className="mt-14 xl:pt-20">
              <div className="text-center lg:text-left lg:w-2/3 xl:w-5/12">
                <div className="space-y-2 xl:space-y-4 md:w-2/3 md:mx-auto lg:w-full">
                  <Line />
                  <Heading tag="h1" className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                    <Trans>Estamos presentes em todo o Brasil e no Paraguai</Trans>
                  </Heading>
                  <Text>
                    <Trans>
                      Estamos preparados para atender em todo o Brasil. Temos unidades para Guarda e
                      Tratamento documental nos seguintes estados: Rio de Janeiro; São Paulo;
                      Espírito Santo; Bahia e no Distrito Federal.
                    </Trans>
                  </Text>
                </div>
                <div className="pt-10 flex flex-col md:grid md:grid-cols-2 gap-5">
                  <div className="p-4 md:p-8 flex flex-col gap-4 items-center lg:items-start border border-neutral-250 rounded-lg">
                    <div className="w-16 h-14 p-3 rounded-xl text-secondary-300 bg-[linear-gradient(90deg,_rgba(254,_203,_54,_0.32)_0%,_rgba(254,_203,_54,_0.0736)_100%)]">
                      <RocketIcon />
                    </div>
                    <div className="space-y-2">
                      <Heading>
                        <Trans>+ de 100 clientes</Trans>
                      </Heading>
                      <Text color="lightMuted">
                        <Trans>lideres de segmento</Trans>
                      </Text>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 flex flex-col gap-4 items-center lg:items-start border border-neutral-250 rounded-lg">
                    <div className="w-16 h-14 p-3 rounded-xl text-secondary-300 bg-[linear-gradient(90deg,_rgba(254,_203,_54,_0.32)_0%,_rgba(254,_203,_54,_0.0736)_100%)]">
                      <RocketIcon />
                    </div>
                    <div className="space-y-2">
                      <Heading>
                        <Trans>Uma das melhores empresas</Trans>
                      </Heading>
                      <Text color="lightMuted">
                        <Trans>neste segmento para se trabalhar</Trans>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <Content>
            <div className="flex flex-col items-center gap-10 text-center lg:flex-row-reverse lg:text-left xl:gap-20">
              <div className="md:w-2/3 lg:w-1/2">
                <Image src={ManSmilingLookingTablet} alt="" className="rounded-xl" />
              </div>
              <div className="lg:w-1/2">
                <div className="mb-7">
                  <Line />
                  <Heading dark className="text-4xl lg:text-5xl xl:text-6xl">
                    <Trans>Quem somos</Trans>
                  </Heading>
                </div>
                <div className="space-y-4">
                  <Text color="dark">
                    <Trans>
                      A SOS Docs foi fundada em 2011 com o propósito de oferecer serviços
                      relacionados à Tecnologia e Gestão da Informação.
                    </Trans>
                  </Text>
                  <Text color="dark">
                    <Trans>
                      Com o passar dos anos, buscando realizar serviços de qualidade e eficiência, a
                      SOS Docs vem aumentando sua base de clientes de maneira sólida, constante e em
                      sintonia com as atualizações de produtos e tecnologia. Conta atualmente com
                      mais de 500 colaboradores e operação em todo Brasil e no Paraguai, além da sua
                      capacidade aprovada por mais de 100 clientes.
                    </Trans>
                  </Text>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20 mt-10 xl:mt-20">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <span className="inline-flex w-1/4 lg:w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <Text color="darkMuted" className="w-3/4 lg:w-full">
                  <Trans>Proximidade com nossos clientes</Trans>
                </Text>
              </div>
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <span className="inline-flex w-1/4 lg:w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <Text color="darkMuted" className="w-3/4 lg:w-full">
                  <Trans>Responsabilidade com seus dados</Trans>
                </Text>
              </div>
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <span className="inline-flex w-1/4 lg:w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <Text color="darkMuted" className="w-3/4 lg:w-full">
                  <Trans>Uma única plataforma para todos os serviços</Trans>
                </Text>
              </div>
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <span className="inline-flex w-1/4 lg:w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <Text color="darkMuted" className="w-3/4 lg:w-full">
                  <Trans>Tecnologia e estrutura</Trans>
                </Text>
              </div>
            </div>
          </Content>
        </Container>
      </section>

      <section>
        <Container className="pb-20">
          <Content>
            <div>
              <div className="space-y-3 mb-7 md:mb-16 text-center">
                <span className="inline-flex w-16 h-1 rounded-full bg-gradient-to-l from-secondary-100 to-secondary-500"></span>
                <Heading dark className="text-4xl md:text-6xl">
                  <Trans>Conheça nossa história</Trans>
                </Heading>
                <Text color="darkMuted" className="md:text-lg">
                  <Trans>
                    Conheça os passos dados pela SOS Docs desde seu surgimento até hoje.
                  </Trans>
                </Text>
              </div>

              <div className="space-y-10 md:-space-y-14">
                <div className="flex justify-center md:justify-start">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      2011
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Fundamos a SOS Docs
                    </Heading>
                    <Text color="darkMuted">
                      Com o propósito de oferecer serviços em Digitalização.
                    </Text>
                  </article>
                </div>
                <div className="flex justify-center md:justify-end">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      2012
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Tratamento arquivístico
                    </Heading>
                    <Text color="darkMuted">
                      Entendemos que só a digitalização de documentos não era suficiente para
                      atender ao mercado com a qualidade que esperamos.
                    </Text>
                  </article>
                </div>
                <div className="flex justify-center md:justify-start">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      2013
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Guarda de documentos e mídias
                    </Heading>
                    <Text color="darkMuted">
                      Passamos a oferecer guarda de documentação física e em mídias de dados com
                      segurança e praticidade.
                    </Text>
                  </article>
                </div>
                <div className="flex justify-center md:justify-end">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      2014
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Implantação ECM
                    </Heading>
                    <Text color="darkMuted">
                      A necesidade de integrar mais tecnologia aos nossos serviços nos fez utilizar
                      e oferecer ECM.
                    </Text>
                  </article>
                </div>
                <div className="flex justify-center md:justify-start">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      2016
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Gestão de processos docs (BPM)
                    </Heading>
                    <Text color="darkMuted">
                      Percebemos que os processos internos dos clientes eram gargalos e focamos em
                      resolver.
                    </Text>
                  </article>
                </div>
                <div className="flex justify-center md:justify-end">
                  <article className="rounded-3xl shadow-lg p-8 max-w-xs xl:max-w-md">
                    <span className="mb-3 inline-flex text-7xl text-primary-200 font-semibold uppercase">
                      Hoje
                    </span>
                    <Heading dark className="text-lg leading-6 mb-2">
                      Transformação digital
                    </Heading>
                    <Text color="darkMuted">
                      Integramos novas tecnologias como OCR, assinatura digital, RPA, Inteligência
                      Artificial.
                    </Text>
                  </article>
                </div>
              </div>
            </div>
          </Content>
        </Container>
      </section>

      <section className="relative">
        <Image src={BgWeb} alt="" fill className="object-cover" />
        <Container className="py-20">
          <Content className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left xl:items-center xl:gap-20">
            <div className="md:w-2/3 lg:w-1/2">
              <Image src={CoupleLookingTablet} alt="" className="rounded-xl" />
            </div>
            <div className="space-y-10 md:w-2/3">
              <div className="space-y-4 lg:flex lg:items-start lg:gap-5">
                <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <div className="lg:w-fit space-y-2">
                  <Heading className="text-3xl">
                    <Trans>Missão</Trans>
                  </Heading>
                  <Text color="lightMuted">
                    <Trans>
                      Evoluir diariamente de acordo com as tecnologias de mercado, proporcionando
                      aos nossos clientes satisfação na implantação de todo processo da gestão
                      documental e guarda de documentos.
                    </Trans>
                  </Text>
                </div>
              </div>
              <div className="space-y-4 lg:flex lg:items-start lg:gap-5">
                <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <div className="lg:w-fit space-y-2">
                  <Heading className="text-3xl">
                    <Trans>Visão</Trans>
                  </Heading>
                  <Text color="lightMuted">
                    <Trans>
                      Tornar-se uma empresa referência de mercado na área de Tecnologia, Gestão e
                      Guarda de documentos.
                    </Trans>
                  </Text>
                </div>
              </div>
              <div className="space-y-4 lg:flex lg:items-start lg:gap-5">
                <span className="inline-flex w-20 px-5 py-4 rounded-2xl bg-[#2981FE1A] ">
                  <MediaIcon />
                </span>
                <div className="lg:w-fit space-y-2">
                  <Heading className="text-3xl">
                    <Trans>Valores</Trans>
                  </Heading>
                  <ul className="text-slate-100 lg:list-disc pl-5">
                    <li>
                      <Trans>Pessoas em primeiro lugar;</Trans>
                    </li>
                    <li>
                      <Trans>A transformação começa por nós;</Trans>
                    </li>
                    <li>
                      <Trans>Proximidade com o cliente e foco em suas necessidades;</Trans>
                    </li>
                    <li>
                      <Trans>Responsabilidade com os dados;</Trans>
                    </li>
                    <li>
                      <Trans>Postura de dono.</Trans>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Content>
        </Container>
      </section>

      <section className="pt-14 pb-28">
        <Container>
          <Content>
            <Heading dark className="text-4xl text-center mb-10">
              <Trans>Conheça nossas certificações:</Trans>
            </Heading>

            {certificates.data && (
              <Swiper spaceBetween={100} slidesPerView="auto">
                {certificates.data.map((certificate, index) => (
                  <SwiperSlide key={index} className="max-w-[125px] self-center">
                    <div className="w-full h-20">
                      <Image
                        fill
                        className="object-contain object-center"
                        alt={certificate.title}
                        src={certificate.featuredImage.node.sourceUrl}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Content>
        </Container>
      </section>
      <section className="bg-neutral-200">
        <Container className="py-20">
          <Content className="flex flex-col items-center gap-10 text-center lg:flex-row-reverse lg:items-start lg:text-left xl:items-center xl:gap-20">
            <div className="md:w-2/3 lg:w-1/2">
              <Image src={Team} alt="" className="rounded-xl" />
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-2 mb-7">
                <Line />
                <Heading dark className="text-4xl lg:text-5xl xl:text-6xl">
                  <Trans>Somos únicos</Trans>
                </Heading>
                <Text color="dark" className="text-xl">
                  <Trans>
                    Nossos talentos individuais se complementam para criar algo muito maior.
                  </Trans>
                </Text>
                <Text color="dark" className="text-xl font-semibold">
                  <Trans>Venha criar o futuro com a gente!</Trans>
                </Text>
              </div>
              <Link href="" as="" legacyBehavior>
                <a className="py-3 px-5 inline-flex rounded-full bg-gradient-to-r from-secondary-100 to-secondary-300 font-semibold">
                  <Trans>Veja nossas vagas abertas</Trans>
                </a>
              </Link>
            </div>
          </Content>
        </Container>
      </section>
      <section>
        <Container className="py-20">
          <Content>
            <div className="space-y-2 mb-7 text-center md:text-left">
              <p className="text-xl text-primary-200 -mb-2">
                <Trans>Quem confia</Trans>
              </p>
              <Heading dark className="text-4xl md:text-6xl">
                <Trans>Nossos clientes</Trans>
              </Heading>
            </div>

            {clients.data && (
              <div className="grid md:grid-cols-4">
                {clients.data.map((client, index) => (
                  <div className="relative border border-neutral-350 p-14" key={index}>
                    <div className="relative h-20">
                      <Image
                        fill
                        className="object-contain object-center"
                        src={client.brand.node.sourceUrl}
                        alt={client.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Content>
        </Container>
      </section>
      <section>
        <Container className="py-20">
          <Content>
            <div className="space-y-2 mb-7 md:mb-10">
              <Line />
              <Heading dark className="text-3xl md:text-6xl">
                <Trans>Conheça nossas unidades</Trans>
              </Heading>
            </div>

            {units.data && (
              <div className="grid md:grid-cols-3 gap-20 md:px-20">
                {units.data.map((unit, index) => (
                  <article key={index}>
                    <div className="relative w-full h-96">
                      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                        <Image
                          fill
                          className="object-cover object-center"
                          alt={unit.title}
                          src={unit.featuredImage.node.sourceUrl}
                        />
                      </div>
                      <Link
                        href={`/units/${unit.title
                          .normalize('NFD')
                          .replaceAll(' ', '-')
                          .replace(/[\u0300-\u036f]/g, '')
                          .toLocaleLowerCase()}`}
                        className="z-0 absolute -bottom-6 left-1/2 -translate-x-1/2 p-5 rounded-full bg-white hover:bg-secondary-200 transition-all"
                      >
                        <FaPlus />
                      </Link>
                    </div>
                    <div className="text-center mt-10">
                      <Heading dark className="text-3xl">
                        {unit.state}
                      </Heading>
                      <Text color="darkMuted" className="text-xl">
                        {unit.city}
                      </Text>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Content>
        </Container>
      </section>
    </TemplateDefault>
  )
}

export default AboutPage
