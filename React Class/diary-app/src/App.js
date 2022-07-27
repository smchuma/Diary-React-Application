import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import View from "./pages/View";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="Main">
      <Box
        sx={{
          backgroundColor: "#605E87",
          height: "140vh",
          "@media (max-width: 1000px)": {
            height: "200vh",
          },
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/:id" element={<View />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
};

export default App;
