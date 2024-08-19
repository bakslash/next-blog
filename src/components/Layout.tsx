"use client";
import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation"; 

interface LayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void; 
}

const Layout = ({ children, onSearch }: LayoutProps) => {
  const router = useRouter(); 


  return (
    <>
      <Box width="100%" maxWidth="1440px" mx="auto" position="relative">
        <Navbar onSearch={onSearch}/>
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
