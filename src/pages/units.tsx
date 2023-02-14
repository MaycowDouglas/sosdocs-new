import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import { Cta } from '~/components/ui/organisms/Cta'
import useUnits from '~/hooks/useUnits'
import BgPallets from '~/public/images/backgrounds/bg-pallets.jpg'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
import Infra from '~/public/images/infra.png'
import Midias from '~/public/images/midias.png'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const UnitsPage: NextPage = () => {
  const units = useUnits()
  return (
    <TemplateDefault title="" description="">
      <main className="relative">
        <Image src={BgPallets} alt="" fill className="object-cover" priority quality={100} />
        <Container className="pt-28 pb-20 lg:pt-44 lg:pb-28">
          <Content className="text-center lg:text-left">
            <div className="space-y-2">
              <Line />
              <Heading
                tag="h1"
                className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold"
              >
                <Trans>Conheça nossas unidades</Trans>
              </Heading>
            </div>
          </Content>
        </Container>
      </main>
      <section>
        <Container className="py-20">
          <Content className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left xl:items-center xl:gap-20">
            <div className="md:w-2/3 lg:w-1/2">
              <Image src={Infra} alt="" className="rounded-xl" />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-7">
                <Line />
                <Heading dark className="mt-2 mb-5 text-4xl lg:text-5xl xl:text-6xl">
                  <Trans>Infraestrutura</Trans>
                </Heading>
                <Text color="dark" className="text-xl">
                  <Trans>
                    Nossas instalações estão localizadas nas principais rotas de distribuição,
                    contando com modernas infraestruturas:
                  </Trans>
                </Text>
              </div>
              <ul className="xl:list-disc xl:pl-5 mt-6">
                <li>
                  <Trans>Certificações de acordo com a legislação vigente;</Trans>
                </li>
                <li>
                  <Trans>Estantes em aço;</Trans>
                </li>
                <li>
                  <Trans>Controle de pragas;</Trans>
                </li>
                <li>
                  <Trans>Bombeiro Civil;</Trans>
                </li>
                <li>
                  <Trans>Vigilância especializada 24 horas com monitoramento;</Trans>
                </li>
                <li>
                  <Trans>Detector de intrusos com alarmes;</Trans>
                </li>
                <li>
                  <Trans>Sistema de para-raios;</Trans>
                </li>
                <li>
                  <Trans>CFTV – Câmeras de circuito interno;</Trans>
                </li>
                <li>
                  <Trans>Monitoramento de veículos e motoristas;</Trans>
                </li>
                <li>
                  <Trans>Sistema de detecção precoce de incêndio.</Trans>
                </li>
              </ul>
            </div>
          </Content>
        </Container>
      </section>
      <section id="unidades">
        <Container className="py-20">
          <Content>
            <div className="space-y-2 mb-7 md:mb-10">
              <Line />
              <Heading dark className="text-3xl md:text-6xl">
                <Trans>Conheça nossas unidades</Trans>
              </Heading>
            </div>

            {units.data && (
              <div className="grid md:grid-cols-3 gap-20 md:px-20 mt-20">
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
                        <FaMapMarkerAlt size={24} />
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
      {/* <section className="relative pt-14 pb-28">
        <div className="container">
          <div className="px-16">
            <h2 className="flex items-end leading-none gap-2 text-4xl font-semibold text-primary-400">
              <FiMapPin className="text-5xl text-primary-200" /> <Trans>Unidades</Trans>
            </h2>
          </div>
        </div>
      </section> */}
      <section>
        <Container className="py-20">
          <Content className="flex flex-col items-center gap-10 text-center lg:flex-row-reverse lg:items-start lg:text-left xl:items-center xl:gap-20">
            <div className="md:w-2/3 lg:w-1/2">
              <Image src={Midias} alt="" className="rounded-xl" />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-7">
                <Line />
                <Heading dark className="mt-2 mb-5 text-4xl lg:text-5xl xl:text-6xl">
                  <Trans>Salas de mídias</Trans>
                </Heading>
                <Text color="dark" className="text-xl">
                  <Trans>
                    Nossas instalações estão localizadas nas principais rotas de distribuição,
                    contando com modernas infraestruturas:
                  </Trans>
                </Text>
              </div>
              <ul className="xl:list-disc xl:pl-5 mt-6">
                <li>
                  <Trans>Temperatura e umidade controladas em conformidade com a ABNT 11515;</Trans>
                </li>
                <li>
                  <Trans>Tecnologia para detecção antecipada de fumaça;</Trans>
                </li>
                <li>
                  <Trans>
                    Sistema de combate automático a incêndio através de gás (agente limpo);
                  </Trans>
                </li>
                <li>
                  <Trans>Paredes resistentes a 1000°C;</Trans>
                </li>
                <li>
                  <Trans>Maletas anti-impacto, térmicas e resistentes ao fogo;</Trans>
                </li>
                <li>
                  <Trans>Acesso restrito a área de armazenamento por biometria;</Trans>
                </li>
                <li>
                  <Trans>Contingência por geradores e nobreaks.</Trans>
                </li>
              </ul>
            </div>
          </Content>
        </Container>
      </section>
      <Cta
        href=""
        title={t`Saiba como a SOS Docs pode auxiliar a gestão documental do seu negócio`}
        text={t`Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.`}
        call={t`Conheça a SOS Docs`}
      />
    </TemplateDefault>
  )
}

export default UnitsPage
