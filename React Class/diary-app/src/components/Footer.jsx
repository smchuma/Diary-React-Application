import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F24B6A",
          width: "70%",
          height: "180px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="diary.net" width="70px" />
            <Typography
              sx={{
                fontFamily: "Dancing Script",
                fontSize: "30px",
                marginTop: "10px",
              }}
            >
              Diary
              <span
                style={{
                  color: "#5FD97E",
                  fontSize: "30px",
                }}
              >
                .net
              </span>
            </Typography>
          </Box>
          <Typography variant="h5" color="#e3e3e3" sx={{ textAlign: "center" }}>
            Try out the diary web app, You wont be disappointed
          </Typography>
          <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
            &copy; All rights Reserved
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#555376",
          width: "40%",
          height: "180px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Follow us on social media</Typography>
          <Box sx={{ display: "flex" }}>
            <FacebookIcon
              sx={{ marginRight: "20px", fontSize: "35px", color: "#5FD97E" }}
            />
            <InstagramIcon
              sx={{ marginRight: "20px", fontSize: "35px", color: "#5FD97E" }}
            />
            <TwitterIcon sx={{ fontSize: "35px", color: "#5FD97E" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
