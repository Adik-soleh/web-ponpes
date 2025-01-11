import {
  Box,
  Card,
  SimpleGrid,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import datas from "@/data/dataNewImage";

export function NewMomentCard() {
return (
  <Box borderTop={"1px"} borderColor={"#32642d"} mt={"2rem"} >
    <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
      Foto Terbaru
    </Text>

    {/* Menghapus HStack dan menggunakan SimpleGrid langsung untuk responsivitas yang lebih baik */}
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 3 }}
      gap={{ base: "1rem", md: "1.5rem" }}
      mt={"1rem"}
    >
      {datas.map((data) => (
        <Card.Root
          maxW="sm"
          overflow="hidden"
          key={data.id}
          boxShadow="md"
          borderRadius="lg"
        >
          <Image
            src={data.image}
            alt={data.title}
            maxH={"30vh"}
            objectFit={"cover"}
          />
          <Card.Body>
            <VStack align="flex-start" gap="1rem">
              <Card.Title fontSize="lg">{data.title}</Card.Title>
              <Card.Description fontSize="sm" color="gray.600">
                {data.desc}
              </Card.Description>
            </VStack>
          </Card.Body>
          <Card.Footer
            justifyContent="flex-end"
            bgColor="gray.100"
            p="1rem"
          >
            <Box
              bgColor={"green.700"}
              p={"0.5rem"}
              w="2.5rem"
              h="2.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ bgColor: "green.800" }}
            >
              <BiSearch color="white" size="1.5rem" />
            </Box>
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  </Box>
);
}
