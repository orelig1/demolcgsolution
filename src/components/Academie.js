import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';
import Coriolis from '../images/Coriolis_Logo.jpg'

function Academie() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      Services
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        Académie
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>ACADÉMIE</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>

          <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Box sx={{display: "flex", marginBottom: "50px"}}>
            <img src={Coriolis} style={{marginRight: "15px"}}/>
            <Typography sx={{marginTop: "15px"}}>L’Académie se veut un lieu pour réunir la connaissance des métiers, des techniques et des outils clés en ingénierie d’affaires. On y prône une approche qui suscite l’innovation tout en améliorant la capacité des individus à structurer les organisations pour en accroître l’efficacité et la rentabilité. Ici, nous tentons de créer un espace de réflexion sur les façons de faire et les outils.</Typography>
          </Box>
          
          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>Approche de développement des formations</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Chez LCG Solution, le développement des formations s’appuie sur l’expertise de nos formateurs, sur une compréhension des compétences nécessaires et sur une approche pédagogique structurée.</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Nos formations sont offertes en mode présentiel et en mode hybride. </Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>Coaching</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Le but du coaching est de permettre aux individus d’améliorer leur manière d’aborder des situations ou des activités spécifiques.</Typography>
        </Box>
    </Grid>
  );
}

export default Academie;