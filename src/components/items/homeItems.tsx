import { Box, Flex, Text } from "@chakra-ui/react";
import { FounderCard } from "../card/founderCard";
import { ListCarsEven } from "../card/listCarsEvent";
import { SwiperItmes } from "./swiperItmes";
import { NewMomentCard } from "../card/newMomentCard";

const HomeItem = () => {
  return (
    <Box w={"99%"} m={"auto"}>
      <SwiperItmes />
      <Flex mt={"2rem"} flexDir={"column"}  p={"2rem"} gap={"1rem"}>
        <Text fontWeight={"bolder"} fontSize={"2xl"}>
          Tulisan Terbaru
        </Text>

        {/* Menggunakan Flex yang lebih responsif dengan wrap */}
        <Flex justify={"space-between"} flexWrap="wrap" gap="2rem">
          {/* ListCarsEven akan full width di mobile dan berbagi ruang di layar besar */}
          <Box flex={{ base: "1 1 100%", lg: "1 1 60%" }}>
            <ListCarsEven />
          </Box>

          {/* FounderCard akan pindah ke bawah pada layar kecil */}
          <Flex flex={{  lg: "1 1 35%" }} justify="center" flexDir={"column"}>
            <FounderCard />
          </Flex>
        </Flex>

        {/* NewMomentCard full width di semua ukuran layar */}
        <NewMomentCard />
      </Flex>
    </Box>
  );
};

export default HomeItem;
