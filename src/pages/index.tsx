// pages/index.tsx
import { useState } from "react";
import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { blogPosts } from "../app/data/blogData";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Layout from "@/components/Layout";

const POSTS_PER_PAGE = 9;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <Layout >
    <Box>
    <Navbar onSearch={handleSearch} />
    <Box mt="83px" p={5}>
      <Heading mb="80px" textAlign="left" mt="97px" ml="74px">
        The Accessibility Blog
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
        {paginatedPosts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </SimpleGrid>
      <Box mt={5} display="flex" justifyContent="center" flexWrap="wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            mx={1}
            mt={2}
            isActive={currentPage === i + 1}
          >
            {i + 1}
          </Button>
        ))}
      </Box>
    </Box>
  </Box>
  </Layout>
  );
}
