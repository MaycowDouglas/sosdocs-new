import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import { Cta } from '~/components/ui/organisms/Cta'
import { Lgpd } from '~/components/ui/organisms/Lgpd'
import BgTechFlow from '~/public/images/backgrounds/bg-tech-flow.jpg'
import BgWaves from '~/public/images/backgrounds/bg-waves.jpg'
import BrandDocZ from '~/public/images/brands/docz.png'
import Process from '~/public/images/process.png'
import Shield from '~/public/images/shield.png'
import Tablet from '~/public/images/tablet.png'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const DoczPage: NextPage = () => {
  return (
    <TemplateDefault title="" description="">
      <main className="relative pt-44 pb-20 xl:pb-80">
        <Image src={BgTechFlow} alt="" fill className="object-cover" />
        <Container>
          <Content className="flex flex-col items-center text-center">
            <div className="w-1/2 md:w-48">
              <Image src={BrandDocZ} alt="" className="w-full mx-auto" />
            </div>
            <div className="mt-10 xl:mt-20 lg:w-2/3 space-y-4 xl:space-y-6">
              <Heading
                tag="h1"
                className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-white"
              >
                <Trans>Um sistema feito sob medida para você!</Trans>
              </Heading>
              <Text color="lightMuted" className="text-lg md:text-xl">
                <Trans>
                  Planeje-se para as mudanças futuras com o DocZ, seus documentos seguros e você
                  sempre a frente.
                </Trans>
              </Text>
            </div>
          </Content>
          <div className="hidden xl:block absolute w-2/3 left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2">
            <Image src={Tablet} alt="" className="w-full" />
          </div>
        </Container>
      </main>

      <section>
        <Container className="py-20 xl:pt-56">
          <Content>
            <div className="text-center space-y-2 lg:space-y-2 mx-auto md:w-4/5">
              <p className="xl:text-xl text-primary-200 uppercase">
                <Trans>Plataforma online</Trans>
              </p>
              <Heading dark className="text-xl md:text-3xl lg:text-4xl xl:text-6xl">
                <Trans>
                  Mais evolução e agilidade no armazenamento e consulta aos seus documentos.
                </Trans>
              </Heading>
              <Text color="darkMuted" className="lg:text-lg">
                <Trans>
                  Nosso sistema é personalizado para você, navegue com segurança e tenha todas as
                  informações sobre seus documentos com facilidade.
                </Trans>
              </Text>
            </div>
          </Content>
        </Container>
      </section>
      <section className="relative">
        <Image src={BgWaves} alt="" fill className="object-cover object-bottom" />
        <Container className="py-20">
          <Content>
            <div className="md:w-4/5 mx-auto space-y-2 text-center">
              <Line />
              <Heading className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                <Trans>Plataforma única para Guarda e Gestão de documentos e Mídias</Trans>
              </Heading>
            </div>
            <div className="relative mt-10 md:mt-16">
              <Image src={Process} alt="" />
            </div>
          </Content>
        </Container>
      </section>
      <section className="relative">
        <Container className="py-20">
          <Content className="text-center lg:text-left">
            <div className="md:w-4/5 lg:w-3/5 md:mx-auto lg:mx-0 space-y-2">
              <Line />
              <h2 className="text-xl md:text-4xl xl:text-5xl text-primary-300 font-semibold">
                <Trans>Mais de 15 funcionalidades para o seu negócio</Trans>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 items-stretch mt-10 xl:mt-20 gap-8 xl:gap-14">
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Painel de solicitações</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Acompanhe em tempo real seus documentos, faça solicitações, confira status e/ou
                    prioridades
                  </Trans>
                </Text>
              </div>
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Configuração do projeto</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Faça projetos personalizados para cada cliente, configurando tudo do seu jeito.
                    Mil e uma funções é pouco para o DocZ.
                  </Trans>
                </Text>
              </div>
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Ordem de Serviço Digital</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Dê adeus às impressões, com o atendimento via Ordem de Serviço Digital você
                    resolve tudo o que precisa de forma digital.
                  </Trans>
                </Text>
              </div>
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Acompanhamento e gerenciamento das solicitações</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Acompanhe o andamento e gerencie suas solicitações na palma da sua mão, com a
                    facilidade que você merece.
                  </Trans>
                </Text>
              </div>
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Relatórios</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Gere relatórios, tenha o controle do seu acervo e de objetos dentro do DocZ.
                  </Trans>
                </Text>
              </div>
              <div className="flex flex-col justify-center shadow-lg rounded-xl p-10 xl:p-14 space-y-4">
                <Heading tag="h3" dark className="text-lg xl:text-3xl">
                  <Trans>Transporte</Trans>
                </Heading>
                <Text color="darkMuted" className="xl:text-lg">
                  <Trans>
                    Você está no controle, tenha o rastreamento em tempo real, desde o momento em
                    que a caixa é coletada até o momento que ela é descarregada.
                  </Trans>
                </Text>
              </div>
            </div>
          </Content>
        </Container>
      </section>
      <section className="relative bg-neutral-200">
        <Container className="py-20">
          <Content className="text-center space-y-4 lg:w-4/5 lg:mx-auto">
            <Heading dark className="text-2xl md:text-4xl xl:text-5xl">
              <Trans>Quer conhecer mais sobre o DocZ?</Trans>
            </Heading>
            <Text color="dark" className="text-xl xl:text-3xl">
              <Trans>
                Entre em contato com o setor de vendas para obter uma demonstração mais detalhada
              </Trans>
            </Text>
            <Link href="" as="" legacyBehavior>
              <a className="py-3 px-5 inline-flex rounded-full bg-gradient-to-r from-secondary-100 to-secondary-300 font-semibold">
                <Trans>Solicitar demonstração</Trans>
              </a>
            </Link>
          </Content>
        </Container>
      </section>
      <Lgpd />
      {/* <section className="pt-14 pb-28">
        <div className="container">
          <div className="px-16">
            <h2 className="text-3xl text-primary-300 font-semibold text-center">
              <Trans>Conheça algumas das empresas que usam nossas soluções:</Trans>
            </h2>
          </div>
        </div>
      </section> */}
      <Cta
        href=""
        title={t`Saiba como a SOS Docs pode auxiliar a gestão documental do seu negócio`}
        text={t`Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.`}
        call={t`Conheça a SOS Docs`}
      />
    </TemplateDefault>
  )
}

export default DoczPage
