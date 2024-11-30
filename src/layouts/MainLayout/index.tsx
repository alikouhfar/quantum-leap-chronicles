import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const MainLayout: React.FC = () => {
  return (
    <Box component="div" display="flex" height="100vh">
      <Sidebar />
      <Box component="main" className="flex-1">
        <Header />
        <Box component="article" className="px-10">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
