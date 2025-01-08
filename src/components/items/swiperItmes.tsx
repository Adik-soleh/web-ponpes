import { A11y, Navigation, Pagination, Scrollbar,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";
import datas from "@/data/dummyImage";
export function SwiperItmes() {
  return (
    <Box width={"100%"}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        centeredSlides={true}
      navigation={true}
      spaceBetween={30}
      shortSwipes={true}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {datas.map((item) => (
        <SwiperSlide key={item.id}>
          <Image src={item.image} maxH={"40vh"} w={"60vh"}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </Box>
  );
}
