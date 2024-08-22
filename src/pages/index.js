import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
// import ComingSoon from '../components/ComingSoon';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* <ComingSoon /> */}
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}