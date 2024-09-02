import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Conseil from './components/Conseil';
import Academie from './components/Academie';
import Performance from './components/Performance';
import Technologie from './components/Technologie';
import DevFormation from './components/DevFormation';
import FormationHybride from './components/FormationHybride';
import CoachingAnalyse from './components/CoachingAnalyse';
import { Grid } from '@mui/material';

function App() {

  return (
    <Router>
      <Grid container direction="column" sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item sx={{ flexGrow:   1 }}>
          <main>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/A-propos" element={<About />} />
              <Route path="/Nous-joindre" element={<Contact />} />
              <Route path="/Services" element={<Services />} />
                  <Route path="Conseil" element={<Conseil />} />
                  <Route path="Academie" element={<Academie />} />
                      <Route path="Developpement-des-formations" element={<DevFormation />} />
                      <Route path="Modele-de-formation-hybride" element={<FormationHybride />} />
                      <Route path="Coaching-en-analyse-daffaires" element={<CoachingAnalyse />} />
                  <Route path="Performance" element={<Performance />} />
                  <Route path="Technologie" element={<Technologie />} />
            </Routes>
          </main>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;