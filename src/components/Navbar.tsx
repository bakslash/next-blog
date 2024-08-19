"use client";
import { Box, Input, Button, InputGroup, InputRightElement, Icon, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);

    }
    
  };

  const handleCreatePostClick = () => {
    router.push("/create-post");
  };

  return (
    <Box
      width="100%"
      maxWidth="1440px"
      border="1px solid"
      height="83px"
      bg="#D9D9D9"
      display="flex"
      alignItems="center"
      px={{ base: 4, sm: 6 }}
      position="fixed"
      top="0"
      zIndex="1000"
      justifyContent="space-between"
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

      <Box display="flex" alignItems="center">
        <InputGroup width={{ base: "200px", sm: "300px" }} mr={4}>
          <Input
            placeholder="Search posts"
            border="1px solid #454545"
            height="44px"

            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            pr="3rem"
          />
          <InputRightElement width="3rem">
            <Icon
              as={SearchIcon}
              height="20px"
              color="gray.500"
              cursor="pointer"
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>
        <Button
          colorScheme="#8E8E8E;"
          height="44px"
          width="154px"
          size="sm"
          mt={{ base: 2, sm: 0 }}
          onClick={handleCreatePostClick}
        >
          Create Blog Post
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
