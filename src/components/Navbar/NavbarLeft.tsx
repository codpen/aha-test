import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import NavbarItem from "./NavbarItem";

const NavbarLeft = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Tags",
      path: "/tags",
    },
  ];
  return (
    <Box
      display={{ md: "flex", xs: "none" }}
      flexDirection="column"
      flexShrink={0}
      alignItems="center"
      width="80px"
      height="100%"
      sx={{
        backgroundColor: "background.navbar",
      }}
    >
      <IconButton
        component={Link}
        to="/"
        sx={{
          mt: "36px",
          padding: "0px",
        }}
      >
        <Box component="img" src={Logo} width="35px" />
      </IconButton>
      <Box display="flex" flexDirection="column" mt="44px">
        {navItems.map((item, index) => (
          <NavbarItem
            key={index}
            title={item.title}
            path={item.path}
            margin="0px 0px 24px 0px"
          />
        ))}
      </Box>
    </Box>
  );
};

export default NavbarLeft;
