<<<<<<< HEAD
import React from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

const InfluencerGrid = ({ handleSort, filteredInfluencers, toggleFavorite, favorites }) => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Row */}
      <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        <Grid item xs={3}>
          <Typography>Influencer</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Genre</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => handleSort("engagement")}
          >
            Engagement %
            <ArrowUpwardIcon fontSize="small" />
            <ArrowDownwardIcon fontSize="small" />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => handleSort("followers")}
          >
            Followers
            <ArrowUpwardIcon fontSize="small" />
            <ArrowDownwardIcon fontSize="small" />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography>Audience Gender</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Actions</Typography>
        </Grid>
      </Grid>

      {/* Data Rows */}
      {filteredInfluencers.map((influencer) => (
        <Grid
          container
          spacing={2}
          key={influencer.id}
          sx={{
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            paddingY: 1,
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          </Grid>
          <Grid item xs={2}>
            <Typography>{influencer.genre}</Typography>
          </Grid>
          <Grid item xs={2} sx={{ color: "red" }}>
            <Typography>{influencer.engagement}%</Typography>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon fontSize="small" />
              <Typography>{influencer.followers.toLocaleString()}k</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              Male: {influencer.audienceGender.male}% <br />
              Female: {influencer.audienceGender.female}% <br />
              Others: {influencer.audienceGender.others}%
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => toggleFavorite(influencer.id)}>
              {favorites.includes(influencer.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <Box sx={{ color: "red" }}>
                  <FavoriteBorderIcon />
                </Box>
              )}
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default InfluencerGrid;
=======
import React from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

const InfluencerGrid = ({ handleSort, filteredInfluencers, toggleFavorite, favorites }) => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Row */}
      <Grid container spacing={2} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        <Grid item xs={3}>
          <Typography>Influencer</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Genre</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => handleSort("engagement")}
          >
            Engagement %
            <ArrowUpwardIcon fontSize="small" />
            <ArrowDownwardIcon fontSize="small" />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => handleSort("followers")}
          >
            Followers
            <ArrowUpwardIcon fontSize="small" />
            <ArrowDownwardIcon fontSize="small" />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography>Audience Gender</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Actions</Typography>
        </Grid>
      </Grid>

      {/* Data Rows */}
      {filteredInfluencers.map((influencer) => (
        <Grid
          container
          spacing={2}
          key={influencer.id}
          sx={{
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            paddingY: 1,
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          </Grid>
          <Grid item xs={2}>
            <Typography>{influencer.genre}</Typography>
          </Grid>
          <Grid item xs={2} sx={{ color: "red" }}>
            <Typography>{influencer.engagement}%</Typography>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon fontSize="small" />
              <Typography>{influencer.followers.toLocaleString()}k</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              Male: {influencer.audienceGender.male}% <br />
              Female: {influencer.audienceGender.female}% <br />
              Others: {influencer.audienceGender.others}%
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => toggleFavorite(influencer.id)}>
              {favorites.includes(influencer.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <Box sx={{ color: "red" }}>
                  <FavoriteBorderIcon />
                </Box>
              )}
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default InfluencerGrid;
>>>>>>> abfd27de4e2a11b278079a88e680cac2f36c06b7
