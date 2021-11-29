import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, InputLabel, Input } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
const Signup = ({ signUpSubmitHandler, userDetails, setUserDetails }) => {
    // const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const btnstyle = { margin: '15px 100px' }
    const [userDetailsTemp, setUserDetailsTemp] = useState({
        "first_name": "",
        "last_name": "",
        "email_address": "",
        "mobile_number": "",
        "password": ""
    });
    const inputChangedHandler = (e) => {
        const state = userDetailsTemp;
        state[e.target.name] = e.target.value;
        setUserDetailsTemp({ ...state });
    }
    const signUpSubmitSetUpHandler = (event) => {
        //const state = userDetailsTemp;
        // setUserDetails({
        //     "first_name": userDetailsTemp.first_name,
        //     "last_name": userDetailsTemp.last_name,
        //     "email_address": userDetailsTemp.email_address,
        //     "mobile_number": userDetailsTemp.mobile_number,
        //     "password": userDetailsTemp.password
        // });
        console.log("userDetailsTemp.email_address=" + userDetailsTemp.email_address);
        console.log("userDetails.email_address=" + userDetails.email_address);
        signUpSubmitHandler(event,userDetailsTemp);
    }


    return (
        <Grid>
            <Paper style={paperStyle}>
                <form onSubmit={signUpSubmitSetUpHandler}>
                    <TextField placeholder="First Name" fullWidth label="firstName" required name="first_name" value={userDetailsTemp.first_name} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">First Name</InputLabel>
                            <Input id="my-input" name="first_name" />
                        </FormControl>
                    </TextField>
                    <TextField placeholder="Last Name" fullWidth label="lastName" required name="last_name" value={userDetailsTemp.last_name} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Last Name</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </TextField>
                    <TextField placeholder="Email" fullWidth label="Email" required name="email_address" value={userDetailsTemp.email_address} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </TextField>
                    <TextField placeholder="Password" fullWidth label="Password" type='password' required name="password" value={userDetailsTemp.password} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </TextField>
                    <TextField placeholder="Contact No" fullWidth label="Contact No" name="mobile_number" value={userDetailsTemp.mobile_number} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Conact No</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </TextField>
                    <Button type='submit' variant='contained' color='primary' style={btnstyle} >Register</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;