import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BiHome, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.jpg";

export const Header = () => {
  return (
    <Box>
      <Box bg="#32642d" boxShadow="md" px={4}>
        <Flex alignItems="center" justifyContent="space-between" py={2}>
          <Box>
            <Flex gap={"0.5rem"}>
              <Image src={logo} alt="Logo" boxSize="50px" />
              <Flex flexDir={"column"}>
                <Text fontSize="lg" fontWeight="bold" color={"#fbbc05"}>
                  Pondok Pesantren Al-Arba'in
                </Text>
                <Text fontSize={"12px"} color={"white"}>Yayasan Al-Arba'in Al-Mukhtariyyah</Text>
              </Flex>
            </Flex>
          </Box>

          <HStack display={{ base: "none", md: "flex" }} color={"white"}>
            <HStack>
              <BiPhone />
              <Text>081513569200</Text>
            </HStack>
            <HStack>
              <MdEmail />
              <Text>arbain@gmail.com</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        bgColor={"green.800"}
        width={"100%"}
      >
        <HStack gap={"1.5rem"} color={"white"} p={2}>
          <Link to="/">
            <BiHome />
          </Link>
          <Link to="/profile">Profil</Link>
          <Link to="#visi-misi">Visi dan Misi</Link>
          <Link to="#struktur-organisasi">Struktur Organisasi</Link>
          <Link to="#berita">Berita</Link>
          <Link to="#galeri">Galeri</Link>
          <Link to="#hubungi-kami">Hubungi Kami</Link>
        </HStack>
      </Flex>
    </Box>
  );
};
