import { Box, Group, Input, InputAddon, Text } from "@chakra-ui/react";
import { TfiEmail } from "react-icons/tfi";

export function Subscribe() {
  return (
      <Box mt={"1rem"}>
        <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
          Berlangganan
        </Text>
        <Box border={"1px solid"} borderColor={"gray.200"}p={"4px"} w={"fit-content"}>
        <Group attached>
       <Input placeholder="example@.com"/>
       <InputAddon bg={"#32642d"}><TfiEmail color="white"/></InputAddon>
       </Group>
       </Box>
      </Box>
  );
}
