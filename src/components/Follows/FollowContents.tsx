import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton";

interface Followers {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

type FollowProps = {
  follows?: Followers[];
};

type ContentProps = {
  data: Followers;
};

const Content = ({ data }: ContentProps) => {
  const { id, name, username, avatar, isFollowing } = data;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="16px"
    >
      <Box display="flex">
        <Box
          component="img"
          src={avatar}
          width="40px"
          borderRadius="6px"
          border="1px solid"
        />
        <Box ml="15px">
          <Typography fontSize="16px">{name}</Typography>
          <Typography fontSize="14px" color="gray">
            {username}
          </Typography>
        </Box>
      </Box>
      <CustomButton
        title={isFollowing ? "Following" : "Follow"}
        variant={isFollowing ? "contained" : "outlined"}
        width="76px"
        height="28px"
        fontSize="12px"
        borderRadius="20px"
      />
    </Box>
  );
};

const FollowContents = ({ follows }: FollowProps) => {
  return (
    <Box padding="16px" className="content">
      {follows &&
        follows.map((item, index) => <Content key={index} data={item} />)}
    </Box>
  );
};

export default FollowContents;
