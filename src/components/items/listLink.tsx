import { Box, Flex, Text } from "@chakra-ui/react";
import { LinkItems } from "./linkItems";

export function ListLink() {
  return (
    <>
      <Box mt={"1rem"}>
        <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
          Tautan
        </Text>
        <Flex flexDir={"column"} gap={1}>
          <LinkItems title="KOTA TANGSEL" link="#"/>
          <LinkItems title="KOTA TANGSEL" link="#"/>
        </Flex>
      </Box>
    </>
  );
}
