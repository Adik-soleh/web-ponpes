import { Box, Flex } from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

const Layout = () => {
  return (
    <Flex direction="column" minHeight="200vh">
      <Header />

      <Box flex="1" as="main" py={4}>
        <Outlet />
      </Box>

      <Footer />
    </Flex>
  );
};

export default Layout;
