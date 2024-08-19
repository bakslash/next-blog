// components/Footer.tsx
import { Box, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      width="100%"
      maxWidth="1440px"
      height="110px"
      bg="#D9D9D9"
      display="flex"
      alignItems="center"
      justifyContent="space-between" 
      borderTop="1px solid #E0E0E0"
      position="relative"
      mx="auto"
      px={4} 
    >
      <Box position="relative" top="5px" left="70px">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width="144px"
          height="57px"
          style={{ gap: "0px", opacity: "1" }} 
        />
      </Box>
      <Text fontSize="sm" color="gray.700" mr={4}>
        © {new Date().getFullYear()} All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
