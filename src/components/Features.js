import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StarsIcon from '@mui/icons-material/Stars';

const FeatureCard = ({ title, description, icon }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <Card sx={{ height: '100%', bgcolor: 'background.paper' }} id="features">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h5" component="div" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const Features = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Typography variant="h2" align="center" gutterBottom>
      The Future of BTC Payments is Here
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Bump to Pay"
            description="Experience the future of payments with simple tap-to-pay functionality."
            icon={<TapAndPlayIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Lightning Fast"
            description="Instant transactions powered by the Lightning Network."
            icon={<FlashOnIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Peer-to-Peer"
            description="Send and receive payments directly between friends and family."
            icon={<PeopleIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Merchant Ready"
            description="Coming soon: Pay at stores and businesses worldwide."
            icon={<StorefrontIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Multiple Currencies"
            description="Pay with Bitcoin and Litecoin now, with USDC stablecoin support coming soon."
            icon={<StarsIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Bank-Grade Security"
            description="Enjoy top-tier security with advanced encryption and multi-factor authentication."
            icon={<SecurityIcon sx={{ fontSize: 60, color: 'secondary.main' }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;