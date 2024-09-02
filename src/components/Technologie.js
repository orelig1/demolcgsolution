import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';

function Technologie() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      Services
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        Technologie
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{width: "45%"}}>
        <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>TECHNOLOGIE</Typography>
        <CustomDivider sx={{width: "10%", marginBottom: "20px"}}/>

        <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>

        <Typography sx={{marginBottom: "20px"}}> Si vous recherchez LCG Technologie, notre compagnie sœur, suivez ce lien : <a href="https://lcgtechno.com/" target="_blank">lcgtechno.com</a></Typography>
      </Box>
    </Grid>
  );
}

export default Technologie;