import ustad from "@/assets/images/ustad.jpg";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const FounderCard = () => {
  return (
    <Box>
      <Text fontWeight={"bolder"} fontSize={"2xl"} mb="1rem">
        Profile Pendiri
      </Text>
      <Card.Root
        mt={"1rem"}
        maxW="100%"
        boxShadow="md"
        borderRadius="md"
        alignItems="center"
      >
        <Flex justify="center">
          <Image
            objectFit="cover"
            w="100%"
            h={{ base: "200px", md: "300px" }}
            src={ustad}
            alt="Foto Pendiri"
          />
        </Flex>
        <CardBody textAlign="center">
          <Heading mb="2" fontSize={{ base: "lg", md: "xl" }}>
            Alm. Kh. Nurhasan Bin H. Muhammad
          </Heading>
          <Text color="gray.500" fontWeight="bold">
            Pendiri
          </Text>
          <Text mt="2" fontSize={{ base: "sm", md: "md" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            commodi...
          </Text>
        </CardBody>
        <CardFooter justifyContent="center">
          <Text color="green.500" fontWeight="bold" cursor="pointer">
            Selengkapnya
          </Text>
        </CardFooter>
      </Card.Root>
    </Box>
  );
};
