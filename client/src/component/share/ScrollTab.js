import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function Category() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      scrollButtons="off"
      variant="scrollable"
    >
      <Tab label="💘 널 위한 상품" {...a11yProps(0)} />
      <Tab label="번쩍 할인" {...a11yProps(1)} />
      <Tab label="지금 뭐 먹지?" {...a11yProps(2)} />
      <Tab label="새로 나왔어요" {...a11yProps(3)} />
      <Tab label="요즘 잘 팔려요" {...a11yProps(4)} />
    </Tabs>
  );
}

export default Category;
