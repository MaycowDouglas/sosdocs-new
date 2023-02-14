import { t, Trans } from '@lingui/macro'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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

const InsightsPage: NextPage = () => {
  const posts = usePosts()
  const [filtered, setFiltered] = useState([])

  const [showAllPosts, setShowAllPosts] = useState(false)

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
        <div className="absolute z-30 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-end rounded-xl bg-white w-4/5 py-5 px-10 shadow">
          <div className="flex items-center gap-3">
            <label htmlFor="search" className="cursor-pointer">
              <Trans>Pesquisar Conteúdo</Trans>
            </label>
            <input
              type="text"
              id="search"
              className="w-0 focus:w-44 transition-all outline-none border-b-2 border-b-primary-200"
            />
            <button>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7_1320)">
                  <path
                    d="M14.9593 16.9997C14.6753 16.9101 14.4787 16.7047 14.2785 16.4918C13.0735 15.2034 11.8648 13.9149 10.6598 12.6302C10.6198 12.5854 10.5834 12.5369 10.5433 12.4883C8.73765 13.7095 6.80819 14.0531 4.74766 13.422C3.22229 12.9551 2.01001 12.014 1.12901 10.6546C-0.774976 7.71546 -0.21798 3.85386 2.4323 1.59068C4.95517 -0.560467 8.51922 -0.515652 10.9838 1.61308C12.3854 2.8231 13.1936 4.38044 13.3538 6.26269C13.514 8.1412 12.9788 9.80684 11.8175 11.2783C11.894 11.3604 11.9668 11.4426 12.0432 11.521C13.2628 12.8207 14.4787 14.1203 15.6983 15.4162C16.0769 15.8196 16.1097 16.3574 15.7493 16.7159C15.6255 16.8391 15.4398 16.9026 15.2833 16.996C15.1741 16.9997 15.0685 16.9997 14.9593 16.9997ZM6.69897 1.79981C3.98316 1.79608 1.76245 4.063 1.75517 6.86023C1.74425 9.64999 3.98316 11.9468 6.69897 11.9356C9.42935 11.9244 11.6318 9.66119 11.6355 6.8677C11.6355 4.07793 9.41842 1.80355 6.69897 1.79981Z"
                    fill="#1D78EC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_1320">
                    <rect width="16" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </main>

      {posts.data && (
        <section>
          <Container className="py-20">
            <Content>
              <div>
                <article className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                  <div className="relative col-span-2 h-80 rounded-2xl overflow-hidden">
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
                    <Link
                      href={`/articles/${posts.data[0].slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-primary-200"
                    >
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
                      <article
                        key={index}
                        className={classNames(
                          'border-2 rounded-2xl border-neutral-200 hover:border-secondary-100 cursor-pointer',
                          !showAllPosts && index > 3 ? 'hidden' : ''
                        )}
                      >
                        <div className="relative w-full h-52 rounded-2xl overflow-hidden">
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
                          <Heading dark className="mb-3">
                            {post.title}
                          </Heading>
                          <Text
                            color="darkMuted"
                            className="text-sm"
                            title={post.content?.replace(/<\/?[^>]+(>|$)/g, '')}
                          >
                            {post.content?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 60)}...
                          </Text>
                          <Link
                            href={`/articles/${post.slug}`}
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
              {!showAllPosts && (
                <div className="text-center pt-5">
                  <button
                    onClick={() => setShowAllPosts(true)}
                    className="inline-flex justify-center items-center px-8 py-3 bg-primary-200 text-white rounded-full"
                  >
                    Ver todos
                  </button>
                </div>
              )}
            </Content>
          </Container>
        </section>
      )}

      <Cta
        href=""
        title={t`Saiba como a SOS Docs pode auxiliar a gestão documental do seu negócio`}
        text={t`Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.`}
        call={t`Conheça a SOS Docs`}
      />
    </TemplateDefault>
  )
}

export default InsightsPage
