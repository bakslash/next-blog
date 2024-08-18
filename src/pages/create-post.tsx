import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from 'next/image';
import Layout from "@/components/Layout";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !date || !excerpt || !slug || !image) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const imageBase64 = await convertImageToBase64(image);
    console.log({ title, date, excerpt, slug, imageBase64 });

    toast({
      title: "Success",
      description: "Post created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    router.push("/"); // Redirect to the home page after successful submission
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <Layout>
      <Box
        width="704px"
        height="742px"
        p="20px"
        borderRadius="8px 0px 0px 0px"
        mx="auto"
        mt="150px"

        mb="50px"
        position="relative"
        bg="white"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="16px"
      >
        <h5>
          Create New Post
        </h5>
        
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl  isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              height="32px"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
             
            />
          </FormControl>
          <FormControl  isRequired>
            <FormLabel size="sm">Date</FormLabel>
            <Input
              type="date"
              height="32px"
              value={date}
              onChange={(e) => setDate(e.target.value)}
             
            />
          </FormControl>
          <FormControl  isRequired>
            <FormLabel>Slug</FormLabel>
            <Input
              value={slug}
              height="32px"
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Enter post slug"
             
            />
          </FormControl>
          <FormControl  isRequired>
            <FormLabel>Image Upload</FormLabel>
            <Input
              type="file"
              accept="image/*"
              height={196}
              onChange={handleImageChange}
             
            />
            {imagePreview && (
              <Center mt={3}>
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  width={200}
                  height="174px"
                  objectFit="cover"
                />
              </Center>
            )}
          </FormControl>
          <FormControl mb={3} isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              height="138px"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Enter post content"
              
            />
          </FormControl>
          
          <Button colorScheme="teal" type="submit" width="120px">
            Save Changes
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default CreatePostPage;
