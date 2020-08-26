import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { CategoryContext } from 'context/CategoryContext';
import { ProductScrollContext } from 'context/ProductScrollContext';

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    '& > span': {
      maxWidth: 50,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    textShadow: '1px 1px 2px #ff0000',
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  demo2: {
    backgroundColor: '#ffcccc',
  },
}));

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function ProductScrollTab() {
  const classes = useStyles();
  const [categoryList] = useContext(CategoryContext);
  const [value, setValue] = useContext(ProductScrollContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StickyContainer>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          scrollButtons="off"
          variant="scrollable"
        >
          {categoryList.map((item, idx) => (
            <StyledTab key={`styled-tab-${idx}`} label={item.name} {...a11yProps({ idx })} />
          ))}
        </StyledTabs>
      </div>

      {categoryList.map((item, idx) => (
        <TabPanel value={value} index={idx} key={`product-scroll-tabpanel-${idx}`}></TabPanel>
      ))}
    </StickyContainer>
  );
}

export default ProductScrollTab;
