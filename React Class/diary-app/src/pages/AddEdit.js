import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

const initialState = {
  title: "",
  description: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { title, description } = state;

  const addEntry = async (data) => {
    const response = await axios.post(
      "http://localhost:4000/entries/add",
      data
    );

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateEntry = async (data, id) => {
    const response = await axios.put(
      `http://localhost:4000/entries/update/${id}`,
      data
    );

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Please fill in all fields");
    } else {
      if (!id) {
        addEntry(state);
      } else {
        updateEntry(state, id);
      }

      navigate("/diary");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEntry(id);
    }
  }, [id]);

  const getEntry = async (id) => {
    const response = await axios.get(`http://localhost:4000/entries/${id}`);
    if (response.status === 200) {
      setState({ ...response.data });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./addbg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <ToastContainer
          position="top-center"
          autoClose={3000}
          toastStyle={{ backgroundColor: "#bf0000", color: "white" }}
        />
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Dancing Script",
            textAlign: "center",
            marginBottom: "20px",
            padding: "25px",
          }}
        >
          Enter Entry
        </Typography>
        <Box
          component="form"
          sx={{
            margin: "auto",
            padding: "15px",
            maxWidth: "620px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              background: "#605E87",
              width: "600px",
              border: "1px solid white",
              borderRadius: "20px",
              marginBottom: "10px",
              color: "white",
            }}
            label="Entry Title"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            name="title"
            value={title}
            onChange={handleChange}
            type="text"
          ></TextField>
          <TextareaAutosize
            minrows="2"
            style={{
              background: "#605E87",
              width: "600px",
              height: "400px",
              resize: "vertical",
              overflow: "auto",
              border: "1px solid white",
              borderRadius: "10px",
              padding: "20px",
              color: "white",
              fontSize: "20px",
            }}
            label="Entry Title"
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
          ></TextareaAutosize>
          <Button
            sx={{
              background: "#605E87",
              marginTop: "20px",
              marginLeft: "135px",
              borderRadius: "20px",
              width: "300px",
              height: "50px",
              color: "white",
              border: "1px solid #ffffff",
              outline: "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            type="submit"
            value={id ? "Update" : "Add"}
          >
            {id ? "Update" : "Add"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddEdit;
