import React, { useContext } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { EventScrollContext } from 'context/EventScrollContext';
import { RecommendContextProvider } from 'context/RecommendContext';
import { MoreBtn } from 'component/mainpage/RecommendStyle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.size.mmd};
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

function Category() {
  const classes = useStyles();
  const [data, value, setValue] = useContext(EventScrollContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          scrollButtons="off"
          variant="scrollable"
        >
          {data.map((item, idx) => (
            <StyledTab key={`styled-tab-${idx}`} label={item.title} {...a11yProps({ idx })} />
          ))}
        </StyledTabs>
      </div>

      {data.map((item, idx) => (
        <RecommendContextProvider key={`tabpanel-${idx}`}>
          <TabPanel value={value} index={idx}>
            {idx === 1 ? (
              ''
            ) : (
              <Container>
                <Header>{item.title}</Header>
                <MoreBtn>더보기 > </MoreBtn>
              </Container>
            )}
            {item.component || '아직 컴포넌트 없음'}
          </TabPanel>
        </RecommendContextProvider>
      ))}
    </>
  );
}

export default Category;
