import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';
import devForm from '../images/devForm.png'

function DevFormation() {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Academie">
          Académie
        </Link>,
        <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
            Développement des formations
        </Typography>,
      ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
      <Box sx={{width: "45%"}}>
        <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>Développement des formations</Typography>
        <CustomDivider sx={{marginBottom: "20px"}}/>

        <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>

        <Typography sx={{marginBottom: "20px"}}>Le développement des formations chez LCG Solution s’appuie sur l’expertise de nos formateurs, sur une compréhension des compétences nécessaires et sur une approche pédagogique structurée.</Typography>
        <Typography sx={{marginBottom: "20px"}}>À la base, la compréhension des meilleures pratiques en analyse d’affaires, en gestion de projet ou en architecture d’entreprise est essentielle, et elle garantit que les formations sont développées avec un objectif clair à atteindre. C’est pourquoi nos formateurs sont certifiés dans les domaines appropriés pour développer les formations.</Typography>
        <Typography sx={{marginBottom: "20px"}}>Notre expertise est centrée sur la création de la valeur pour l’organisation à travers la transformation. Pour ce faire, nous misons sur l’expertise et le savoir-faire, et nous nous appuyons sur les cadres méthodologiques suivants pour maintenir l’ensemble.</Typography>
        
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center", marginBottom: "10px"}}>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>TOGAF</Typography>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>BIZBOK</Typography>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>BABOK – BA Guide</Typography>
        </Box>
        
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center", marginBottom: "20px"}}>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>SWEBOK</Typography>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>CMBOK</Typography>
            <Typography sx={{width:"33.3%", color:"#AB0C18"}}>PMBOK</Typography>
        </Box>
        
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
            <img src={devForm} style={{marginRight: "15px", width: "575px"}}/>
        </Box>
        
        <Typography sx={{marginBottom: "20px"}}>Chacun de ces cadres méthodologiques offre des lignes directrices sur la façon de fournir de la valeur à l’organisation. Chacun, de son point de vue particulier, aide à structurer les concepts clés de la transformation de l’organisation.</Typography>
        <Typography sx={{marginBottom: "20px"}}>Ces cadres méthodologiques sont couplés aux modèles de compétences afin de s’assurer que l’ensemble des connaissances métier sont identifiées et traitées.</Typography>
        <Typography sx={{marginBottom: "20px"}}>Les programmes de formations ont été développés en regroupant les techniques de bases ou les compétences en fonction des différents niveaux de compétences.</Typography>
      </Box>
    </Grid>
  );
}

export default DevFormation;