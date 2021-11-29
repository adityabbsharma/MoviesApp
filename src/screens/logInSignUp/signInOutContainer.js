import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import Login from './LogIn'
import Signup from './signUp' 
const SignInOutContainer=(props)=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:340,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index} = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        //{...other}
      >
        {value === index && (
          <div>
            <Typography>{children}</Typography>
          </div>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="tabs example"
        >
          <Tab label="LOGIN" />
         
          <Tab label="REGISTER" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login {...props} logInSubmitHandler={props.logInSubmitHandler}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup {...props} signUpSubmitHandler={props.signUpSubmitHandler} userDetails={props.userDetails} setUserDetails={props.setUserDetails}/>
      </TabPanel>
      </Paper>
      
    )
}

export default SignInOutContainer;