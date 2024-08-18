// components/Layout.tsx
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void; // Pass down the search function
}

export default function Layout({ children, onSearch }: LayoutProps) {
  return (
    <Box width="100%" maxWidth="1440px" mx="auto" position="relative" >
      <Navbar onSearch={onSearch} />
      <Box> {/* Adjust for Navbar height */}
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
