import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FollowContents from "./FollowContents";

interface Followers {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const FollowTabs = () => {
  const [followerData, setFollowerData] = useState<Followers[]>();
  const [followingData, setFollowingData] = useState<Followers[]>();

  const tabs = [
    {
      value: "1",
      label: "Followers",
    },
    {
      value: "2",
      label: "Following",
    },
  ];

  async function getFollower() {
    try {
      const response = await axios.get(
        "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=30"
      );
      setFollowerData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getFollowing() {
    try {
      const response = await axios.get(
        "https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10"
      );
      setFollowingData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFollower();
    getFollowing();
  }, []);

  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box width="100%" height="100%" sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} variant="fullWidth">
            {tabs.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                value={item.value}
                sx={{
                  color: value !== item.value ? "grey.400" : "F00",
                  marginTop: "32px",
                  fontSize: "16px",
                  textTransform: "none",
                }}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "0px" }}>
          <FollowContents follows={followerData} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0px" }}>
          <FollowContents follows={followingData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FollowTabs;
