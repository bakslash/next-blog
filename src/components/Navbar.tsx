// components/Navbar.tsx
'use client';

import { Box, Input, Button, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  return (
    <Box
      width="100%"
      maxWidth="1440px"
      height="83px"
      bg="#D9D9D9"
      display="flex"
      alignItems="center"
      px={{ base: 4, sm: 6 }}
      position="fixed"
      top="0"
      zIndex="1000"
      justifyContent="flex-end"
    >
      <InputGroup width={{ base: "200px", sm: "300px" }} mr={4}>
        <Input
          placeholder="Search posts"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          pr="3rem"
        />
        <InputRightElement>
          <Icon
            as={SearchIcon}
            color="gray.500"
            cursor="pointer"
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
      <Button colorScheme="teal" size="sm" mt={{ base: 2, sm: 0 }}>
        Create Blog Post
      </Button>
    </Box>
  );
};

export default Navbar;
