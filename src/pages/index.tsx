import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import {
  BoardIcon,
  CogTechIcon,
  DocScanIcon,
  MediaIcon,
  RocketIcon,
} from '~/components/ui/atoms/Icons'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import { SolutionCard } from '~/components/ui/molecules/SolutionCard'
import { Cta } from '~/components/ui/organisms/Cta'
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

const IndexPage: NextPage = () => {
  const publicClients = useClients('public')

  console.log(publicClients)

  return (
    <TemplateDefault title="" description="">
      <main className="relative">
        <Image src={BgHero} alt="" fill className="object-cover" priority quality={100} />
        <Container>
          <Content className="lg:w-9/12 xl:w-8/12 pt-24 pb-20 md:pt-32 xl:pt-44 xl:pb-28">
            <div className="mb-10 space-y-2 text-center md:text-left md:w-9/12 xl:w-10/12">
              <Line />
              <Heading tag="h1" className="text-xl md:text-3xl xl:text-4xl">
                <Trans>
                  Estrutura, sistemas e equipes altamente capacitadas para atender a sua empresa!
                </Trans>
              </Heading>
            </div>

            <div className="gap-10 grid md:grid-cols-2 items-stretch">
              <div className="relative rounded-xl bg-neutral-210 overflow-hidden">
                <div className="p-7 pb-8">
                  <Heading className="mb-2 text-xl">
                    <Trans>Transformação digital</Trans>
                  </Heading>
                  <Text className="mb-10">
                    <Trans>Desenvolvemos soluções customizadas para o seu negocio.</Trans>
                  </Text>
                </div>
                <Link href="" legacyBehavior>
                  <a
                    className={classNames(
                      'absolute bottom-0 left-0 right-0 px-7 py-3 flex items-center justify-between',
                      'bg-secondary-300 text-white text-sm font-semibold '
                    )}
                  >
                    <Trans>Quer o para a minha empresa</Trans>
                    <BsArrowRight className="text-xl text-primary-300 stroke-2" />
                  </a>
                </Link>
              </div>
              <div className="relative rounded-xl bg-neutral-210 overflow-hidden">
                <div className="p-7 pb-8">
                  <Heading className="mb-2 text-xl">
                    <Trans>Transformação digital</Trans>
                  </Heading>
                  <Text className="mb-10">
                    <Trans>Desenvolvemos soluções customizadas para o seu negocio.</Trans>
                  </Text>
                </div>
                <Link href="" legacyBehavior>
                  <a
                    className={classNames(
                      'absolute bottom-0 left-0 right-0 px-7 py-3 flex items-center justify-between',
                      'bg-secondary-300 text-white text-sm font-semibold '
                    )}
                  >
                    <Trans>Quer o para a minha empresa</Trans>
                    <BsArrowRight className="text-xl text-primary-300 stroke-2" />
                  </a>
                </Link>
              </div>
            </div>
          </Content>
        </Container>
      </main>

      <section className="relative bg-primary-300">
        <Container className="py-14">
          <Content className="gap-4 lg:gap-24 grid grid-cols-1 lg:grid-cols-2 items-stretch text-center lg:text-left">
            <div className="relative space-y-4">
              <div className="space-y-2">
                <Line />
                <Heading className="text-lg md:text-3xl">
                  <Trans>
                    Acelerar o processo de transformação de pessoas e informações é o nosso
                    propósito
                  </Trans>
                </Heading>
              </div>
              <div className="lg:gap-5 lg:flex lg:items-center lg:absolute lg:bottom-0">
                <div className="hidden lg:block w-16 h-14 p-2 rounded-xl bg-gradient-to-r from-primary-400 to-primary-300 text-secondary-300">
                  <RocketIcon />
                </div>
                <Text color="lightMuted" className="w-fit lg:leading-5 lg:text-base">
                  <Trans>
                    Conheça abaixo os serviços que oferecemos, nossos produtos e casos de sucesso.
                  </Trans>
                </Text>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-5 mb-10">
                <Text color="lightMuted">
                  <Trans>
                    Somos uma empresa que apoia nossos clientes em seus negócios por meio de
                    soluções inovadoras e tecnológicas voltadas para a gestão da informação.
                  </Trans>
                </Text>
                <Text color="lightMuted">
                  <Trans>
                    Com soluções eficientes, auxiliamos os nossos clientes a reduzir custos de
                    armazenagem de documentos, reduzir riscos, cumprir os prazos de legislações
                    vigentes e utilizar as suas informações de forma rápida e segura, garantindo a
                    sua disponibilidade.
                  </Trans>
                </Text>
              </div>

              <Link href="/sobre-nos" legacyBehavior>
                <a className="inline-flex items-center gap-2 px-9 py-3 font-medium border-2 text-white border-secondary-300 rounded-full">
                  <Trans>Conheça a SOS Docs</Trans>
                </a>
              </Link>
            </div>
          </Content>
        </Container>
      </section>

      <section className="relative">
        <Container className="py-14">
          <Content>
            <div className="space-y-4 mb-10 text-center md:w-7/12 md:mx-auto lg:w-full lg:flex lg:items-center lg:justify-between lg:text-left lg:mb-16">
              <div className="space-y-2 lg:w-5/12 xl:w-4/12">
                <Line />
                <Heading className="text-3xl md:text-4xl" dark>
                  <Trans>A melhor solução para o seu negócio</Trans>
                </Heading>
              </div>
              <div className="lg:w-5/12 lg:text-right xl:w-4/12 xl:text-lg">
                <Text color="darkMuted">
                  <Trans>
                    Implemente processos tecnológicos à gestão da informação no seu negócio.
                  </Trans>
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-x-20 xl:gap-y-14">
              <SolutionCard
                href=""
                icon={<MediaIcon />}
                title={t`Guarda de documentos e mídias`}
                text={t`Estrutura, sistemas e equipes altamente capacitadas para realizar a guarda de
                documentos da sua empresa.`}
              />
              <SolutionCard
                href=""
                icon={<DocScanIcon />}
                title={t`Tratamento documental`}
                text={t`Mais organização e facilidade para você e sua empresa. Armazene seus arquivos
                físicos ou digitais em um local seguro de maneira organizada.`}
              />
              <SolutionCard
                href=""
                icon={<CogTechIcon />}
                title={t`Transformação digital`}
                text={t`Desenvolvemos soluções customizadas para o seu negocio aplicando a metodo-
                logia de ondas.`}
              />
              <SolutionCard
                href=""
                icon={<BoardIcon />}
                title={t`LGPD`}
                text={t`Mais organização e facilidade para você e sua empresa. Armazene seus arquivos
                físicos ou digitais em um local seguro de maneira organizada.`}
              />
            </div>
          </Content>
        </Container>
      </section>

      <section className="relative bg-primary-300">
        <Container className="py-20">
          <Content>
            <div className="space-y-2 lg:w-5/12 xl:w-6/12">
              <Line />
              <Heading className="text-3xl md:text-4xl">
                <Trans>Empresas líderes no mercado confiam na SOS Docs</Trans>
              </Heading>
            </div>

            {!publicClients.isLoading && (
              <div className="grid grid-cols-4 mt-5">
                {publicClients.clients.data.clients.edges.map((client: any, index: number) => (
                  <div key={index}>
                    <Image
                      src={client.node.brand.node.sourceUrl}
                      alt={client.node.title}
                      width={150}
                      height={90}
                    />
                  </div>
                ))}
              </div>
            )}
          </Content>
        </Container>
      </section>

      <Cta
        href=""
        title={t`Saiba como a SOS Docs pode auxiliar a gestão documental do seu negócio`}
        text={t`Para atingir todos os seus objetivos de negócio e crescer digitalmente com
        velocidade, você precisa do melhor em criatividade, performance e tecnologia.`}
        call={t`Conheça a SOS Docs`}
      />
    </TemplateDefault>
  )
}

export default IndexPage
