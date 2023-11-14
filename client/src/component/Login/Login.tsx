import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setFlag } from "../../app/flagSlice";


export default function LogIn() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const dispatch = useAppDispatch()
  // const open2 = useAppSelector((state)=> state.flag.flag)

  const navigate = useNavigate();

  const handleClickOpen = () => {
    // dispatch(setFlag(true))
    setOpen(true);
  };

  const handleClose = () => {
    // dispatch(setFlag(false))

    setOpen(false);
  };

  const handleLogIn = async () => {
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post('http://localhost:8181/api/users/login', userData);
      if(response.data){
        const userName2 = response.data
        console.log(userName2);
        
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    // dispatch(setFlag(false))

    setOpen(false);
  };
  // const handleRegistration =() => {
  // };

  const handleRegistration = () => {
    dispatch(setFlag(true))

    setOpen(false);
    // navigate(`/log-in}`);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Log IN
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To log in, please enter your email and password.
          </DialogContentText>
          <TextField
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            autoFocus
            margin="dense"
            id="name"
            label="user name"
            type="name"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogIn}>Sign in</Button>
          <Button onClick={handleRegistration}>registration</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
