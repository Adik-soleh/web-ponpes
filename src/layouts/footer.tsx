import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Box bg="#32642d" color="white" py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW="8xl"
          mx="auto"
          px={{ base: 4, md: 8 }}
          justify="space-between"
        >
          <VStack align="start" mb={{ base: 8, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" color={"#fbbc05"}>
              Pondok Pesantren Al-Arba'in
            </Text>
            <HStack>
              <Text>
                Jalan Madrasah No. 86 Kp. Panggulan Pengasinan Sawangan Kota
                Depok
              </Text>
            </HStack>
            <HStack>
              <BiPhone />
              <Text>081513569200</Text>
            </HStack>
            <HStack>
              <MdEmail />
              <Text>arbain@gmail.com</Text>
            </HStack>
          </VStack>

          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Ikuti Kami
            </Text>
            <HStack>
              <Link
                to="https://www.instagram.com/pp.alarbain_official?igsh=MW5neXg0ZHQ5a2FzaQ=="
              >
                <FaInstagram color="white" />
              </Link>
              <Link to="#">
                <FaFacebook color="white" />
              </Link>
              <Link to="https://www.youtube.com/@ppal-arbain9085">
                <BsYoutube color="white" />
              </Link>
            </HStack>
          </VStack>
        </Flex>

        <Text textAlign="center" mt={10} fontSize="sm">
          &copy; {new Date().getFullYear()} Pondok Pesantren Al-Arba'in. All
          rights reserved.
        </Text>
      </Box>
    </>
  );
};
