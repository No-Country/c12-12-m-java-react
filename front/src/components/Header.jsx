import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Avatar,
  Badge,
  Menu,
  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../assets/deer.svg';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginRight: theme.spacing(2),
    height: '40px',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
    color: 'inherit',
    textDecoration: 'none',
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="menu-appbar"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#f9f9f9' }}>
        <Toolbar style={{color: '#101010'}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            VivaVintage
          </Typography>
          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/cart" className={classes.link}>
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="user account"
            className={classes.avatar}
            onClick={handleMenuOpen}
          >
            <Avatar>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Header;
