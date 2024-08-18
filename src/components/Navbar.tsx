// components/Navbar.tsx
import { Box, Input, Button, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      // Reset the search when query is empty
      onSearch(""); // Notify parent component to reset search
    } else {
      onSearch(searchQuery);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Reset search when input is cleared
    if (e.target.value.trim() === "") {
      onSearch(""); // Notify parent component to reset search
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
      mx="auto"
    >
      <InputGroup width={{ base: "200px", sm: "300px" }} mr={4}>
        <Input
          placeholder="Search posts"
          onChange={handleInputChange}
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
