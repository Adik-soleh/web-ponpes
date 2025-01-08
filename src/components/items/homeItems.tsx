

import { Box, Flex, Text } from "@chakra-ui/react";
import { FounderCard } from "../card/founderCard";
import { ListCarsEven } from "../card/listCarsEvent";
import { SwiperItmes } from "./swiperItmes";

const HomeItem = () => {
  return (
    <Box w={"99%"} m={"auto"} >
      <SwiperItmes/>
      <Flex mt={"2rem"} flexDir={"column"} m={"2rem"} p={"2rem"}>
        <Text fontWeight={"bolder"} fontSize={"2xl"}>
          Tulisan Terbaru
        </Text>
        <Flex justify={"space-between"}>
        <ListCarsEven />
        <Flex flexDir={"column"}>
        <FounderCard />
        </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeItem;
