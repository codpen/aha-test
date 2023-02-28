import { Box, Typography } from "@mui/material";

interface TagDataType {
  name: string;
  count: number;
}

const Tag = (props: TagDataType) => {
  const { name, count } = props;

  const handleTitle = (tagTitle: string, maxLength: number) => {
    return tagTitle.length <= maxLength
      ? tagTitle
      : tagTitle.slice(0, maxLength - 3) + "..";
  };

  return (
    <Box mx={{ md: "12px", xs: "none" }} mb={{ md: "36px", xs: "24px" }}>
      <Box
        position="relative"
        width="150px"
        height="150px"
        borderRadius="10px"
        bgcolor="#262626"
        mb="10px"
      >
        <Typography
          position="absolute"
          left="12px"
          bottom="12px"
          padding="4px 12px 4px 12px"
          component="span"
          fontSize="24px"
          fontWeight="bold"
          textTransform="capitalize"
          color="#FFFFFF"
          border="3px solid #FFFFFF"
          borderRadius="6px"
        >
          {handleTitle(name, 9)}
        </Typography>
      </Box>
      <Typography fontSize="14px">{handleTitle(name, 20)}</Typography>
      <Box display="flex" flexDirection="row">
        <Typography fontSize="12px" color="#B2B2B2">
          {count} results
        </Typography>
      </Box>
    </Box>
  );
};

export default Tag;
