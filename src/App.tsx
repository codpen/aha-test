import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import NavbarLeft from "./components/Navbar/NavbarLeft";
import NavbarBottom from "./components/Navbar/NavbarBottom";

function App() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent={{ md: "none", xs: "space-between" }}
      width="100%"
      height="100vh"
      overflow="auto"
    >
      <NavbarLeft />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tags" element={<Tags />} />
      </Routes>
      <NavbarBottom />
    </Box>
  );
}

export default App;
