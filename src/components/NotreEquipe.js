import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Box, Avatar, useMediaQuery } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { withTranslation } from 'react-i18next';
import LC from '../images/LC.png';
import JV from '../images/JV.png';
import AG from '../images/AG.jpg';
import PA from '../images/PA.png';

function NotreEquipe({ t }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Carousel
      indicators={true} // Keep the dots at the bottom
      controls={!isMobile} // Hide arrows on mobile
      interval={3000}
    >
      {[ 
        { src: LC, name: 'Equipe.LC.nom', role: 'Equipe.LC.role', desc: 'Equipe.LC.description', link: 'https://www.linkedin.com/in/louischarlesgauthier/' },
        { src: JV, name: 'Equipe.JV.nom', role: 'Equipe.JV.role', desc: 'Equipe.JV.description', link: 'https://www.linkedin.com/in/vaillancourtjean/' },
        { src: PA, name: 'Equipe.PA.nom', role: 'Equipe.PA.role', desc: 'Equipe.PA.description', link: 'https://www.linkedin.com/in/audetpascale/' },
        { src: AG, name: 'Equipe.AG.nom', role: 'Equipe.AG.role', desc: 'Equipe.AG.description', link: 'https://www.linkedin.com/in/aur%C3%A9lie-gauthier-54002429b/' }
      ].map((member, index) => (
        <Carousel.Item key={index}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ 
              width: isMobile ? "100%" : 345, 
              height: 500,
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              marginTop: "20px", 
              marginBottom: "20px",
              overflow: "hidden" 
            }}>
              <CardHeader 
                sx={{ display: 'flex', justifyContent: 'center' }}
                title={
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Avatar sx={{ width: 120, height: 120 }} src={member.src} />
                  </Box>
                }
              />
              <CardContent sx={{ 
                flexGrow: 1, 
                overflowY: "auto", 
                maxHeight: 1000 
              }}> 
                <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                  {t(member.name)}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.5, textAlign: 'center', fontSize: "0.8em" }}>
                  {t(member.role)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: "10px" }}>
                  {t(member.desc)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', paddingBottom: "10px" }}>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <LinkedInIcon color='primary' />
                  </IconButton>
                </a>
              </CardActions>
            </Card>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default withTranslation()(NotreEquipe);
