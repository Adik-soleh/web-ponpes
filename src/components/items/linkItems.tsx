import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface LinkItemsProps {
  link?: string;
  title: string;
}

export function LinkItems({ link, title }: LinkItemsProps) {
  const navigate = useNavigate();
  return (
  
        <Box
          border={"1px solid"}
          borderColor={"#32642d"}
          p={"0.5rem"}
          maxW={"40vh"}
          onClick={() => navigate(`${link}`)}
        >
          <Text textAlign={"center"} fontWeight={"semibold"} color={"#495057"}>
            {title}
          </Text>
        </Box>
  );
}
