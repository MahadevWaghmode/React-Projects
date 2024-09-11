import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Box, HStack, Button } from "@chakra-ui/react";
import Problem from "./component/Problem";
import Editor from "./component/Editor";

function App() {
  
   

  return (
    <Box>
      <Navbar />      
    </Box>
  );
}

export default App;
