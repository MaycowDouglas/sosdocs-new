import { GetServerSidePropsContext, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import usePost from '~/hooks/usePost'
import { loadTranslation } from '~/utils/lingui'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

export default function Article() {
  const router = useRouter()
  const post = usePost(String(router.query.slug))

  return (
    <TemplateDefault title="" description="">
      {post.data && (
        <section className="py-28">
          <Container>
            <Content>
              <div className="relative w-full md:w-4/5 h-52 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="object-cover object-center"
                  src={
                    post.data.featuredImage
                      ? post.data.featuredImage.node.sourceUrl
                      : 'https://via.placeholder.com/750x340.png?text=article+without+image'
                  }
                  alt={post.data.title}
                />
              </div>

              <div className="md:w-3/5">
                <Heading tag="h1" dark className="mt-10 mb-5 text-2xl md:text-4xl">
                  {post.data.title}
                </Heading>

                <div
                  className="space-y-5 xl:text-lg"
                  dangerouslySetInnerHTML={{ __html: String(post.data.content) }}
                />
              </div>
            </Content>
          </Container>
        </section>
      )}
    </TemplateDefault>
  )
}
