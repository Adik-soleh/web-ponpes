import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BiHome, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box>
      <Box bg="#32642d" boxShadow="md" px={4}>
        <Flex alignItems="center" justifyContent="space-between" py={2}>
          <Box>
            <Flex gap={"0.5rem"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6Z69LzEfJ9r3Rg590m8F2F_GcxwZjLhm4g&s"
                alt="Logo"
                boxSize="50px"
              />
              <Flex flexDir={"column"}>
                <Text fontSize="lg" fontWeight="bold" color={"#fbbc05"}>
                  Pondok Pesantren Al-Arba'in
                </Text>
                <Text fontSize="sm" color={"white"}>
                  SMP - SMA Modern Islamic Boarding School
                </Text>
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
              <Text>nurussalam86@gmail.com</Text>
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
          <Link to="#informasi-biaya">Informasi Biaya Santri Baru</Link>
          <Link to="#berita">Berita</Link>
          <Link to="#galeri">Galeri</Link>
          <Link to="#hubungi-kami">Hubungi Kami</Link>
        </HStack>
      </Flex>
    </Box>
  );
};
