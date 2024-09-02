import * as React from 'react';
import { Grid, Card, Typography, Button, Divider, Box, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import box_background1 from '../images/box_background1.jpg';
import montreal from '../images/montreal.jpg'
import locales from '../locales/fr.json';

function Accueil() {
  return (
    <Box sx={{}}>
      <img src={montreal} style={{ maxWidth: '100%', height: 'auto' }} />
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3} sx={{ minHeight: "88vh"}}>
        
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
                  <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                    {locales.Accueil.Conseil.titre}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {locales.Accueil.Conseil['sous-titre']}
                  </Typography>
                  <Divider sx={{marginBottom:"10px"}}/>
                  <Typography variant="body2">
                    {locales.Accueil.Conseil.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/conseil"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {locales.Accueil.Conseil.bouton}
                  </Button>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {locales.Accueil.Academie.titre}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {locales.Accueil.Academie['sous-titre']}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {locales.Accueil.Academie.description}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/academie"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {locales.Accueil.Academie.bouton}
                  </Button>
              </Card>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} sx={{marginBottom: "20px"}}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: " 0%", backgroundSize: "100%", }}>
                <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {locales.Accueil.Performance.titre}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {locales.Accueil.Performance['sous-titre']}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {locales.Accueil.Performance.description}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/performance"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {locales.Accueil.Performance.bouton}
                  </Button>
              </Card>
              </Paper>
            </Grid>
            
            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
                <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {locales.Accueil.Technologie.titre}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {locales.Accueil.Technologie['sous-titre']}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {locales.Accueil.Technologie.description}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/technologie"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {locales.Accueil.Technologie.bouton}
                  </Button>
              </Card>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Accueil;
