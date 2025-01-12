import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface AuthLayoutsProps {
  children: React.ReactNode;
  title: string;
  text: string;
  link: string;
  target: string;
}
function AuthLayouts({
  children,
  title,
  text,
  link,
  target,
}: AuthLayoutsProps) {
  return (
    <>
      <Box w="400px" m="auto" mt="5rem">
        <Heading mb="1rem" color={"#32642d"} fontWeight={"bold"}>
          {title}
        </Heading>
        {children}
        <Flex gap={"0.5rem"} mt={"1rem"}>
          <Text>{text}</Text>
          <Link to={link}>
            <Text color={"#32642d"}>{target}</Text>
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default AuthLayouts;
