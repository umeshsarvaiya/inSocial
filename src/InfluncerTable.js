
import React from 'react'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import {
    Box,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    InputAdornment,
  } from "@mui/material";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
const InfluncerTable = ({handleSort,filteredInfluencers,toggleFavorite,favorites}) => {
  return (
    <Box>

<TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Influencer</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("engagement")}
                >
                  Engagement %
                  <ArrowUpwardIcon fontSize="small" />
                  <ArrowDownwardIcon fontSize="small" />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("followers")}
                >
                  Followers
                  <ArrowUpwardIcon fontSize="small" />
                  <ArrowDownwardIcon fontSize="small" />
                </Box>
              </TableCell>
              <TableCell>Audience Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInfluencers.map((influencer) => (
              <TableRow sx={{ margin: "20px" }} key={influencer.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{ display: "block", alignItems: "center", gap: 1 }}
                    >
                      <img
                        src={influencer.image}
                        alt={influencer.name}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                        }}
                      />
                      <Typography>{influencer.name}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{influencer.genre}</TableCell>
                <TableCell
                  sx={{
                    color: "red",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  {influencer.engagement}%
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PersonIcon fontSize="small" />
                    {influencer.followers.toLocaleString()}k
                  </Box>
                </TableCell>
                <TableCell>
                  Male: {influencer.audienceGender.male}% <br />
                  Female: {influencer.audienceGender.female}% <br />
                  Others: {influencer.audienceGender.others}%
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => toggleFavorite(influencer.id)}>
                    {favorites.includes(influencer.id) ? (
                      <FavoriteIcon color="error" />
                    ) : (
                     <Box sx={{color:"red"}}> <FavoriteBorderIcon /></Box>
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default InfluncerTable