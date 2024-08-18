import { Box, Input, Button, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Initialize router

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  const handleCreatePostClick = () => {
    router.push("/create-post"); // Navigate to the create post page
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
      <Button 
        colorScheme="teal" 
        size="sm" 
        mt={{ base: 2, sm: 0 }}
        onClick={handleCreatePostClick} // Add onClick handler
      >
        Create Blog Post
      </Button>
    </Box>
  );
};

export default Navbar;
