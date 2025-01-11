import { Box, Flex } from "@chakra-ui/react";
import { FounderCard } from "../card/founderCard";
import { ListCarsEven } from "../card/listCarsEvent";
import { NewMomentCard } from "../card/newMomentCard";
import { SwiperItmes } from "./swiperItmes";
import { ListLink } from "./listLink";
import { Subscribe } from "./subscribe";
import { Advertisement } from "./advertisement";
import { ListYoutube } from "./newVideo";

const HomeItem = () => {
  return (
    <Box w="99%" m="auto">
      <SwiperItmes />
      <Flex flexDir="column">
        <Flex mt="2rem" p="2rem" gap="1rem" flexDir="column">
          <Flex
            justify="space-between"
            flexWrap="wrap"
            gap="2rem"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box flex={{ base: "1 1 100%", lg: "1 1 60%" }}>
              <ListCarsEven />
              <NewMomentCard />
            </Box>
            <Box flex={{ base: "1 1 100%", lg: "1 1 35%" }} gap={"1rem"}>
              <FounderCard />
              <ListLink />
              <Subscribe/>
              <Advertisement/>
            </Box>
            <Box flex={{ base: "1 1 100%", lg: "1 1 30%" }}>
            <ListYoutube/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeItem;
