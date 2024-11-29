<<<<<<< HEAD
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";

const SearchInfluncer = ({ handleSearch }) => {
  return (
    <div>
      <Box sx={{height:"30px", width:"300px"}}>
        <TextField
        sx={{backgroundColor:"white" , marginTop:"10px",height:"50px",width:{ 
          sm:"200px",
          md:"300px",
        
         },borderRadius:"0px",borderColor: "white"}}
          label="Search"
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default SearchInfluncer;
=======
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";

const SearchInfluncer = ({ handleSearch }) => {
  return (
    <div>
      <Box sx={{height:"30px", width:"300px"}}>
        <TextField
        sx={{backgroundColor:"white" , marginTop:"10px",height:"50px",width:{ 
          sm:"200px",
          md:"300px",
        
         },borderRadius:"0px",borderColor: "white"}}
          label="Search"
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default SearchInfluncer;
>>>>>>> abfd27de4e2a11b278079a88e680cac2f36c06b7
