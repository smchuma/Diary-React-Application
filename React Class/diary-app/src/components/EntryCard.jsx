import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EntryCard = ({ entry }) => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <Card
        elevation={3}
        sx={{
          background: "#4e4e6d",
          borderRadius: "20px",
          border: "1px solid #ffffff",
          marginTop: "25px",
          width: "400px",
          height: "20vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          sx={{
            color: "white",
            textAlign: "left",
            fontSize: "25px",
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
                fontSize: "20px",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              {`${entry.description.substring(0, 100)}...`}
            </Typography>
          </Link>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              marginLeft: "2rem",
              color: "white",
            }}
          >
            {entry.date}
          </Typography>
          <IconButton>
            <Link to={`/update/${entry.id}`}>
              <EditLocationAltIcon
                sx={{
                  fontSize: "2rem",
                  marginRight: "1rem",
                  color: "white",
                }}
              />
            </Link>
            <DeleteForeverIcon
              sx={{ fontSize: "2rem", color: "#ff6262" }}
              onClick={() => onDelete(entry.id)}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default EntryCard;
