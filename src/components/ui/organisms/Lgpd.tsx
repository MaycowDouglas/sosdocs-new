import { Trans } from '@lingui/macro'
import Image from 'next/image'
import Link from 'next/link'

import Shield from '~/public/images/shield.png'

import { Container } from '../atoms/Container'
import { Content } from '../atoms/Content'
import { Heading } from '../atoms/Heading'
import { Line } from '../atoms/Line'
import { Text } from '../atoms/Text'

export const Lgpd = () => {
  return (
    <section>
      <Container className="py-20">
        <Content className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left xl:items-center xl:gap-20">
          <div className="md:w-2/3 lg:w-1/2">
            <Image src={Shield} alt="" className="rounded-xl" />
          </div>
          <div className="lg:w-1/2">
            <div>
              <div className="space-y-4 mb-7">
                <div className="space-y-2">
                  <Line />
                  <Heading dark className="text-2xl lg:text-3xl font-semibold">
                    <Trans>
                      Temos um compromisso com a Lei Geral de Proteção de Dados Pessoais
                    </Trans>
                  </Heading>
                </div>
                <Text color="darkMuted" className="text-xl">
                  <Trans>
                    Esta Lei (Lei Nº 13. 709) dispõe sobre o tratamento de dados pessoais, inclusive
                    nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público
                    ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e
                    de privacidade e o livre desenvolvimento da personalidade da pessoa natural.
                  </Trans>
                </Text>
              </div>
              <Link href="" legacyBehavior>
                <a className="inline-flex items-center justify-center gap-2 px-9 py-3 border-2 border-primary-200 rounded-full font-semibold text-primary-200">
                  <Trans>Saiba Mais</Trans>
                </a>
              </Link>
            </div>
          </div>
        </Content>
      </Container>
    </section>
  )
}
