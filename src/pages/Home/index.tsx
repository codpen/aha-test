import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {
  Box,
  useTheme,
  useMediaQuery,
  Divider,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Follows from "../../components/Follows";
import CustomButton from "../../components/CustomButton";
import Logo from "../../assets/images/logo.svg";
import SearchContent from "../../components/SearchContent";

interface SearchDataType {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const CustomeInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 6,
      marginTop: "20px",
      position: "relative",
      backgroundColor: "background.transparent",
      border: "3px solid rgba(255, 255, 255, 0.5)",
      fontSize: 16,
      height: "34px",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: "#FF9B33",
      },
    },
  })
)(InputBase);

const CustomSlider = withStyles({
  root: {
    height: 7,
    padding: 0,
    margin: "30px 0px 30px 0px",
    width: "98%",
  },
  rail: {
    background: "#aac5f4",
    opacity: 0.7,
    height: 7,
    borderRadius: 7,
    overflow: "hidden",
  },
  track: {
    backgroundImage: `linear-gradient(.25turn, #FF5C01 0%, #FFD25F 100%)`,
    height: 7,
    borderRadius: 7,
    overflow: "hidden",
  },
  thumb: {
    height: 22,
    width: 22,
    marginTop: -8,

    backgroundColor: "#1B1B1B",
    "&:focus, &:hover": {
      boxShadow: "inherit",
    },
    border: "5px solid #FFD25F",
  },
})(Slider);

const Home = () => {
  const theme = useTheme();
  const missingFollows = useMediaQuery(theme.breakpoints.up(1440));
  const [perPage, setPerPage] = useState<number>(30);
  const [keyword, setKeyword] = useState<string | string[]>("");
  const [page, setPage] = useState<number>(1);
  const [searchData, setSearchData] = useState<SearchDataType[]>([]);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleSlider = (
    event: React.ChangeEvent<{}>,
    newPerPage: number | number[]
  ) => {
    setPerPage(newPerPage as number);
    console.log(perPage);
  };

  const handleSearch = () => {
    getTags();
  };

  const handleMore = () => {
    const newPage: number = page + 1;
    setPage(newPage);
    console.log(newPage);
    getTags();
  };

  async function getTags() {
    try {
      const url = `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${perPage}&keyword=${
        keyword === "" ? "a" : keyword
      }`;
      const response = await axios.get(url);
      setSearchData(response.data.data);
      console.log(searchData);
      console.log(searchData.length === 0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box display="flex" flexDirection="row" width="100%">
      <Box
        width={missingFollows ? "calc(100% - 635px)" : "100%"}
        marginX={{ md: "130px", xs: "20px" }}
        marginBottom="80px"
      >
        {searchData.length !== 0 ? (
          <Box width="100%" pb="39px">
            <Box
              display={{ md: "none", xs: "flex" }}
              alignItems="center"
              height="70px"
            >
              <IconButton
                component={Link}
                to={"/"}
                onClick={() => {
                  setSearchData([]);
                }}
              >
                <ArrowBackIosIcon sx={{ color: "#FFF" }} />
              </IconButton>
              <Typography fontSize="24px">Home Page</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              ml={{ md: "-19px", xs: "5px" }}
              mb="24px"
              mt={{ md: "92px", xs: "20px" }}
            >
              <IconButton
                component={Link}
                to={"/"}
                onClick={() => {
                  setSearchData([]);
                }}
                sx={{
                  display: { md: "flex", xs: "none" },
                  padding: 0,
                }}
              >
                <ArrowBackIosIcon sx={{ color: "#FFF" }} />
              </IconButton>
              <Typography fontSize="24px">Results</Typography>
            </Box>
            <SearchContent searchData={searchData} />
          </Box>
        ) : (
          <Box width="100%">
            <IconButton
              component={Link}
              to="/"
              sx={{
                display: { md: "none", xs: "flex" },
                width: "fit-content",
                mt: "28px",
                padding: "0px",
              }}
            >
              <Box component="img" src={Logo} width="35px" />
            </IconButton>
            <Typography
              mt={{ md: "54px", xs: "27px" }}
              fontSize="24px"
              lineHeight="150%"
            >
              Search
            </Typography>
            <CustomeInput
              placeholder="Keyword"
              fullWidth
              value={keyword}
              onChange={handleKeyword}
            />
            <Divider
              flexItem
              sx={{
                display: { md: "flex", xs: "none" },
                backgroundColor: "rgba(255,255,255,0.1)",
                my: "30px",
                borderBottomWidth: 2,
              }}
            />
            <Typography
              fontSize="24px"
              lineHeight="150%"
              mt={{ md: "none", xs: "28px" }}
              mb="20px"
            >
              # of results per page
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="baseline">
              <Typography
                mr="10px"
                fontSize="48px"
                lineHeight="150%"
                fontWeight="bold"
              >
                {perPage}
              </Typography>
              <Typography fontSize="16px" lineHeight="150%">
                Results
              </Typography>
            </Box>
            <Box width="100%">
              <CustomSlider value={perPage} onChange={handleSlider} />
              <Box width="100%" display="flex" justifyContent="space-between">
                {[0, 20, 40, 60, 80, 100].map((item, index) => (
                  <Typography
                    component="button"
                    onClick={() => {
                      setPerPage(item);
                    }}
                    key={index}
                    mt="-24px"
                    fontSize="16px"
                    color="gray"
                    bgcolor="transparent"
                    border="none"
                    padding="0px"
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Divider
              flexItem
              sx={{
                display: { md: "flex", xs: "none" },
                backgroundColor: "rgba(255,255,255,0.1)",
                my: "42px",
                borderBottomWidth: 2,
              }}
            />
            <Divider
              flexItem
              absolute
              sx={{
                display: { md: "none", xs: "flex" },
                width: "calc(100% - 40px)",
                marginLeft: "20px",
                bottom: "190px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderBottomWidth: 2,
              }}
            />
          </Box>
        )}
        <Box
          position="absolute"
          width={{ md: "340px", xs: "calc(100% - 40px)" }}
          height="40px"
          bottom={
            searchData.length === 0
              ? { md: "70px", xs: "80px" }
              : { md: "10px", xs: "80px" }
          }
        >
          <CustomButton
            variant="contained"
            width="100%"
            height="100%"
            borderRadius="4px"
            fontSize="14px"
            title={searchData.length === 0 ? "SEARCH" : "MORE"}
            onClick={searchData.length === 0 ? handleSearch : handleMore}
          />
        </Box>
      </Box>
      {missingFollows && <Follows />}
    </Box>
  );
};

export default Home;
