import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdLockOutline } from "react-icons/md";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    key: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    let auth = localStorage.getItem("Authorization");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const errorMessage = validateCredentials(credentials);

      if (errorMessage) {
        toast.error(errorMessages[errorMessage], toastOptions);
      } else {
        toast.error(errorMessages.invalidCredentials, toastOptions);
      }
    } catch (error) {
      toast.error(errorMessages.invalidCredentials, toastOptions);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value={credentials.email}
            name="email"
            onChange={handleOnChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={credentials.password}
            name="password"
            onChange={handleOnChange}
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickShowPassword}
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography variant="body2">
                <Link
                  to="/forgotpassword"
                  variant="body2"
                  style={{ color: "#1976d2" }}
                >
                  Forgot password?
                </Link>
              </Typography>
            </Grid>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                variant="body2"
                style={{ color: "#1976d2", marginLeft: 3 }}
              >
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
