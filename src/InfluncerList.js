import React, { useState } from "react";
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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import FavoriteInfluncer from "./FavoriteInfluncer";
import FilterInfluncer from "./FilterInfluncer";
import SearchInfluncer from "./SearchInfluncer";
import InfluncerTable from "./InfluncerTable";
import InfluncerCard from "./InfluncerCard";

import ListIcon from "@mui/icons-material/List";

const influencerData = [
  {
    id: 1,
    name: "Umesh ",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Photography",
    engagement: 4,
    followers: 120000,
    cpp: 50000,
    audienceGender: { male: 63, female: 30, others: 7 },
  },
  {
    id: 2,
    name: "Sarvaiya",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Fashion",
    engagement: 5,
    followers: 150000,
    cpp: 25000,
    audienceGender: { male: 40, female: 55, others: 5 },
  },
  {
    id: 3,
    name: "Vishal",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Tech",
    engagement: 3,
    followers: 90000,
    cpp: 27900,
    audienceGender: { male: 70, female: 20, others: 10 },
  },
  {
    id: 4,
    name: "Bhadresh",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Software Engineer",
    engagement: 3,
    followers: 90000,
    cpp: 21000,
    audienceGender: { male: 70, female: 20, others: 10 },
  },
  {
    id: 5,
    name: "vishal chauhan",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Web developer",
    engagement: 3,
    followers: 90000,
    cpp: 55000,
    audienceGender: { male: 70, female: 20, others: 10 },
  },
  {
    id: 6,
    name: "rahul",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    genre: "Engineer",
    engagement: 3,
    followers: 90000,
    cpp: 25000,
    audienceGender: { male: 70, female: 20, others: 10 },
  },
];
const InfluencerList = () => {
  const [influencers, setInfluencers] = useState(influencerData);
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [openFavoritesDialog, setOpenFavoritesDialog] = useState(false);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [filterGenre, setFilterGenre] = useState("");
  const [filterEngagement, setFilterEngagement] = useState("");
  const [filterFollowers, setFilterFollowers] = useState("");
  const [isCardView, setIsCardView] = useState(true); 

  const handleToggleView = () => {
    setIsCardView((prevView) => !prevView); 
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredInfluencers = influencers.filter((influencer) => {
    return (
      (influencer.name.toLowerCase().includes(searchText) ||
        influencer.genre.toLowerCase().includes(searchText)) &&
      (filterGenre ? influencer.genre === filterGenre : true) &&
      (filterEngagement
        ? influencer.engagement >= parseFloat(filterEngagement)
        : true) &&
      (filterFollowers
        ? influencer.followers >= parseInt(filterFollowers, 10)
        : true)
    );
  });

  const handleSort = (field) => {
    const direction =
      sortConfig.key === field && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    const sorted = [...influencers].sort((a, b) => {
      if (field === "followers" || field === "engagement") {
        return direction === "ascending"
          ? a[field] - b[field]
          : b[field] - a[field];
      }
      return 0;
    });
    setSortConfig({ key: field, direction });
    setInfluencers(sorted);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleDialogToggle = (dialogName) => {
    if (dialogName === "favorites") {
      setOpenFavoritesDialog(!openFavoritesDialog);
    } else if (dialogName === "filter") {
      setOpenFilterDialog(!openFilterDialog);
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: "100%",
        margin: "auto",
        backgroundColor: "#F7F6F5",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#F7F6F5",
          padding: 2,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <SearchInfluncer handleSearch={handleSearch} />
          <IconButton
            onClick={() => handleDialogToggle("favorites")}
            sx={{
              backgroundColor: "white",
              width: "110px",
              borderRadius: "10px",
              margin: "10px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Typography>Favorite</Typography>
            <Box sx={{ color: "red" }}>
              <FavoriteIcon />
            </Box>
          </IconButton>

          <IconButton
            onClick={() => handleDialogToggle("filter")}
            sx={{
              width: "110px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "10px",
              margin: "10px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Typography>Filter </Typography> <FilterListIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", color: "black", justifyContent: "right" }}>
          <IconButton onClick={handleToggleView}>
           
            {isCardView ? <ListIcon /> : <ListIcon />}
          </IconButton>
        </Box>


        {isCardView ? (

  <InfluncerTable
        handleSort={handleSort}
        filteredInfluencers={filteredInfluencers}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        handleToggleView = {handleToggleView}
      /> 
        ):(
          <InfluncerCard
        handleSort={handleSort}
        filteredInfluencers={filteredInfluencers}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
        )}
      
        <FavoriteInfluncer
          openFavoritesDialog={openFavoritesDialog}
          handleFavoritesDialogClose={() => handleDialogToggle("favorites")}
          favorites={favorites}
          influencers={influencers}
        />
      </Box>
      <FilterInfluncer
        openFilterDialog={openFilterDialog}
        handleFilterDialogClose={() => handleDialogToggle("filter")}
        filterGenre={filterGenre}
        filterEngagement={filterEngagement}
        filterFollowers={filterFollowers}
        setFilterGenre={setFilterGenre}
        setFilterEngagement={setFilterEngagement}
        setFilterFollowers={setFilterFollowers}
        InfluncerFilters={() => handleDialogToggle("filter")}
      />
     
    </Box>
  );
};
export default InfluencerList;
