// components/Footer.tsx
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      width="100%"
      maxWidth="1440px"
      height="83px"
      bg="#D9D9D9"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      borderTop="1px solid #E0E0E0"
      position="relative"
      mx="auto" 
      
    >
      <Text fontSize="sm" color="gray.700" mr={4}>
        © {new Date().getFullYear()}   All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
