import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Bump BTC Wallet
            </Typography>
            <Typography variant="body2">
              Revolutionizing mobile Bitcoin payments with tap-to-pay technology and lightning-fast transactions.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block">Home</Link>
              <Link href="#features" color="inherit" display="block">Features</Link>
              <Link href="#how-it-works" color="inherit" display="block">How It Works</Link>
              <Link href="#coming-soon" color="inherit" display="block">Coming Soon</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Telegram">
                <TelegramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Bump BTC Wallet. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;