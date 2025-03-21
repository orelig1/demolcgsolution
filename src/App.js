// import React from 'react';
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
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import ServicesIndex from './components/ServicesIndex';

function App() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LCG Solution</title>
      </Helmet>
      <Router>
        <Grid container direction="column" sx={{ flexGrow: 1, minHeight: '100vh'}}>
          <Grid item>
            <Header />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <main>
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/nous-joindre" element={<Contact />} />
                <Route path="/services" element={<ServicesIndex />}>
                  <Route index element={<Services />} />
                  <Route path="conseil" element={<Conseil />} />
                  <Route path="academie" element={<Academie />} />
                  <Route path="performance" element={<Performance />} />
                  <Route path="technologie" element={<Technologie />} />
                </Route>
              </Routes>
            </main>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
