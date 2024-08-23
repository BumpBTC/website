import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");

    try {
      const templateParams = {
        to_email: email,
        message: "Thank you for signing up for early access to Bump 2 Pay!",
      };

      await emailjs.send(
        "service_itmoea9", // Replace with your EmailJS service ID
        "template_vxzn2xm", // Replace with your EmailJS template ID
        templateParams,
        "LjgOoqNPpg23JpnH0" // Replace with your EmailJS user ID
      );

      setMessage(
        "Thank you for signing up! Check your email for confirmation."
      );
      setOpen(true);
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred. Please try again later.");
      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
      id="early-access"
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Be Among the First to Bump
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Join thousands of users already experiencing the future of NFC
            payments with Bump Wallet.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", justifyContent: "center", mt: 4 }}
          >
            <TextField
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{
                mr: 2,
                bgcolor: "#0A2A5E",
                borderRadius: "11px",
              }}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Get Early Access
              </Button>
            </motion.div>
          </Box>
        </motion.div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={message}
        />
      </Container>
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          animate={{
            x: ["-100%", "100%"],
            y: ["-100%", "100%"],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 100 + 10}px`,
            height: `${Math.random() * 100 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default CTA;
