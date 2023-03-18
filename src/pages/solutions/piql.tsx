import { t, Trans } from '@lingui/macro'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { TemplateDefault } from '~/components/templates/Default'
import { Container } from '~/components/ui/atoms/Container'
import { Content } from '~/components/ui/atoms/Content'
import { Heading } from '~/components/ui/atoms/Heading'
import { Text } from '~/components/ui/atoms/Text'
import BgPiql from '~/public/images/backgrounds/bg-piql.jpg'
import BgWeb from '~/public/images/backgrounds/bg-web.jpg'
import PiqlBunker from '~/public/images/piql-bunker.jpg'
import PiqlReader from '~/public/images/piql-reader.jpg'
import PiqlSoftware from '~/public/images/piql-software.jpg'
import { loadTranslation } from '~/utils/lingui'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')

  return {
    props: {
      translation,
    },
  }
}

export default function PiqlPage() {
  return (
    <TemplateDefault title="" description="">
      <main className="relative">
        <Image src={BgPiql} alt="" fill className="object-cover" priority quality={100} />
        <Container>
          <Content className="lg:w-9/12 xl:w-8/12 pt-24 pb-20 md:pt-32 xl:pt-44 xl:pb-28">
            <div className="mb-10 space-y-2 text-center md:text-left ">
              <Text className="text-lg xl:text-xl uppercase">
                <Trans>Uma abordagem holística</Trans>
              </Text>
              <Heading tag="h1" className="text-3xl md:text-3xl xl:text-4xl">
                <Trans>Preservação Digital</Trans>
              </Heading>
              <Text>
                Com tratamentos de dados de melhores práticas e tecnologia construída para fins
                específicos, garantimos que seu conteúdo valioso seja preservado digitalmente com os
                mais altos padrões de qualidade e longevidade.
              </Text>
            </div>
          </Content>
        </Container>
      </main>
      <section>
        <Container>
          <Content className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center gap-5">
              <svg
                className="w-auto h-16 fill-none"
                viewBox="0 0 82 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.9625 43.8923L38.9483 57.3977L43.0483 57.4018L43.0625 43.9046L47.146 47.9986L50.0489 45.1039L41.0207 36.051L31.9513 45.0957L34.846 47.9986L38.9625 43.8926V43.8923ZM25.0495 22.5933C16.8453 22.905 10.2812 29.6618 10.2812 37.9414C10.2812 46.4182 17.1653 53.3 25.6422 53.3H29.7257V49.2H25.6422C19.4267 49.2 14.3814 44.1551 14.3814 37.9415C14.3814 31.726 19.4262 26.6807 25.6422 26.6807C25.9639 26.6807 26.2819 26.6949 26.5953 26.7219L28.5676 26.888L28.8032 24.924C29.6562 17.8167 35.7161 12.2995 43.0501 12.2995C50.9692 12.2995 57.4001 18.7304 57.4001 26.6495C57.4001 27.8918 57.2423 29.0994 56.9448 30.2493L59.0319 32.8099C59.1714 32.804 59.3105 32.7998 59.4501 32.7998C63.9766 32.7998 67.6501 36.4733 67.6501 40.9998C67.6501 45.5264 63.9766 49.1998 59.4501 49.1998H53.3001V53.2998H59.4501C66.2375 53.2998 71.7501 47.7872 71.7501 40.9998C71.7501 34.864 67.2483 29.7719 61.3688 28.8498C61.4548 28.1282 61.5001 27.3942 61.5001 26.6502C61.5001 16.4679 53.2324 8.2002 43.0501 8.2002C34.2598 8.2002 26.8984 14.3603 25.0488 22.5935L25.0495 22.5933Z"
                  fill="#444444"
                />
              </svg>
              <Heading tag="h2" className="text-xl" dark>
                Upload
              </Heading>
              <Text color="dark">
                <Trans>
                  Por meio da digitalização ou de sistemas existentes, oferecemos um processo
                  simplificado com extração de metadados e mapeamento e correspondência de arquivos.
                </Trans>
              </Text>
            </div>
            <div className="flex flex-col items-center gap-5">
              <svg
                className="w-auto h-16 fill-none"
                viewBox="0 0 101 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_503_102)">
                  <path
                    d="M85.2939 26.7404C84.9016 26.0433 84.3527 25.447 83.691 24.9983C83.9058 24.4392 83.992 23.8396 83.9435 23.2433C83.8855 22.6971 83.6848 22.1763 83.3607 21.7333C83.0372 21.2897 82.6021 20.9397 82.0999 20.7182C80.7687 20.0075 79.2181 19.8226 77.7572 20.2008V20.0622V20.0616C77.7955 18.9383 77.3328 17.8562 76.4947 17.1077C75.7135 16.6004 74.7807 16.3817 73.8559 16.4888C72.7292 16.7622 71.6369 17.1601 70.5988 17.6758C70.3294 17.2006 69.9534 16.7943 69.5003 16.4888C68.5917 16.0176 67.5541 15.8581 66.5457 16.0345C64.7528 16.2239 62.8721 17.5495 60.8645 18.9507L59.8421 19.6451L58.4787 20.0869C56.1053 20.8568 52.3432 22.0691 50.4619 22.4603C49.3921 22.0466 48.3005 21.6927 47.1918 21.4001C45.5878 20.947 43.9341 20.6928 42.2681 20.6426C38.0387 20.5164 33.948 21.9806 30.2997 23.3447V21.8421C30.2997 21.1719 30.0337 20.53 29.5602 20.0565C29.0868 19.5831 28.4443 19.3171 27.7747 19.3171H17.7379C17.0683 19.3171 16.4258 19.5831 15.9524 20.0565C15.4789 20.53 15.2129 21.1719 15.2129 21.8421V41.1331C15.2129 41.8026 15.4789 42.4446 15.9524 42.9186C16.4258 43.392 17.0683 43.6581 17.7379 43.6581H27.8379C28.5075 43.6581 29.15 43.392 29.6234 42.9186C30.0969 42.4446 30.3629 41.8026 30.3629 41.1331V40.5018C42.4953 43.936 47.9744 45.3371 49.0219 45.3371C50.4991 45.3371 61.8616 42.5342 63.1873 42.1178C66.4778 40.9664 69.652 39.5083 72.6685 37.7621C76.8471 35.4772 80.7993 33.318 84.9655 30.806L85.0664 30.7175C85.1357 30.6651 85.1989 30.6059 85.2558 30.5405C85.3133 30.4819 85.3606 30.4131 85.395 30.3387L85.4835 30.2249V30.0733H85.4829C85.4886 30.0485 85.4886 30.0225 85.4829 29.9977C85.8938 28.9359 85.8245 27.7477 85.2935 26.7406L85.2939 26.7404ZM80.7997 22.953C81.4056 23.3317 81.4185 23.3571 81.4309 23.5211C81.449 23.7392 81.4191 23.9596 81.3424 24.1647C80.7343 24.1292 80.1239 24.1675 79.5247 24.2786C77.0527 24.7543 74.6427 25.5078 72.3409 26.5257C71.3563 26.9298 70.3841 27.3209 69.3863 27.6743C66.9205 28.5986 64.3515 29.2221 61.7359 29.5303L61.8621 29.4418L63.2255 28.4064H63.4403L75.7496 23.5081C77.5295 22.8013 79.5371 22.17 80.7996 22.9151L80.7997 22.953ZM74.3609 19.0516C74.5616 19.0725 74.76 19.1102 74.9544 19.1655C75.163 19.4157 75.2672 19.7364 75.2447 20.0616C75.2289 20.504 75.0384 20.9217 74.7143 21.2232L66.6089 24.4303C66.6134 23.9596 66.5278 23.4924 66.3564 23.0539C67.2024 22.5996 68.0101 22.1194 68.806 21.6528C70.5098 20.4906 72.3838 19.6006 74.361 19.0139L74.3609 19.0516ZM66.9122 18.572C67.3298 18.4998 67.757 18.4998 68.1747 18.572C68.2913 18.6554 68.3973 18.7529 68.4903 18.8622L67.5688 19.405C66.7482 19.8976 65.9399 20.3772 65.107 20.8061V20.8067C64.8133 20.4528 64.4785 20.1349 64.1094 19.8598C64.948 19.2472 65.901 18.8093 66.9122 18.572ZM17.7382 41.1325V21.8415H27.8382V41.1325H17.7382ZM71.4572 35.5267C68.5765 37.2017 65.5459 38.6052 62.405 39.7183C60.9532 40.1856 50.1587 42.7608 49.0349 42.8115C47.911 42.8623 41.9649 41.1579 30.8044 38.014H30.8049C30.6387 37.9763 30.4662 37.9763 30.2999 38.014V26.0203C30.4206 26.0175 30.5395 25.9966 30.6533 25.9572C34.4408 24.556 38.2283 23.1289 42.2051 23.2175C43.6666 23.2592 45.1174 23.4835 46.523 23.8865C47.369 24.1266 48.1135 24.3407 48.8463 24.5932V24.5938C48.9974 24.8221 49.2189 24.9945 49.4776 25.0859C49.6416 25.1507 49.8197 25.1727 49.995 25.149C53.1343 24.5166 56.2264 23.6683 59.249 22.6116C60.5115 22.1951 61.774 21.8033 62.0643 21.7278C62.1398 21.7278 62.5062 21.8541 63.0366 22.4346C63.5494 22.965 63.9186 23.6165 64.1097 24.3283C62.9469 25.4911 61.6793 26.5438 60.3222 27.4722C59.5731 27.9901 58.8642 28.5639 58.2013 29.1889C56.3454 31.1334 49.2376 33.3935 46.7126 33.4312H46.3969C45.6998 33.3754 45.0894 33.895 45.0336 34.5928C44.9778 35.29 45.4974 35.9004 46.1952 35.9562H46.5993H46.5987C50.7402 35.5549 54.7452 34.2631 58.34 32.1687C58.4116 32.1749 58.4831 32.1749 58.5547 32.1687C62.5507 32.1411 66.5096 31.4016 70.2458 29.9846C71.2682 29.6183 72.2912 29.2018 73.3012 28.7976H73.3006C75.4259 27.8327 77.654 27.113 79.9416 26.6514C80.4348 26.5697 80.9381 26.5697 81.4312 26.6514C82.1335 26.8182 82.7309 27.2776 83.0725 27.9139C83.232 28.198 83.2985 28.5249 83.2619 28.8484C79.2851 31.2471 75.4722 33.3302 71.4576 35.5266L71.4572 35.5267Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_503_102">
                    <rect width="101" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Heading tag="h2" className="text-xl" dark>
                Preserve
              </Heading>
              <Text color="dark">
                <Trans>
                  Usando o poder da plataforma líder de preservação digital de código aberto do
                  mundo - Archivematica - simplificamos e automatizamos ações para fornecer
                  enriquecimento aos dados, normalizando arquivos e preparando Pacotes de Informação
                  de Arquivamento (AIPs).
                </Trans>
              </Text>
            </div>
            <div className="flex flex-col items-center gap-5">
              <svg
                className="w-auto h-16 fill-none"
                viewBox="0 0 76 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_503_141)">
                  <path
                    d="M57.8595 10.2839H42.4456C40.373 10.2839 38.6605 9.29487 37.6253 7.49958L36.7338 5.95417C34.9991 2.94729 32.0127 1.22241 28.5413 1.22241H18.1396C12.9244 1.22241 8.68164 5.46517 8.68164 10.6804V50.1179C8.68164 55.3331 12.9244 59.5759 18.1396 59.5759H57.8594C63.0746 59.5759 67.3174 55.3331 67.3174 50.1179L67.3178 19.7429C67.3182 14.5276 63.0755 10.2844 57.8598 10.2844L57.8595 10.2839ZM18.1397 5.11611H28.5401C30.6127 5.11611 32.3252 6.10513 33.3605 7.90042L34.2519 9.44583C35.9866 12.4527 38.973 14.1776 42.4444 14.1776H57.8594C60.9278 14.1776 63.425 16.6743 63.425 19.7432V23.835H12.5744V10.6827C12.5744 7.61303 15.0712 5.11665 18.14 5.11665L18.1397 5.11611ZM57.8595 55.6843H18.1397C15.0713 55.6843 12.5741 53.1876 12.5741 50.1187V27.727H63.4257V50.1198C63.4257 53.1883 60.929 55.6846 57.8601 55.6846L57.8595 55.6843Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_503_141">
                    <rect width="76" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Heading tag="h2" className="text-xl" dark>
                Todos os formatos de arquivos
              </Heading>
              <Text color="dark">
                <Trans>
                  Oferecemos uma variedade de opções de acesso, incluindo acesso instantâneo
                  on-line, acesso físico via piqlReader e acesso solicitado (para informações apenas
                  offline). Todos os dados preservados com Piql oferecem uma garantia maior de
                  acesso no futuro.
                </Trans>
              </Text>
            </div>
          </Content>
        </Container>
      </section>
      <section className="relative">
        <Image src={BgWeb} alt="" fill className="object-cover" quality={100} />
        <Container className="py-20">
          <Content className="text-center space-y-6 lg:mx-auto lg:w-11/12 xl:w-9/12">
            <Heading className="text-2xl md:text-3xl lg:text-4xl">
              A preservação digital nunca foi tão fácil.
            </Heading>
            <Link href="/contato" legacyBehavior>
              <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-300 text-white">
                Saiba mais
              </a>
            </Link>
          </Content>
        </Container>
      </section>
      <section>
        <Container className="p-0">
          <Heading dark tag="h2" className="text-center text-5xl my-10">
            Armazenamento e acesso
          </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
            <div className="relative h-80 lg:h-auto">
              <Image src={PiqlSoftware} fill alt="" />
            </div>
            <div className="p-10 space-y-3 flex flex-col justify-center">
              <Heading dark tag="h3" className="text-3xl">
                <Trans>Acesso instantâneo</Trans>
              </Heading>
              <Text color="darkMuted">
                Desfrute de acesso instantâneo a todas as suas informações online na ponta dos dedos
                via piqlConnect. Se seus dados estiverem offline, você ainda pode acessar seu
                diretório de arquivos e gerenciar sua coleção.
              </Text>
              <div>
                <Link href="/contato" legacyBehavior>
                  <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-300 text-primary-400">
                    <Trans>Ler mais</Trans>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <Image src={PiqlReader} alt="" />
            </div>
            <div className="p-10 space-y-3 flex flex-col justify-center">
              <Heading dark tag="h3" className="text-3xl">
                <Trans>Recuperação</Trans>
              </Heading>
              <Text color="darkMuted">
                Todos os dados armazenados no piqlFilm, localmente ou no Arctic World Archive, podem
                ser recuperados por meio do piqlConnect ou de um representante local da Piql.
              </Text>
              <div>
                <Link href="/contato" legacyBehavior>
                  <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-300 text-primary-400">
                    <Trans>Ler mais</Trans>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <Image src={PiqlBunker} alt="" />
            </div>
            <div className="p-10 space-y-3 flex flex-col justify-center">
              <Heading dark tag="h3" className="text-3xl">
                <Trans>Autogerenciado</Trans>
              </Heading>
              <Text color="darkMuted">
                Este leitor premiado é perfeito para clientes que desejam manter o controle e acesso
                de arquivos offline. É compacto, fácil de usar e altamente eficiente, permitindo que
                você leia seu piqlFilm a qualquer momento.
              </Text>
              <div>
                <Link href="/contato" legacyBehavior>
                  <a className="inline-flex px-8 py-3 text-sm rounded-full border-2 border-secondary-300 text-primary-400">
                    <Trans>Ler mais</Trans>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </TemplateDefault>
  )
}
