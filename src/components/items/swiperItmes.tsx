import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";
import datas from "@/data/dummyImage";

export function SwiperItmes() {
  return (
    <Box width="100%" maxW="1200px" m="auto" p="1rem">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {datas.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              maxH="40vh"
              w="100%" 
              objectFit="cover"
              borderRadius="lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
