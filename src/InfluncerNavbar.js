import { Box } from '@mui/material'
import React from 'react'
import SearchInfluncer from './SearchInfluncer'
import FavoriteInfluncer from './FavoriteInfluncer'
import FilterInfluncer from './FilterInfluncer'

const InfluncerNavbar = () => {
  return (
    <Box>
<SearchInfluncer/>
<FavoriteInfluncer/>
<FilterInfluncer/>
    </Box>
  )
}

export default InfluncerNavbar