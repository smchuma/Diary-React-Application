import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img src={logo} alt="diary.net" width="80px" />
            <Link to="/">
              <Typography
                sx={{
                  fontFamily: "Dancing Script",
                  fontSize: "40px",
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
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            <Link to="/">
              <Typography
                sx={{
                  mr: 6,
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#FD5063",
                  },
                }}
              >
                HOME
              </Typography>
            </Link>
            <Link to="/diary">
              <Typography
                sx={{
                  mr: 6,
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#FD5063",
                  },
                }}
              >
                DIARY
              </Typography>
            </Link>
            <Link to="/about">
              <Typography
                sx={{
                  mr: 6,
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#FD5063",
                  },
                }}
              >
                ABOUT
              </Typography>
            </Link>
            <MenuIcon
              sx={{
                fontSize: "30px",
                marginLeft: "50px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "#FD5063",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
