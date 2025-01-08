import { Box, Card, Flex, Image, Spacer } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import datas from "@/data/dummy";

export function ListCarsEven() {
  return (
    <>
      <Flex flexDir={"column"} gap={"1rem"} mt={"1rem"} w={"100%"}>
        {datas.map((data) => (
          <Card.Root
            flexDirection="row"
            overflow="hidden"
            maxW="120vh"
            key={data.id}
          >
            <Image
              maxW="20vh"
              maxH={"30vh"}
              src={data.image}
              alt="Caffe Latte"
            />
              <Box >
                <Card.Body>
                  <Card.Title mb="2">{data.title}</Card.Title>
                  <Card.Description>{data.desc}</Card.Description>
                </Card.Body>
              </Box>
              <Spacer/>
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
      </Flex>
    </>
  );
}
