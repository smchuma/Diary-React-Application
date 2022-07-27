import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Card,
  CardHeader,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "@mui/system";
import PaginationStyle from "../components/PaginationStyle";

const Diary = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entryPerPage] = useState(6);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/entries");
    response.status === 200
      ? setData(response.data)
      : console.log("Error, Something went wrong");
  };

  console.log(data);
  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the entry")) {
      const response = await axios.delete(
        `http://localhost:4000/entries/delete/${id}`
      );

      if (response.status === 200) {
        toast.success(response.data);
        getData();
      }
    }
  };

  const indexOfLastEntry = currentPage * entryPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entryPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box
          sx={{
            height: "15vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ToastContainer
            position="top-center"
            autoClose={3000}
            toastStyle={{ backgroundColor: "green", color: "white" }}
          />
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "40px",
              fontFamily: "Montserrat",
              padding: "10px 70px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Start Writing Your Story Today
          </Typography>
          <Link to="/add">
            <Button
              sx={{
                background: "transparent",
                marginTop: "40px",
                marginRight: "200px",
                borderRadius: "20px",
                width: "150px",
                height: "50px",
                color: "white",
                border: "1px solid #ffffff",
                outline: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Add Entry
            </Button>
          </Link>
        </Box>
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
            sx={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            {data &&
              currentEntries.map((entry) => {
                return (
                  <Grid item key={entry.id} xs={12} sm={6} md={4}>
                    <Card
                      elevation={3}
                      sx={{
                        background: "#4e4e6d",
                        borderRadius: "20px",
                        border: "1px solid #ffffff",
                        marginTop: "25px",
                        width: "350px",
                        height: "22vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <CardHeader
                        sx={{
                          color: "white",
                          textAlign: "center",
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                          background: "#464663",
                          padding: "10px",
                          borderRadius: "20px",
                          outline: "none",
                        }}
                        title={entry.title}
                      />
                      <CardContent>
                        <Link to={`/diary/${entry.id}`}>
                          <Typography
                            sx={{
                              color: "#ffffff",
                              fontSize: "15px",
                              fontFamily: "Montserrat",
                              fontWeight: "bold",
                              padding: "20px",
                              textAlign: "justify",
                            }}
                          >
                            {`${entry.description.substring(0, 100)}...`}
                          </Typography>
                        </Link>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "2rem",
                            color: "white",
                          }}
                        >
                          {entry.date}
                        </Typography>

                        <Link to={`/update/${entry.id}`}>
                          <EditLocationAltIcon
                            sx={{
                              fontSize: "2rem",
                              marginLeft: "3rem",
                              marginTop: "0.5rem",
                              color: "white",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                color: " rgb(92, 230, 255)",
                                transform: "scale(1.2)",
                              },
                            }}
                          />
                        </Link>
                        <DeleteForeverIcon
                          sx={{
                            fontSize: "2rem",
                            color: "white",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              color: "#ff6262",
                              transform: "scale(1.2)",
                            },
                          }}
                          onClick={() => onDelete(entry.id)}
                        />
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <PaginationStyle
            entryPerPage={entryPerPage}
            totalEntries={data.length}
            paginate={paginate}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Diary;
