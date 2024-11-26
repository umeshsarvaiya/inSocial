import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Chip, Box, IconButton, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";

const InfluncerCard = ({ filteredInfluencers,favorites,toggleFavorite }) => {
  return (
    <Grid
      container
      spacing={3} // Adds spacing between grid items
      sx={{
        padding: 2,
        justifyContent: "center", // Center-align cards on larger screens
      }}
    >
      {filteredInfluencers.map((influencer, i) => (
        <Grid
          item
          key={influencer.id || i} // Unique key for each item
          xs={12} // Full width on extra-small screens
          sm={6} // Half width on small screens
          md={4} // One-third width on medium screens
          lg={3} // One-fourth width on large screens
          xl={3} // Same as large screens for extra-large screens
        >
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
<Box sx={{display:"flex"}}>

                   
                  

            {/* Profile Image */}
            <CardMedia
              
              
             
              sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
            >
             {favorites.includes(influencer.id) ? (
                      <FavoriteIcon color="error"
                      onClick={() => toggleFavorite(influencer.id)}
                      sx={{ position: "absolute", top:30,left:30,zIndex:1}}
                       />
                    ) : (
                     <Box sx={{color:"red"}}> <FavoriteBorderIcon   
                     onClick={() => toggleFavorite(influencer.id)}
                       sx={{ position: "absolute", top:30,left:30,zIndex:1}}/></Box>
                    )}
            <Box 
            sx={{padding:"20px",borderRadius:"5px",backgroundColor:"gray",margin:"20px"}}
            >                <img
                  src={influencer.image}
                  alt={influencer.name}
                  style={{ objectFit: "cover", width: "70%", height: "70%" }}
                />
                </Box>

  
            </CardMedia>
            </Box>
            <CardContent sx={{  textAlign: "center", padding: "16px" }}>
            <Box sx={{display:"flex", justifyContent:"left"}}>
            <Typography variant="h4">{influencer.name}</Typography>
              <Typography variant="h6"  sx={{alignItems:"center",marginTop:"10px",marginLeft:"40px"}} color="text.secondary">
                {influencer.genre}
              </Typography>
            </Box>
              {/* Name and Profession */}
             
<Box sx={{display:"flex",justifyContent:"left"}}>
    <Typography variant="h6" color="text.secondary">Social Presence</Typography>
</Box>
              {/* Social Stats */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  fontSize: "14px",
                  color: "text.secondary",
                }}
              >
              <Box>
              <Typography variant="h6" sx={{color:"#ff0a54"}}>Reach</Typography>
              <Typography>{influencer.audienceGender.male}</Typography>
              </Box>

              <Box>
              <Typography variant="h6"sx={{color:"#ff0a54"}}>Engage</Typography>
              <Typography>{influencer.audienceGender.engage}</Typography>
              </Box>

              <Box>
              <Typography variant="h6"sx={{color:"#ff0a54"}}>CPP</Typography>
              <Typography>{influencer.audienceGender.cpp}</Typography>
              </Box>
               
               
              </Box>

              {/* Followers */}
              <Divider/>
              <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h6" sx={{color:"gray"}}>Followers</Typography>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                <Box sx={{display:"flex"}}>
                  <InstagramIcon sx={{ color: "#E4405F"  }} />
                  <Typography variant="body2">
                     {influencer.followers.toLocaleString()}k
                  </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                <Box sx={{ display:"flex"}}>
                  <YouTubeIcon sx={{ color: "white" ,borderRadius:"5px" ,backgroundColor:"red" }} />
                  <Typography variant="body2">
                    {influencer.followers.toLocaleString()}k
                  </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                <Box sx={{ display:"flex"}}>
                  <FacebookIcon sx={{ color: "#4267B2", borderRadius:"50%" }} />
                  <Typography variant="body2">
                  {influencer.followers.toLocaleString()}k
                  </Typography>
                  </Box>
                </Box>
              </Box>

<Divider/>

<Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h6" sx={{color:"gray"}}>Audience</Typography>
              </Box>
              {/* Audience Stats */}
              <Box
                sx={{
                  mt: 2,
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
