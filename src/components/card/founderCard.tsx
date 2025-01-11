import { Card, Flex, Image, Text } from "@chakra-ui/react";
import ustad from "@/assets/images/ustad.jpg"
export const FounderCard = () => {
  return (
    <Card.Root maxW="100vh" overflow="hidden"  alignItems={"center"}>
      <Flex>
      <Image
      objectFit="cover"
       maxW="50vh"
        src={ustad}
        alt="Green double couch with wooden legs"
      />
      </Flex>
      <Card.Body gap="2" alignItems={"center"}>
        <Card.Title mb="2">Alm. Kh. Nurhasan Bin H.Muhammad</Card.Title>
        <Text color={"gray.300"}>Pendiri</Text>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, commodi. Odio blanditiis vel culpa sapiente, quaerat repellendus reiciendis recusandae itaque exercitationem repellat dolorem, quae distinctio consectetur nemo, excepturi nam voluptate.
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Text color={"green.500"}>Selengkapnya</Text>
      </Card.Footer>
    </Card.Root>
  );
};
