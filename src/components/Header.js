import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, IconButton, Toolbar, Typography, Menu, Container, Select, Button, MenuItem }from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReactCountryFlag from 'react-country-flag';
import LCG_logo from "../images/LCG_logo.png";

const pages = ['À propos', 'Nous joindre', 'Services'];
const languages = [
  { name: 'French', code: 'fr', icon: <ReactCountryFlag countryCode="FR" svg /> },
  { name: 'English', code: 'en', icon: <ReactCountryFlag countryCode="CA" svg /> },
];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getPagePath = (page) => {
    switch (page) {
      case 'À propos':
        return '/a-propos';
      case 'Nous joindre':
        return '/nous-joindre';
      case 'Services':
        return '/services';
      default:
        return `/${page}`;
    }
  };
  

  return (
    <AppBar position="sticky" sx={{bgcolor: "#272727"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr:  2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight:  700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Link to="/">
            <img src={LCG_logo} alt="LCG Logo" style={{ width: 'auto', height: '80px' }}/>
          </Link>
        </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white !important', display: 'block' }}
                component={Link}
                to={getPagePath(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow:  0 }}>
            <Select
              variant="standard"
              value={currentLanguage}
              onChange={handleLanguageChange}
              sx={{ mt: 1.5, color: 'white' }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <span>{lang.icon}</span> {lang.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;