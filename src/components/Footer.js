import * as React from 'react';
import {BottomNavigation, Box, BottomNavigationAction, Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#272727",
        color: "white",
        fontFamily: "Ubuntu",
        fontSize: "0.75em",
        lineHeight: "1.75em",
        textAlign: "center",
        verticalAlign: "middle",
      }}
    >
         <BottomNavigation
            sx={{
                width:  500,
                bgcolor: '#272727',
                color: 'white', 
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction
              label="info@lcgsolution.com"
              icon={<EmailOutlinedIcon />}
              onClick={() => window.location.href = 'mailto:info@lcgsolution.com'}
              sx={{
                color: 'white',
                '&.Mui-selected': {
                  color: '#AB0C18'
                }
              }}
            />
            <BottomNavigationAction
              label="+1  514-418-0050"
              icon={<LocalPhoneOutlinedIcon />}
              onClick={() => window.location.href = 'tel:+15144180050'}
              sx={{
                color: 'white',
                '&.Mui-selected': {
                  color: '#AB0C18'
                }
              }}
            />
        </BottomNavigation>
    </Box>
  );
}