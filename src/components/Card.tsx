// components/Card.tsx
import { Box, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export default function Card({ title, excerpt, date, image, slug }: CardProps) {
  const cardWidth = useBreakpointValue({ base: "100%", sm: "337px" });

  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxW={cardWidth}
      mx="auto"
      ml="64px"
      overflow="hidden"
      border="1px solid #000000"
     
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
