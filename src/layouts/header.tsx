import logo from "@/assets/images/logo.jpg";
import { Button } from "@/components/ui/button";
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BiHome, BiMenu, BiPhone, BiX } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box>
      {/* Header Atas */}
      <Box bg="#32642d" boxShadow="md" px={4}>
        <Flex alignItems="center" justifyContent="space-between" py={2}>
          {/* Logo dan Nama Pondok */}
          <Flex gap="0.5rem" alignItems="center">
            <Image src={logo} alt="Logo" boxSize="50px" />
            <Flex flexDir="column">
              <Text fontSize="lg" fontWeight="bold" color="#fbbc05">
                Pondok Pesantren Al-Arba'in
              </Text>
              <Text fontSize="12px" color="white">
                Yayasan Al-Arba'in Al-Mukhtariyyah
              </Text>
            </Flex>
          </Flex>

          {/* Kontak (Hidden di mobile) */}
          <HStack display={{ base: "none", md: "flex" }} color="white">
            <HStack>
              <BiPhone />
              <Text>081513569200</Text>
            </HStack>
            <HStack>
              <MdEmail />
              <Text>arbain@gmail.com</Text>
            </HStack>
          </HStack>

          {/* Toggle Button untuk Mobile */}
          <Button
            aria-label="Toggle Menu"
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            variant="outline"
            color="white"
          >
            {isOpen ? <BiX /> : <BiMenu />}
          </Button>
        </Flex>
      </Box>

      {/* Navigasi Desktop */}
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        bgColor="green.800"
        width="100%"
        px={4}
        display={{ base: "none", md: "flex" }}
      >
        <HStack gap="1.5rem" color="white">
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

      {/* Navigasi Mobile */}
      {isOpen && (
        <VStack
          gap={4}
          bg="green.800"
          color="white"
          p={4}
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          textAlign="center" 
          w="full" 
        >
          <Link to="/" onClick={toggleMenu}>
            <BiHome /> 
          </Link>
          <Link to="/profile" onClick={toggleMenu}>
            Profil
          </Link>
          <Link to="#visi-misi" onClick={toggleMenu}>
            Visi dan Misi
          </Link>
          <Link to="#struktur-organisasi" onClick={toggleMenu}>
            Struktur Organisasi
          </Link>
          <Link to="#berita" onClick={toggleMenu}>
            Berita
          </Link>
          <Link to="#galeri" onClick={toggleMenu}>
            Galeri
          </Link>
          <Link to="#hubungi-kami" onClick={toggleMenu}>
            Hubungi Kami
          </Link>
        </VStack>
      )}
    </Box>
  );
};
