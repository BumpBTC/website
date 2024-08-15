import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';

const steps = [
  {
    label: 'Download & Setup',
    description: 'Install Bump Wallet and set up your account in minutes. No complex steps, just simple, user-friendly onboarding.',
    icon: <DownloadIcon />,
  },
  {
    label: 'Load Your Wallet',
    description: 'Add Bitcoin to your wallet through purchases or transfers. Fast, secure, and hassle-free.',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    label: 'Tap & Pay',
    description: 'Use your phone to make payments anywhere that accepts Bitcoin. Quick, seamless, and revolutionary.',
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
                  <Box sx={{ mb: 2 }}>
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