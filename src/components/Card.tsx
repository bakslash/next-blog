import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export default function Card({ title, excerpt, date, image, slug }: CardProps) {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxW={{ base: "full", sm: "337px" }} // Responsive max width
      mx="auto"
      overflow="hidden" // Prevent overflow
    >
      <Image
        src={image}
        alt={title}
        borderRadius="md"
        mb={4}
        width="100%"
        height="auto"
        objectFit="cover"
      />
      <Heading fontSize="lg" mb={2}>
        <Link href={`/posts/${slug}`}>{title}</Link>
      </Heading>
      <Text mb={2}>{excerpt}</Text>
      <Text color="gray.500">{date}</Text>
    </Box>
  );
}
