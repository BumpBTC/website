import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" color={isScrolled ? 'primary' : 'transparent'} elevation={isScrolled ? 4 : 0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/logoword.png" alt="Bump Wallet Logo" style={{ height: 40 }} />
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#how-it-works">How It Works</Button>
          <Button color="inherit" href="#coming-soon">Coming Soon</Button>
        </Box>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
          Launch App
        </Button>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;