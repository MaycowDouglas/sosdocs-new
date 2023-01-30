import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

export const ClientsPublic = ({ clients }: any) => {
  return (
    <Swiper spaceBetween={0} slidesPerView="auto">
      {/* {clients.data.map((client: any, index: number) => (
        <SwiperSlide key={index} className="max-w-[280px]">
          <div className="flex justify-center items-center">
            <Image
              src={client..sourceUrl}
              alt={client.node.title}
              width={150}
              height={90}
              className="w-auto h-[70px]"
            />
          </div>
        </SwiperSlide>
      ))} */}
    </Swiper>
  )
}
