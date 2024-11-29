<<<<<<< HEAD
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography, IconButton } from "@mui/material";
import theme from "./utils/theme";

const InfluencerBox = ({
  handleSort,
  filteredInfluencers,
  toggleFavorite,
  favorites,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr",
          backgroundColor: theme.palette.grey[100],
          position: "sticky",
          top: 0,
          zIndex: 2,
          padding: "8px 16px",
          justifyItems: "left",
          textAlign: "center",
        }}
      >
        <Typography>Influencer</Typography>
        <Typography>Genre</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleSort("engagement")}
        >
          <Typography>Engagement %</Typography>
          <ArrowUpwardIcon fontSize="small" />
          <ArrowDownwardIcon fontSize="small" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer",
          }}
          onClick={() => handleSort("followers")}
        >
          <Typography>Followers</Typography>
          <ArrowUpwardIcon fontSize="small" />
          <ArrowDownwardIcon fontSize="small" />
        </Box>
        <Typography>Audience Gender</Typography>
      </Box>

      {filteredInfluencers.map((influencer) => (
        <Box
          key={influencer.id}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr", // Match the header grid layout
            alignItems: "center",
            padding: "16px",
            marginBottom: "15px",
            backgroundColor: "white",
            borderRadius: "20px",
            justifyItems: "left", // Center content horizontally
            textAlign: "center", // Center text within each column
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
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
          <Typography>{influencer.genre}</Typography>
          <Box sx={{ justifyContent: "center" }}>
            <Typography
              color="red"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {influencer.engagement}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <PersonIcon fontSize="small" />
            <Typography>{influencer.followers.toLocaleString()}k</Typography>
          </Box>
          <Box sx={{ justifyContent: "left" }}>
            <Typography sx={{ display: "flex" }}>
              Male{" "}
              <Typography sx={{ marginLeft: "10px", justifyContent: "right" }}>
                {influencer.audienceGender.male}%
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex" }}>
              Female{" "}
              <Typography sx={{ marginLeft: "10px", justifyContent: "right" }}>
                {influencer.audienceGender.female}%
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex" }}>
              Others{" "}
              <Typography sx={{ marginLeft: "10px", justifyContent: "right" }}>
                {influencer.audienceGender.others}%
              </Typography>{" "}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <IconButton onClick={() => toggleFavorite(influencer.id)}>
              {favorites.includes(influencer.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InfluencerBox;
=======

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
                    gap: 0,
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
                    gap: 0,
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
                  <Box sx={{ display: "flex", alignItems: "center", gap:0 }}>
                    <PersonIcon fontSize="small" />
                    {influencer.followers.toLocaleString()}k
                  </Box>
                </TableCell>
                <TableCell sx={{justifyContent:"right"}}>
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
>>>>>>> abfd27de4e2a11b278079a88e680cac2f36c06b7
