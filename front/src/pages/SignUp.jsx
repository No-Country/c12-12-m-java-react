import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
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
  shortUserName: "Please enter a User Name with more than 5 characters",
  shortFirstName: "Please enter a First Name with more than 5 characters",
  shortLastName: "Please enter a Last Name with more than 5 characters",
  invalidEmail: "Please enter a valid email",
  shortPassword:
    "Please enter a password with more than 5 characters with a capital letter and a number",
  invalidCredentials: "Invalid Credentials",
};

// eslint-disable-next-line react-refresh/only-export-components
export const toastOptions = {
  autoClose: 1200,
  theme: "colored",
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const hasWeakPassword = (pass) => {
  // Longitud menor a 5, sin letra mayúscula o sin número
  return pass.length < 5 || !/[A-Z]/.test(pass) || !/\d/.test(pass);
};

// eslint-disable-next-line react-refresh/only-export-components
export const validateCredentials = (credentials) => {
  if (
    !credentials.email ||
    !credentials.username ||
    !credentials.firstName ||
    !credentials.lastName ||
    !credentials.password
  ) {
    return "requiredFields";
  } else if (credentials.username.length <= 5) {
    return "shortUserName";
  } else if (credentials.firstName.length <= 5) {
    return "shortFirstName";
  } else if (credentials.lastName.length <= 5) {
    return "shortLastName";
  } else if (!emailRegex.test(credentials.email)) {
    return "invalidEmail";
  } else if (hasWeakPassword(credentials.password)) {
    return "shortPassword";
  }
};

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await axios.post("https://backvivavintage.azurewebsites.net/auth/register", {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
      });
      console.log("User registered successfully:", response);
      toast.success("User registered successfully", toastOptions);
      setCredentials({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      navigate("/");
      // Realizar acciones adicionales después de registrar al usuario
    } catch (error) {
      console.error("Failed to register user:", error);
      toast.error("Failed to register user", toastOptions);
      // Manejar el error de registro de usuario
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("user", credentials);
    e.preventDefault();

    const errorMessage = validateCredentials(credentials);

    if (errorMessage) {
      toast.error(errorMessages[errorMessage], toastOptions);
    } else {
      registerUser();
      console.log("credentials", credentials);
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
          <Avatar sx={{ m: 1 }}>
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
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  value={credentials.username}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="first-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={credentials.fullName}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="last-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
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
