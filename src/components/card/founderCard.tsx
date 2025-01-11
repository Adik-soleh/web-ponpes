import ustad from "@/assets/images/ustad.jpg";
import { Card, CardBody, CardFooter, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const FounderCard = () => {
  return (
    <Card.Root maxW="400px" overflow="hidden" alignItems="center" boxShadow="md">
      <Flex justify="center">
        <Image
          objectFit="cover"
          maxW="100%" // Menyesuaikan lebar maksimal dengan Card
          maxH="300px" // Mengatur tinggi maksimum gambar
          src={ustad}
          alt="Foto Pendiri"
        />
      </Flex>
      <CardBody textAlign="center">
        <Heading mb="2">Alm. Kh. Nurhasan Bin H. Muhammad</Heading>
        <Text color="gray.500" fontWeight="bold">Pendiri</Text>
        <Text mt="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, commodi. Odio blanditiis vel culpa sapiente, quaerat repellendus reiciendis recusandae itaque exercitationem repellat dolorem, quae distinctio consectetur nemo, excepturi nam voluptate.....
        </Text>
      </CardBody>
      <CardFooter justifyContent="center">
        <Text color="green.500" fontWeight="bold" cursor="pointer">
          Selengkapnya
        </Text>
      </CardFooter>
    </Card.Root>
  );
};
