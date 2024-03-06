import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { bookSummeryData } from '../../data';
import BookCard from '../../components/cards/book-card/BookCard';


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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

    "& .book-container": {
      padding: "3rem",
      display: 'flex',
      // justifyContent:'center',
      alginItem: 'center',
      flexWrap: "wrap",
      gap: "10px",
    }
  },
}));

const BookSummery = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Personality Development" {...a11yProps(0)} />
          <Tab label="Psychology" {...a11yProps(1)} />
          <Tab label="Spirituality" {...a11yProps(2)} />
          <Tab label="Career Development" {...a11yProps(3)} />
        </Tabs>
      </AppBar>


    
      <TabPanel value={value} index={0}>
        <div className='book-container'>
          {
            bookSummeryData.map((e, i) => (
              <div className='' key={i}>
                <BookCard
                  data={e}
                />
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='book-container'>
          {
            bookSummeryData.map((e, i) => (
              <div className='' key={i}>
                <BookCard
                  data={e}
                />
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='book-container'>
          {
            bookSummeryData.map((e, i) => (
              <div className='' key={i}>
                <BookCard
                  data={e}
                />
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className='book-container'>
          {
            bookSummeryData.map((e, i) => (
              <div className='' key={i}>
                <BookCard
                  data={e}
                />
              </div>
            ))
          }
        </div>
      </TabPanel>
    </div>
  )
}

export default BookSummery
