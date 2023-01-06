import { Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'

import { TemplateDefault } from '~/components/templates/Default'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

const Home: NextPage = () => {
  return (
    <TemplateDefault title="" description="">
      <h1>
        <Trans>Página Inicial</Trans>
      </h1>
    </TemplateDefault>
  )
}

export default Home
