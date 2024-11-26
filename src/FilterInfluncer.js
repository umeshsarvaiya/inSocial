import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

const FilterInfluncer = ({
  openFilterDialog,
  handleFilterDialogClose,
  filterGenre,
  filterEngagement,
  filterFollowers,
  setFilterGenre,       
  setFilterEngagement,  
  setFilterFollowers,  
  InfluncerFilters
}) => {
  return (
    <div>
      <Dialog open={openFilterDialog} onClose={handleFilterDialogClose}>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Genre</InputLabel>
            <Select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}  
              label="Genre"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Photography">Photography</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
              <MenuItem value="Tech">Tech</MenuItem>
            </Select>
          </FormControl>
          <FormControl  sx={{ marginTop: 2,width:"200px",heigth:"200px" }}>
            <InputLabel>Minimum Engagement</InputLabel>
            <Select
              value={filterEngagement}
              onChange={(e) => setFilterEngagement(e.target.value)}  
              label="Minimum Engagement"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">8%</MenuItem>
              <MenuItem value="4">4%</MenuItem>
              <MenuItem value="5">5%</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel>Minimum Followers</InputLabel>
            <Select
              value={filterFollowers}
              onChange={(e) => setFilterFollowers(e.target.value)} 
              label="Minimum Followers"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="100000">100k</MenuItem>
              <MenuItem value="150000">150k</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={InfluncerFilters}>Apply</Button>
          <Button onClick={handleFilterDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FilterInfluncer;
