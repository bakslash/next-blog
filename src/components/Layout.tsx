// components/Layout.tsx
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void;
}

export default function Layout({ children, onSearch }: LayoutProps) {
  return (
    <Box
      width="100%"
      maxWidth="1440px"
      mx="auto"
      position="relative"
     
      overflowX="hidden"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      border="1px solid #E0E0E0"

    >
      <Navbar onSearch={onSearch} />
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}
