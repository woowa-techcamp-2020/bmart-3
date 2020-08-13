import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Category.scss";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Category() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        scrollButtons="off"
        variant="scrollable"
      >
        <LinkTab label="💘 널 위한 상품" href="/drafts" {...a11yProps(0)} />
        <LinkTab label="번쩍 할인" href="/trash" {...a11yProps(1)} />
        <LinkTab label="지금 뭐 먹지?" href="/spam" {...a11yProps(2)} />
        <LinkTab label="새로 나왔어요" href="/spam" {...a11yProps(3)} />
        <LinkTab label="요즘 잘 팔려요" href="/spam" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </>
  );
}

export default Category;
