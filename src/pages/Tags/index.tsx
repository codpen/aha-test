import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Tag from "../../components/Tag";

interface TagDataType {
  id: string;
  name: string;
  count: number;
}

const Tags = () => {
  const [tagData, setTagData] = useState<TagDataType[]>();

  async function getTags() {
    try {
      const response = await axios.get(
        "https://avl-frontend-exam.herokuapp.com/api/tags"
      );
      setTagData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <Box
      px={{ lg: "258px", md: "20px", xs: "20px" }}
      mb={{ md: "0px", xs: "66px" }}
      sx={{ overflowY: "auto" }}
    >
      <Box
        display={{ md: "none", xs: "flex" }}
        alignItems="center"
        height="70px"
      >
        <IconButton component={Link} to={"/"}>
          <ArrowBackIosIcon sx={{ color: "#FFF" }} />
        </IconButton>
        <Typography fontSize="24px">Home Page</Typography>
      </Box>
      <Typography
        mt={{ md: "80px", xs: "20px" }}
        fontSize="30px"
        lineHeight="150%"
      >
        Tags
      </Typography>
      <Box
        mt="24px"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {tagData?.map((item, index) => (
          <Tag key={index} name={item.name} count={item.count} />
        ))}
      </Box>
    </Box>
  );
};

export default Tags;
