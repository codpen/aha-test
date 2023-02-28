import { Box, Typography } from "@mui/material";
import Search from "../assets/images/search.svg";

interface ContentProps {
  id?: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing?: boolean;
}

type SearchContentProps = {
  searchData: ContentProps[];
};

const SearchContent = ({ searchData }: SearchContentProps) => {
  return (
    <Box
      display="flex"
      justifyContent={{ md: "space-between", xs: "center" }}
      flexWrap="wrap"
      width="100%"
      height="70vh"
      sx={{
        overflowY: "auto",
      }}
    >
      {searchData?.map((item, index) => (
        <Content
          key={index}
          name={item.name}
          username={item.username}
          avatar={item.avatar}
        />
      ))}
    </Box>
  );
};

const Content = (data: ContentProps) => {
  const { name, username, avatar } = data;
  return (
    <Box
      mx={{ md: "17px", xs: "none" }}
      mb={{ md: "15px", xs: "40px" }}
      width={{ md: "219px", xs: "80%" }}
    >
      <Box component="img" src={Search} width="100%"></Box>
      <Typography mt="12px" fontSize="15px">
        {name}
      </Typography>
      <Typography fontSize="11px" color="gray">
        {username}
      </Typography>
    </Box>
  );
};

export default SearchContent;
