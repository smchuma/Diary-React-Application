import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
} from "@mui/material";
import { Container } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const View = () => {
  const [entry, setEntry] = useState({});
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleEntry(id);
    }
  }, [id]);

  const getSingleEntry = async (id) => {
    const response = await axios.get(`http://localhost:4000/entries/${id}`);
    if (response.status === 200) {
      setEntry({ ...response.data });
    }
  };

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

  const navigate = useNavigate();

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

    navigate("/diary");
  };
  return (
    <div className="image">
      <Container sx={{ display: "flex" }}>
        <Card
          sx={{
            marginTop: "60px",
            background: "#2e2e41",
            borderRadius: "20px",
            color: "#ffffff",
            height: "50vw",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <CardHeader
            title={entry.title}
            subheader={
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                {entry.date}
              </Typography>
            }
            titleTypographyProps={{ variant: "h3" }}
            sx={{
              background: "#4e4e6d",
              borderRadius: "20px",
              border: "1px solid #ffffff",
            }}
          />
          <CardContent sx={{ resize: "vertical", overflow: "auto" }}>
            <Typography
              sx={{
                fontSize: "1.4rem",
                padding: "20px",
                textAlign: "justify",
              }}
            >
              {entry.description}
            </Typography>
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
                  marginLeft: "52rem",
                  marginTop: "0.5rem",
                  color: "white",
                }}
              />
            </Link>
            <DeleteForeverIcon
              sx={{ fontSize: "2rem", color: "#ff6262" }}
              onClick={() => onDelete(entry.id)}
            />
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default View;
