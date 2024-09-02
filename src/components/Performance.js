import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';
import upskills from '../images/upskills.jpg'

function Performance() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      Services
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        Performance
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>PERFORMANCE</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>

          <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography sx={{marginBottom: "20px"}}>Le monde de l’évaluation de compétences est en plein essor, poussé entre autres par une rapide évolution des technologies.  De plus, les emplois se spécialisent et il devient de plus en plus difficile pour les gestionnaires d’évaluer eux-mêmes les compétences de leurs ressources.  Ceux-ci se tournent donc vers des spécialistes du domaine qui peuvent évaluer les compétences des ressources en se basant sur des normes établies.</Typography>
          <Box sx={{display: "flex", marginBottom: "50px"}}>
            <img src={upskills} style={{marginRight: "15px", height: "100px", marginTop: "20px"}}/>
            <Typography sx={{marginTop: "15px"}}>Les évaluateurs sont en général équipés de gabarits, de  chiffriers et de documents difficiles à comprendre.  Ces évaluations sont coûteuses, longues à faire et il est difficile de comparer le travail d’un évaluateur par rapport à un autre.  Afin de faciliter la transparence et l’uniformité des évaluations, LCG Solution a développé un outil permettant de compiler les données récoltées par les évaluations, de les comparer entre-elles et de les positionner par rapport aux normes établies</Typography>
          </Box>

          <Typography sx={{ marginBottom: "20px"}}>Les bénéfices de cet outil sont nombreux :</Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            Des résultats faciles à comprendre
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            Des processus optimisés
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            Des normes pré-validées
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            L’intégration des tests psychométriques
          </Typography>
          
          
          </Box>
    </Grid>
  );
}

export default Performance;