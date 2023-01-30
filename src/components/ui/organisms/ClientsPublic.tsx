import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

export const ClientsPublic = ({ clients }) => {
  return (
    <Swiper spaceBetween={0} slidesPerView="auto">
      {publicClients.clients.data.clients.edges.map((client: any, index: number) => (
        <SwiperSlide key={index} className="max-w-[280px]">
          <div className="flex justify-center items-center">
            <Image
              src={client.node.brand.node.sourceUrl}
              alt={client.node.title}
              width={150}
              height={90}
              className="w-auto h-[70px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
