import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Bump BTC Wallet
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            Tap. Pay. Go. The Future of tap-to-pay is Here.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;