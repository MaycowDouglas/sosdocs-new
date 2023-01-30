import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { Line } from '~/components/ui/atoms/Line'
import { Text } from '~/components/ui/atoms/Text'
import { Cta } from '~/components/ui/organisms/Cta'
import usePosts from '~/hooks/usePosts'
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
  const posts = usePosts()

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
      {posts.data && (
        <section>
          <Container className="py-20">
            <Content>
              <div>
                <article className="grid grid-cols-3 gap-10 items-center">
                  <div className="relative col-span-2 h-80">
                    <Image
                      fill
                      className="object-cover object-center"
                      src={
                        posts.data[0].featuredImage
                          ? posts.data[0].featuredImage.node.sourceUrl
                          : 'https://via.placeholder.com/750x340.png?text=article+without+image'
                      }
                      alt={posts.data[0].title}
                    />
                  </div>
                  <div className="">
                    <Heading dark className="text-xl mb-3">
                      {posts.data[0].title}
                    </Heading>
                    <Text color="darkMuted">
                      {posts.data[0].content?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 115)}...
                    </Text>
                    <Link href="" className="mt-5 inline-flex items-center gap-2 text-primary-200">
                      <Trans>
                        Ler mais <FaChevronRight size={14} />
                      </Trans>
                    </Link>
                  </div>
                </article>
              </div>
              <div className="grid md:grid-cols-3 gap-5 mt-10">
                {posts.data.map((post, index) => {
                  if (index >= 1) {
                    return (
                      <article key={index}>
                        <div className="relative w-full h-52">
                          <Image
                            fill
                            className="object-cover object-center"
                            src={
                              post.featuredImage
                                ? post.featuredImage.node.sourceUrl
                                : 'https://via.placeholder.com/750x340.png?text=article+without+image'
                            }
                            alt={post.title}
                          />
                        </div>
                        <div className="p-7">
                          <Heading dark className="text-xl mb-3">
                            {post.title}
                          </Heading>
                          <Text color="darkMuted">
                            {post.content?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 115)}...
                          </Text>
                          <Link
                            href=""
                            className="mt-5 inline-flex items-center gap-2 text-primary-200"
                          >
                            <Trans>
                              Ler mais <FaChevronRight size={14} />
                            </Trans>
                          </Link>
                        </div>
                      </article>
                    )
                  }
                })}
              </div>
            </Content>
          </Container>
        </section>
      )}

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
