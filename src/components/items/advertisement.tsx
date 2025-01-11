import { Box, Text } from "@chakra-ui/react";
import { BiMovie } from "react-icons/bi";
import { EmptyState } from "../ui/empty-state";

export function Advertisement() {
  return (
    <Box mt={"1rem"}>
      <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
        Iklan
      </Text>
      <EmptyState
        icon={<BiMovie />}
        title="Belum Ada Iklan"
        description="Silahkan Tambahkan Iklan"
      />
    </Box>
  );
}
