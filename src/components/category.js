import React from 'react';
import { connect } from 'react-redux';
import { productBaseCategory } from '../store/categories';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
  
//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
  
const Categories = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  centered>
          {props.counter.categories.map((cat) =>
            <Tab
              div="true"
              onClick={() => props.allBaseCategory(cat.name)}
              key={cat.displayName}
              label={cat.displayName}  />,
                           
          )}
        </Tabs> */}
       
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  centered>
          {props.counter.categories.map((category) =>
            <Tab
              div="true"
              onClick={() => props.productBaseCategory(category.name)}
              key={category.displayName}
              label={category.displayName}  />,
                           
          )}
        </Tabs>
      </AppBar>
       
    </div>
  );
};

//As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. I

const mapStateToProps = state => ({
  counter: state.product,
});

const mapDispatchToProps = { productBaseCategory };

// connect :it listen to the store 

export default connect(mapStateToProps, mapDispatchToProps)(Categories);