import React,{useState} from 'react'
import { Grid,Paper, TextField, Button, FormControl,Input,InputLabel} from '@material-ui/core'
const Login=({logInSubmitHandler})=>{
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const btnstyle={margin:'8px 0'}
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
    const logInSubmitSetUpHandler = (event) => {
        //const state = userDetailsTemp;
        // setUserDetails({
        //     "first_name": userDetailsTemp.first_name,
        //     "last_name": userDetailsTemp.last_name,
        //     "email_address": userDetailsTemp.email_address,
        //     "mobile_number": userDetailsTemp.mobile_number,
        //     "password": userDetailsTemp.password
        // });
        console.log("userDetailsTemp.email_address=" + userDetailsTemp.email_address);
        
        logInSubmitHandler(event,userDetailsTemp);
    }
    return(
        <Grid>
            <Paper  style={paperStyle}>
            <form onSubmit={logInSubmitSetUpHandler}>
                <TextField placeholder="Username" fullWidth label="Username" required name="email_address" value={userDetailsTemp.email_address} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">username</InputLabel>
                            <Input id="my-input" />                            
                        </FormControl>
                    </TextField>
                    <TextField placeholder="Password" fullWidth label="Password" type='password' required name="password" value={userDetailsTemp.password} onChange={inputChangedHandler}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input id="my-input" />                            
                        </FormControl>
                    </TextField>           
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>LOGIN</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login