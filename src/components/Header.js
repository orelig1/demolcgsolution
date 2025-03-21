import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, IconButton, Toolbar, Typography, Menu, Container, Select, Button, MenuItem }from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReactCountryFlag from 'react-country-flag';
import LCG_logo from "../images/LCG_logo.png";
import { withTranslation } from 'react-i18next';

function Header({ t, i18n }) {
  const pages = ['Header.about', 'Header.contact', 'Header.service'];
  const languages = [
    { name: 'French', code: 'fr', icon: <ReactCountryFlag countryCode="FR" svg /> },
    { name: 'English', code: 'en', icon: <ReactCountryFlag countryCode="CA" svg /> },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getPagePath = (page) => {
    switch (page) {
      case 'Header.about':
        return '/a-propos';
      case 'Header.contact':
        return '/nous-joindre';
      case 'Header.service':
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
            display: { xs: 'flex', md: 'flex' },
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
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(); 
                  }}
                >
                  <Link
                    to={getPagePath(page)}
                    style={{ textDecoration: 'none', color: 'inherit' }} 
                  >
                    <Typography textAlign="center">{t(page)}</Typography>
                  </Link>
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
                {t(page)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow:  0 }}>
            <Select
              variant="standard"
              value={i18n.language}
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
export default withTranslation()(Header);