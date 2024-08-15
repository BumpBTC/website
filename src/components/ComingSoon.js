import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SavingsIcon from '@mui/icons-material/Savings';

const FeatureCard = ({ title, description, icon }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <Card sx={{ height: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <CardMedia
        sx={{
          height: 200,
          bgcolor: 'primary.dark',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </CardMedia>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          fontWeight: 'bold',
        }}
      >
        Coming Soon
      </Box>
    </Card>
  </motion.div>
);

const ComingSoon = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }} id="coming-soon">
      <Typography variant="h2" align="center" gutterBottom>
        Exciting Features on the Horizon
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Square Integration"
            description="Seamlessly integrate with Square for business payments. Expand your payment options and streamline your operations."
            icon={<CropSquareIcon sx={{ fontSize: 100, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Buy Bitcoin"
            description="Purchase Bitcoin directly within the app. Simple, secure, and convenient way to acquire cryptocurrency."
            icon={<ShoppingCartIcon sx={{ fontSize: 100, color: 'secondary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="BTC DeFi Staking"
            description="Earn passive income on your Bitcoin holdings. Participate in the decentralized finance revolution directly from your wallet."
            icon={<SavingsIcon sx={{ fontSize: 100, color: 'secondary.main' }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComingSoon;