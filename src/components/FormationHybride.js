import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';

function FormationHybride() {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Academie">
          Académie
        </Link>,
        <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
            Modèle de formation hybride
        </Typography>,
      ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "100px"}}>
      <Box sx={{width: "45%"}}>
            <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>Modèle de formation hybride</Typography>
            <CustomDivider sx={{marginBottom: "20px"}}/>

            <Stack spacing={2} sx={{marginBottom: "30px"}}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </Box>
    </Grid>
  );
}

export default FormationHybride;