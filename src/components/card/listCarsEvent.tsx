import datas from "@/data/dummy";
import { Box, Card, Image, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export function ListCarsEven() {
  return (
    <>
      <Box>
      <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
          Tulisan Terbaru
        </Text>
        <SimpleGrid
          columns={{ base: 1 }} // Responsif berdasarkan ukuran layar
          gap={{ base: "1rem", md: "1.5rem" }} // Spasi antar kartu
          mt={"1rem"}
          w={"100%"}
        >
          {datas.map((data) => (
            <Card.Root
              flexDirection={{ base: "column", md: "row" }} // Flex berubah berdasarkan ukuran layar
              overflow="hidden"
              maxW="100%" // Gunakan persentase untuk fleksibilitas
              key={data.id}
            >
              <Image
                maxW={{ base: "100%", md: "20vh" }} // Gambar penuh pada layar kecil
                maxH={"30vh"}
                src={data.image}
                alt={data.title}
                objectFit="cover" // Pastikan gambar tidak terdistorsi
              />
              <VStack
                align={{ base: "center", md: "flex-start" }} // Atur alignment berdasarkan layar
                p={{ base: "1rem", md: "1.5rem" }}
              >
                <Card.Body>
                  <Card.Title mb="2">{data.title}</Card.Title>
                  <Card.Description>{data.desc}</Card.Description>
                </Card.Body>
              </VStack>
              <Spacer />
              <Box
                bgColor={"green.700"}
                p={"0.5rem"}
                w="2.5rem"
                h="2.5rem"
                m={"1rem"}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <BiSearch color="white" size="1.5rem" />
              </Box>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
