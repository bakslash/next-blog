import Layout from "@/components/Layout";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { blogPosts } from "@/app/data/blogData";
import { useRouter } from "next/router";
import Image from 'next/image'; // Import next/image

interface PostPageProps {
  onSearch: (query: string) => void; // Define onSearch prop
}

const PostPage = ({ onSearch }: PostPageProps) => {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is a string
  const post = typeof slug === "string" ? blogPosts.find((post) => post.slug === slug) : null;

  if (!post) return <Box>Post not found</Box>;

  return (
    <Layout onSearch={onSearch}>
      <Box p={2} minHeight="700px" height="1432px" pt="158px"  border="">
        <Box ml="76px">
          
          <Heading as='h6' size='xs'
            mb={2} 
            onClick={() => router.push("/")} 
            cursor="pointer" 
          >
            Back to Home
          </Heading>
        </Box>
        
        <Heading
          fontSize="32px"
          fontWeight="700"
          lineHeight="40px"
          textAlign="center"
          mt="60px" 
        >
          {post.title}
        </Heading>
        <Text
          mb={2}
          
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.5px"
          textAlign="center"
          mt="10px" 
        >
          {post.date}
        </Text>

        <Center
          mt="80px"
          width="100%"
        >
          <Box
            position="relative"
            width="100%"
            maxWidth="1076px"
            height="366px"
            overflow="hidden"
          >
            <Image
              src={post.image.startsWith('/') ? post.image : `/${post.image}`}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              style={{
                opacity: 1,
              }}
            />
          </Box>
        </Center>
<Box height="414px" 
border=""><Text
          mt={8}
          
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.5px"
          textAlign="center"
        >
          {post.content}
        </Text></Box>
        
      </Box>
    </Layout>
  );
};

export default PostPage;
