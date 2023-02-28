import { Box } from "@mui/material";
import FollowTabs from "./Tabs";

const Follows = () => {
  return (
    <Box
      position="absolute"
      right="0px"
      width="375px"
      height="100vh"
      sx={{
        backgroundColor: "background.navbar",
        overflowY: "scroll",
      }}
    >
      <FollowTabs />
    </Box>
  );
};

export default Follows;
