import Layout from "@/components/Layout";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { blogPosts } from "@/app/data/blogData";
import { useRouter } from "next/router";
import Image from 'next/image'; // Import next/image

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((post: { slug: string | string[] | undefined; }) => post.slug === slug);

  if (!post) return <Box>Post not found</Box>;

  return (
    <Layout>
      <Box p={5}>
        <Heading
          mb={4}
          fontFamily="Montserrat"
          fontSize="32px"
          fontWeight="700"
          lineHeight="40px"
          textAlign="center"
          mt="150px"
        >
          {post.title}
        </Heading>
        <Text
          mb={2}
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.5px"
          textAlign="center"
        >
          {post.date}
        </Text>
       
        <Center
          mt={4}
          width="100%" // Ensure the Center component spans the full width
        >
          <Box
            position="relative"
            width="100%" // Make the image responsive
            maxWidth="1076px" // Constrain max width
            height="300px"
            overflow="hidden"
          >
            <Image
              src={post.image.startsWith('/') ? post.image : `/${post.image}`} 
              alt={post.title}
              layout="fill"
              objectFit="cover"
              style={{
                opacity: '1',
              }}
            />
          </Box>
        </Center>
        
        <Text
          mt={4}
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.5px"
          textAlign="center"
        >
          {post.content}
        </Text>
      </Box>
    </Layout>
  );
};

export default PostPage;
