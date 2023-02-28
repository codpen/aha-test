import { Box } from "@mui/material";
import NavbarItem from "./NavbarItem";

const NavbarBottom = () => {
  const navItems = [
    {
      title: "",
      path: "/",
    },
    {
      title: "",
      path: "/tags",
    },
  ];
  return (
    <Box width="100%" display={{ md: "none", xs: "flex" }}>
      <Box
        position="absolute"
        width="100%"
        height="50px"
        bottom="0px"
        overflow="hidden"
        display="flex"
        justifyContent="space-around"
      >
        <Box bgcolor="#333333" width="40%" height="150px" />
        <Box bgcolor="#333333" width="40%" height="150px" />
      </Box>
      <Box
        display={{ md: "none", xs: "flex" }}
        flexShrink={0}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom="0px"
        width="100vw"
        height="66px"
        sx={{
          background: "rgba(24, 24, 24, 0.2)",
          boxShadow: "inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(27.1828px)",
        }}
      >
        {navItems.map((item, index) => (
          <NavbarItem
            key={index}
            title={item.title}
            path={item.path}
            margin={
              index === navItems.length - 1
                ? "0px 0px 0px 0px"
                : "0px 54px 0px 0px"
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default NavbarBottom;
