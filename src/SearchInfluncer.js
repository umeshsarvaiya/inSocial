import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";

const SearchInfluncer = ({ handleSearch }) => {
  return (
    <div>
      <Box>
        <TextField
        sx={{backgroundColor:"white" , height:"50px",width:"300px"}}
          label="Search for Influencer, Genre"
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default SearchInfluncer;
