import * as React from 'react';
import locales from '../locales/fr.json';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';


function Conseil() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      Services
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        Conseil
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>CONSEIL</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>

          <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}> Notre service-conseil </Typography>
          <Typography sx={{marginBottom: "20px"}}> Afin de répondre adéquatement aux besoins de nos différents clients, nos experts utilisent une approche d’analyse qui leur permet d’identifier les causes profondes des problèmes afin de faciliter la prise de décision. Plusieurs outils sont à leur disposition, mais ils ont une préférence pour les outils suivants: </Typography>

          <Typography sx={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            L’élaboration d’un business case (dossier de décision) 
          </Typography>
          <Typography sx={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            La cartographie des capacités
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            L’approche de Design Thinking
          </Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>Business case ou dossier de décision</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Le dossier de décision est un outil permettant de rassembler en un seul document, tous les éléments nécessaires et pertinents au choix d’une solution et au démarrage d’un projet.</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Un dossier de décision peut prendre plusieurs formes : une évaluation d’opportunités, une analyse préliminaire ou une étude d’avant-projet. Les conseillers de LCG Solution vous accompagneront dans l’analyse des besoins et dans la collecte de l’information auprès des parties prenantes afin de développer le dossier approprié à votre situation. Ils pourront prendre en charge l’ensemble de la démarche ou vous appuyer dans la vôtre.</Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>La cartographie des capacités</Typography>
          <Typography sx={{ marginBottom: "20px"}}>La cartographie des capacités est un concept d’architecture d’affaires qui permet de visualiser ce que l’organisation fait indépendamment de sa structure organisationnelle ou de l’organisation de ses systèmes. Plusieurs modèles existent pour réaliser la cartographie. Nos conseillers utilisent, notamment, le Business Model Canvas.</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Une cartographie de la capacité d’affaires de l’entreprise est un modèle associant les capacités, les processus et les fonctions nécessaires à la réussite avec les ressources appropriées qui leur permettent de livrer efficacement ce qui est requis pour réaliser la mission.</Typography>
          <Typography sx={{ marginBottom: "20px"}}>L’élaboration d’une cartographie des capacités s’inscrit dans une logique d’architecture d’entreprise. Celle-ci est un puissant levier pour maîtriser la complexité des processus, des structures et des technologies qui composent l’organisation. L’architecture d’entreprise, qui inclut une architecture d’affaires, transpose la vision et les orientations stratégiques en objectifs concrets permettant de définir, avec assurance, la cible des projets.</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Les conseillers de LCG Solution seront en mesure de vous appuyer pour réaliser une telle cartographie ainsi que la transformation nécessaire de l’organisation.</Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>L’approche de Design Thinking</Typography>
          <Typography sx={{ marginBottom: "20px"}}>L’approche de Design Thinking a d’abord été une stratégie créative utilisée par les concepteurs en design. Elle a ensuite été explorée comme approche pour résoudre les problèmes dans les organisations. Proche de l’analyse d’affaires en ce qui concerne les outils de résolution de problèmes, elle aborde différemment les enjeux en privilégiant les aspects humain et utilisateur.</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>Conseil en transformation organisationnelle</Typography>
          <Typography sx={{ marginBottom: "20px"}}>La transformation de l’organisation est une des principales caractéristiques d’une entreprise en plein essor. La complexité grandissante des efforts de transformation représente un défi que les conseillers de LCG Solution comprennent bien. À l’aide des outils d’analyse d’affaires et d’architecture et appuyés par une compréhension de la gouvernance des projets, des programmes et des portefeuilles de gestion, les conseillers de LCG Solution vous accompagneront dans la réflexion stratégique, ainsi que dans les étapes subséquentes de planification, d’organisation et de mise en œuvre.</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>Gestion de projet, de programme et de portefeuille</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Suivant les principes du PMI ©, nos conseillers se distinguent par l’intégration de l’analyse d’affaires à nos approches en gestion de projets, de programmes, de portefeuilles ainsi que du changement. Nos conseillers expérimentés vous appuieront en développant des définitions claires pour vos projets. Cela vous permettra de mobiliser vos équipes dans la réalisation de vos stratégies.</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>Bureau de projets</Typography>
          <Typography sx={{ marginBottom: "20px"}}>Le bureau de projets peut prendre différents rôles dans une organisation. Ici très directif et là seulement en appui, il doit répondre à un besoin réel de l’organisation et augmenter la valeur des projets. Pour faire évoluer un bureau de projet, on doit l’intégrer aux modes de gestion de l’organisation tout en incluant des mécanismes de gouvernance solides et cohérents.</Typography>
        </Box>
    </Grid>
  );
}

export default Conseil;