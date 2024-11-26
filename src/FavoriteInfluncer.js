import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'

const FavoriteInfluncer = ({openFavoritesDialog,handleFavoritesDialogClose,favorites,influencers,}) => {
  return (
    <div>
          {/* Dialog for Favorites List */}

         
      <Dialog open={openFavoritesDialog} onClose={handleFavoritesDialogClose}>
        <DialogTitle>Favorite Influencers</DialogTitle>
        <DialogContent>
          {favorites ? (
            <Box>
              {influencers
                .filter((influencer) => favorites.includes(influencer.id))
                .map((fav) => (
                  <Box
                    key={fav.id}
                    sx={{ display: "flex", gap: 2, marginBottom: 2 }}
                  >
                    <img
                      src={fav.image}
                      alt={fav.name}
                      style={{
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                      }}
                    />
                    <Typography>{fav.name}</Typography>
                  </Box>
                ))}
            </Box>
          ) : (
            <Typography>No favorites added.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFavoritesDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FavoriteInfluncer