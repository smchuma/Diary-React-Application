import React from "react";
import { Box, Button, Typography } from "@mui/material";
import image from "../images/image1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            marginRight: "1rem",
            "@media (max-width: 1000px)": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                marginTop: "50px",
                marginLeft: "100px",
                fontFamily: "Dancing Script",
                fontSize: "100px",
              }}
            >
              Diary
              <span
                style={{
                  color: "#5FD97E",
                  fontSize: "70px",
                }}
              >
                .net
              </span>
            </Typography>
            <Typography
              sx={{
                marginLeft: "100px",
                fontSize: "25px",
              }}
            >
              This is an online diary service, providing personal diaries and
              journals. It's free to use, go ahead and write your own dairies
              today.
            </Typography>
            <Link to="/diary">
              <Button
                sx={{
                  background: "#7ED99E",
                  marginLeft: "100px",
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
                Get Started
              </Button>
            </Link>
          </Box>
          <img src={image} alt="logo" width="45%" style={{ margin: "50px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "120px",
            background: "#8082A6",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              marginTop: "3rem",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Monterrat",
                fontSize: "60px",
              }}
            >
              What are you writing for?
            </Typography>
            <Typography
              style={{
                margin: "20px",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "30px",
                padding: " 0 105px",
              }}
            >
              Whether you’re looking for a tool to record your daily emotions
              and activities in a reflective journal, keep track of milestones
              in a food diary or pregnancy journal, or even record your dreams
              in a dream journal, Diary.net has you covered.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
