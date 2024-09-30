import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HydroQuebec_logo from '../images/HydroQuebec_logo.png'
import Desjardins_logo from '../images/Desjardins_logo.png'
import TroisRiviere_logo from '../images/TroisRiviere_logo.png'
import BRP_logo from '../images/BRP_logo.png'
import PMI_logo from '../images/PMI_logo.png'
import logo_Giro1 from '../images/logo_Giro1.png'
import agnico from '../images/Agnico.png'
import AIM_logo from '../images/AIM_logo.jpg'
import AIMQ_logo from '../images/AIMQ_logo.png'
import { Box } from '@mui/material';

export default function StandardImageList() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ImageList sx={{ width: 700, height: '100%', overflow: 'hidden'}} cols={4} rowHeight={160}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
  );
}

const itemData = [
  {
    img: HydroQuebec_logo,
    title: 'HydroQc',
  },
  {
    img: Desjardins_logo,
    title: 'Desjardin',
  },
  {
    img: TroisRiviere_logo,
    title: 'Trois-Riviere',
  },
  {
    img: BRP_logo,
    title: 'BRP',
  },
  {
    img: logo_Giro1,
    title: 'Giro',
  },
  {
    img: agnico,
    title: 'AGnico Eagle',
  },
  {
    img: 'https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_2254_fr_2020_05_04_13_59_09.jpg',
    title: 'Sanimax',
  },
  {
    img: 'https://energir.com/files/energir_common/originals/PCGN_300x300.png',
    title: 'Energir',
  },
  {
    img: 'https://ccimoulins.com/logos/raymond-chabot-grant-thornton-1099.jpg',
    title: 'Raymond Chabot',
  },
  {
    img: AIM_logo,
    title: 'AIM',
  },
  {
    img: PMI_logo,
    title: 'PMI',
  },
  {
    img: AIMQ_logo,
    title: 'AIMQ',
  },
];
