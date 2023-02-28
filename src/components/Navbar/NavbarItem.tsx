import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import NavIcon from "../../assets/images/nav-icon.svg";
import { Link, useLocation } from "react-router-dom";

interface NavbarItemProps {
  title: string;
  path: string;
  margin?: string;
  onClick?: () => void;
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title, path, margin, onClick } = props;
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(path === pathname);
  }, [path, pathname]);

  return (
    <IconButton
      onClick={onClick}
      component={Link}
      to={path}
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: { margin },
        padding: 0,
      }}
    >
      <Box
        component="img"
        src={NavIcon}
        width="24px"
        sx={{
          opacity: isOpen ? "100%" : "50%",
        }}
      />
      <Typography
        color="#FFF"
        fontSize="12px"
        lineHeight="150%"
        sx={{
          opacity: isOpen ? "100%" : "0%",
        }}
      >
        {title}
      </Typography>
    </IconButton>
  );
};

export default NavbarItem;
