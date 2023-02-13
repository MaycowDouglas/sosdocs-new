import { Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { RocketIcon } from '~/components/ui/atoms/Icons'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
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

const ContactPage: NextPage = () => {
  return (
    <TemplateDefault title="" description="">
      <section className="relative">
        <Image src={BgWeb} alt="" fill className="object-cover" quality={100} />
        <Container className="pt-32 pb-20">
          <Content className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">
            <div>
              <Line />
              <Text className="mt-3 mb-2 text-secondary-200 text-xl">
                Precisa de ajuda? Contate-nos
              </Text>
              <Heading tag="h1" className="text-4xl">
                Promova a transformação digital.
              </Heading>
              <Text className="text-lg my-5">
                Preencha o formulário e saiba como a SOSDOCS pode te ajudar a melhorar a eficiência
                e os resultados da sua gestão.
              </Text>
              <Text className="text-secondary-200 text-2xl mb-5">contato@sosdocs.com.br</Text>
              <div className="w-16 h-14 p-3 rounded-xl text-secondary-300 bg-[linear-gradient(90deg,_rgba(254,_203,_54,_0.32)_0%,_rgba(254,_203,_54,_0.0736)_100%)]">
                <RocketIcon />
              </div>
            </div>
            <div>
              <form action="" className="px-10 py-10 rounded-2xl bg-white">
                <div className="relative h-20">
                  <input
                    className="peer w-full my-5 border-b-2 border-b-neutral-200 outline-none focus:border-b-primary-200"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <label
                    className="absolute left-0 bottom-16 peer-focus:text-primary-200"
                    htmlFor="username"
                  >
                    <Trans>Nome*</Trans>
                  </label>
                </div>
                <div className="relative h-20">
                  <input
                    className="peer w-full my-5 border-b-2 border-b-neutral-200 outline-none focus:border-b-primary-200"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <label
                    className="absolute left-0 bottom-16 peer-focus:text-primary-200"
                    htmlFor="email"
                  >
                    <Trans>Email Corporativo*</Trans>
                  </label>
                </div>
                <div className="relative h-20">
                  <input
                    className="peer w-full my-5 border-b-2 border-b-neutral-200 outline-none focus:border-b-primary-200"
                    type="text"
                    id="phone"
                    name="phone"
                  />
                  <label
                    className="absolute left-0 bottom-16 peer-focus:text-primary-200"
                    htmlFor="phone"
                  >
                    <Trans>Telefone*</Trans>
                  </label>
                </div>
                <div className="relative h-20">
                  <input
                    className="peer w-full my-5 border-b-2 border-b-neutral-200 outline-none focus:border-b-primary-200"
                    type="text"
                    id="company"
                    name="company"
                  />
                  <label
                    className="absolute left-0 bottom-16 peer-focus:text-primary-200"
                    htmlFor="company"
                  >
                    <Trans>Nome da empresa*</Trans>
                  </label>
                </div>

                <button className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full bg-primary-200 text-white">
                  <Trans>Entrar em contato</Trans>
                </button>
              </form>
            </div>
          </Content>
        </Container>
      </section>
      <section id="trabalhe-conosco" className="bg-neutral-200">
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
              <Link
                href=""
                as=""
                className="py-3 px-5 inline-flex rounded-full bg-gradient-to-r from-secondary-100 to-secondary-300 font-semibold"
              >
                <Trans>Veja nossas vagas abertas</Trans>
              </Link>
            </div>
          </Content>
        </Container>
      </section>
    </TemplateDefault>
  )
}

export default ContactPage
