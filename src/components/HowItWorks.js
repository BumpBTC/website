import React, { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';

const steps = [
  {
    label: 'Download & Setup',
    description: 'Install the Bump Wallet mobile app and set up your account in minutes. Create a new Bitcoin, Litecoin, or Lightning wallet upon Signup in one-click.',
    icon: <DownloadIcon />,
  },
  {
    label: 'Load Your Wallet',
    description: 'Add BTC to your wallet by purchasing from our approved partners or simply import your Bitcoin wallet with your private key.',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    label: 'Bump & Pay',
    description: 'Use your phone to make payments anywhere that accepts Bitcoin, the gold standard in decentralized currency.',
    icon: <TapAndPlayIcon />,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }} id="how-it-works">
      <Typography variant="h2" align="center" gutterBottom>
        How It Works
      </Typography>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} active={true}>
              <StepLabel
                StepIconComponent={() => (
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                )}
              >
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {index === steps.length - 1 && (
                  <Box sx={{ pt: 2, mb: 2  }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Get Started Now
                    </Button>
                  </Box>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default HowItWorks;