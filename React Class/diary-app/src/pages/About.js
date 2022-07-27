import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import img5 from "../images/img5.png";
import img4 from "../images/img4.png";

const About = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={img4} alt="img4" width="150%" height="150%" />
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              textAlign: "justify",
              marginBottom: "-50px",
              padding: "30px",
            }}
          >
            About this Site
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              textAlign: "justify",
              marginRight: "30px",
              padding: "30px",
            }}
          >
            This is a free service for anyone who wants to keep a personal
            online diary, and is designed to be fast and easy to use. You won't
            see much complicated design and heavy graphics here. When writing or
            communicating through this site, please be polite and considerate.
            Abuse will not be tolerated.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "-30px",
        }}
      >
        <Box sx={{ marginLeft: "20rem" }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
            }}
          >
            Use it anywhere, anytime
          </Typography>
          <Link to="/diary">
            <Button
              sx={{
                background: "#7ED99E",

                marginTop: "20px",
                color: "black",
                padding: "15px",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                width: "150px",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "#FD5063",
                  color: "white",
                },
              }}
            >
              Diary
            </Button>
          </Link>
        </Box>
        <img
          src={img5}
          alt="img5"
          width="45%"
          height="45%"
          style={{ marginRight: "10rem" }}
        />
      </Box>
    </div>
  );
};

export default About;
