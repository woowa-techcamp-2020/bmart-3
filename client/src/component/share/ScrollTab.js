import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
    button: { padding: '0' },
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
    button: { padding: '0' },
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

function Category() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.demo2}>
      <StyledTabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        scrollButtons="off"
        variant="scrollable"
      >
        <StyledTab label="널 위한 상품" {...a11yProps(0)} />
        <StyledTab label="번쩍 할인" {...a11yProps(1)} />
        <StyledTab label="지금 뭐 먹지?" {...a11yProps(2)} />
        <StyledTab label="새로 나왔어요" {...a11yProps(3)} />
        <StyledTab label="요즘 잘 팔려요" {...a11yProps(4)} />
      </StyledTabs>
    </div>
  );
}

export default Category;
