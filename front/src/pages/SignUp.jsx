import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  Grid,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { Box, Container } from "@mui/system";

// eslint-disable-next-line react-refresh/only-export-components
export const errorMessages = {
  requiredFields: "All fields are required",
  shortName: "Please enter a name with more than 5 characters",
  invalidEmail: "Please enter a valid email",
  shortPassword: "Please enter a password with more than 5 characters",
  invalidCredentials: "Invalid Credentials",
};

// eslint-disable-next-line react-refresh/only-export-components
export const toastOptions = {
  autoClose: 1200,
  theme: "colored",
};

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // eslint-disable-next-line react-refresh/only-export-components
export const validateCredentials = (credentials) => {
  if (!credentials.email && !credentials.fullName && !credentials.password) {
    return "requiredFields";
  } else if (credentials.fullName.length <= 5) {
    return "shortName";
  } else if (!emailRegex.test(credentials.email)) {
    return "invalidEmail";
  } else if (credentials.password.length < 5) {
    return "shortPassword";
  } else {
    return "invalidCredentials";
  }
}

function SignUp() {
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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
    <>
      <Container component="main" maxWidth="xs" sx={{ marginBottom: 10 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#3874cb" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={credentials.fullName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={credentials.email}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={credentials.password}
                  onChange={handleOnChange}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={handleClickShowPassword}
                        sx={{ cursor: "pointer" }}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    style={{ color: "#1976d2", marginLeft: 3 }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
