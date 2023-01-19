import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { Line } from '~/components/ui/atoms/Line'
import { Cta } from '~/components/ui/organisms/Cta'
import BgKeyboard from '~/public/images/backgrounds/bg-keyboard.jpg'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const InsightsPage: NextPage = () => {
  return (
    <TemplateDefault title="" description="">
      <main className="relative">
        <Image src={BgKeyboard} alt="" fill className="object-cover" priority quality={100} />
        <Container className="pt-28 pb-20 lg:pt-44 lg:pb-28">
          <Content className="text-center lg:text-left">
            <div className="space-y-2">
              <Line />
              <Heading
                tag="h1"
                className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold"
              >
                <Trans>Conteúdo</Trans>
              </Heading>
            </div>
          </Content>
        </Container>
      </main>
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

export default InsightsPage
