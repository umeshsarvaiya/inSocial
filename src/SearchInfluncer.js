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
