import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Ready to Revolutionize Your Payments?
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Join thousands of users already experiencing the future of finance with Bump Wallet.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                Download Now
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: `${Math.random() * 50 + 10}px`,
            height: `${Math.random() * 50 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default CTA;