import React, { useContext, createRef, useEffect } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { EventScrollContext } from 'context/EventScrollContext';
import ProductForYou from 'component/mainpage/ProductForYou';
import WhatToEat from 'component/mainpage/WhatToEat';
import NewRelease from 'component/mainpage/NewRelease';
import PopularItems from 'component/mainpage/PopularItems';
import Recommend from 'component/mainpage/Recommend';
import { RecommendContextProvider } from 'context/RecommendContext';

const StickyContainer = styled.div`
  position: sticky;
  top: -3px;
  z-index: 1;
  margin-top: -5px;
`;

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

function EventScrollTab() {
  const classes = useStyles();
  const [data, value, setValue] = useContext(EventScrollContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const list = [1, 2, 3, 4, 5];
  const refs = list.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});

  const moveTo = (id) => {
    const y = refs[id].current.getBoundingClientRect().top + window.scrollY - 45;
    window.scroll({ top: y });
  };

  const onScroll = () => {
    const one = document.querySelector('.ref-1').getBoundingClientRect().bottom;
    const two = document.querySelector('.ref-2').getBoundingClientRect().bottom;
    const three = document.querySelector('.ref-3').getBoundingClientRect().bottom;
    const four = document.querySelector('.ref-4').getBoundingClientRect().bottom;
    if (one > 0 && value === 1) {
      setValue(0);
    }
    if (one + 180 < 0 && value === 0) {
      setValue(1);
    } else if (two > 0 && value === 2) {
      setValue(1);
    }
    if (two + 220 < 0 && value === 1) {
      setValue(2);
    } else if (three > 0 && value === 3) {
      setValue(2);
    }
    if (three + 190 < 0 && value === 2) {
      setValue(3);
    } else if (three + 190 > 0 && value === 4) {
      setValue(3);
    }
    if (four + 190 < 0 && value === 3) {
      setValue(4);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [value]);

  return (
    <>
      <StickyContainer>
        <div className={classes.demo2}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            scrollButtons="off"
            variant="scrollable"
          >
            {data.map((item, idx) => (
              <StyledTab
                key={`styled-tab-${idx}`}
                label={item.title}
                {...a11yProps({ idx })}
                onClick={() => moveTo(idx + 1)}
              />
            ))}
          </StyledTabs>
        </div>
      </StickyContainer>
      <div ref={refs[1]} className={'ref-1'}></div>
      <ProductForYou />
      <div ref={refs[2]} className={'ref-2'}></div>
      <RecommendContextProvider>
        <Recommend />
      </RecommendContextProvider>
      <div ref={refs[3]} className={'ref-3'}></div>
      <WhatToEat />
      <div ref={refs[4]} className={'ref-4'}></div>
      <NewRelease />
      <div ref={refs[5]} className={'ref-5'}></div>
      <PopularItems />
    </>
  );
}

export default EventScrollTab;
