import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useTheme } from "@emotion/react";
import theme from "./utils/theme";

const InfluncerCard = ({ filteredInfluencers, favorites, toggleFavorite }) => {
  return (
    <Grid
      container
      spacing={3} // Adds spacing between grid items
      sx={{
        padding: 2,
        justifyContent: "start", // Center-align cards on larger screens
      }}
    >
      {filteredInfluencers.map((influencer, i) => (
        <Grid item key={influencer.id || i} xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card
            sx={{
              maxWidth: "100%",
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "visible",
              margin: "0 auto",
            }}
          >
            {/* <Chip
              label={influencer.socialPresence}
              color="success"
              size="small"
              sx={{
                position: "absolute",
                top: -10,
                right: -10,
                fontSize: "12px",
                zIndex: 1,
              }}
            /> */}
            <Box sx={{ display: "flex" }}>
              {/* Profile Image */}
              <CardMedia
                sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
              >
                {favorites.includes(influencer.id) ? (
                  <FavoriteIcon
                    color="error"
                    onClick={() => toggleFavorite(influencer.id)}
                    sx={{ position: "absolute", top: 30, left: 30, zIndex: 1 }}
                  />
                ) : (
                  <Box sx={{ color: "red" }}>
                    {" "}
                    <FavoriteBorderIcon
                      onClick={() => toggleFavorite(influencer.id)}
                      sx={{
                        position: "absolute",
                        top: 30,
                        left: 30,
                        zIndex: 1,
                      }}
                    />
                  </Box>
                )}
                <Box
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: theme.palette.gray[50],
                    margin: "2px",
                  }}
                >
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    style={{
                      width: "70%",
                      height: "50%",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </CardMedia>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography variant="h5">{influencer.name}</Typography>
                <VerifiedIcon
                  sx={{
                    marginTop:"5px",
                    marginLeft :"10px",
                    color: theme.palette.green[300],
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft :"10px",
                    color: theme.palette.grey[500],
                  }}
                >
                  {influencer.genre}
                </Typography>
              </Box>
              {/* Name and Profession */}

              <Box sx={{ display: "flex", justifyContent: "left" }}>
                <Typography variant="h6" color="text.secondary">
                  Social Presence
                </Typography>
              </Box>
              {/* Social Stats */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  fontSize: "14px",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.pink[100] }}
                  >
                    Reach
                  </Typography>
                  <Typography>{influencer.audienceGender.male}</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.pink[100] }}
                  >
                    Engage
                  </Typography>
                  <Typography>{influencer.engagement} %</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.pink[100] }}
                  >
                    CPP
                  </Typography>
                  <Typography>{influencer.cpp}</Typography>
                </Box>
              </Box>

              {/* Followers */}
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  Followers
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{}}>
                  <Box sx={{ display: "flex" }}>
                    <InstagramIcon sx={{ color: "#E4405F" }} />
                    <Typography variant="body2" sx={{ margin: "2px" }}>
                      {influencer.followers.toLocaleString()}k
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex" }}>
                    <YouTubeIcon
                      sx={{
                        color: "white",
                        borderRadius: "20px",
                        
                        backgroundColor: "red",
                      }}
                    />
                    <Typography variant="body2" sx={{ margin: "2px" }}>
                      {influencer.followers.toLocaleString()}k
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex" }}>
                    <FacebookIcon
                      sx={{ color: "#4267B2", borderRadius: "50%" }}
                    />
                    <Typography variant="body2" sx={{ margin: "2px" }}>
                      {influencer.followers.toLocaleString()}k
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  Audience
                </Typography>
              </Box>
              {/* Audience Stats */}
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                <Box>
                  <Typography>Male</Typography>
                  <Typography>{influencer.audienceGender.male} %</Typography>
                </Box>

                <Box>
                  <Typography>Female</Typography>
                  <Typography>{influencer.audienceGender.female} %</Typography>
                </Box>
                <Box>
                  <Typography>Other</Typography>
                  <Typography>{influencer.audienceGender.others} %</Typography>
                </Box>
              </Box>

              {/* Favorite Icon */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfluncerCard;
