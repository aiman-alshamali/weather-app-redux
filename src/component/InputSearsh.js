import { Input, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export default function InputSearsh() {
  return (
    <div style={{ display: "flex", justifyContent: "end", margin: "10px" }}>
      <InputBase
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          ml: 1,
          mr: 1,
          flex: 1,
          fontSize: "1.1rem",
          fontFamily: "inherit",
        }}
        placeholder=" Search for a city..."
        inputProps={{ "aria-label": "search for a city" }}
      />
      {/* <input
        type="searsh"
        placeholder="Search city"
        style={{ height: "1rem" }}
      /> */}
      <Button variant="contained" startIcon={<LocationOnOutlinedIcon />}>
        Search
      </Button>
    </div>
  );
}

// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'
// import InputBase from '@mui/material/InputBase'
// import Divider from '@mui/material/Divider'
// import IconButton from '@mui/material/IconButton'
// import SearchIcon from '@mui/icons-material/Search'
// import MyLocationIcon from '@mui/icons-material/MyLocation'

// export default function CityWeatherSearch() {
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     // سيتم وضع كود البحث هنا
//     console.log('Searching for city...')
//   }

//   const handleCurrentLocation = () => {
//     // سيتم وضع كود تحديد الموقع هنا
//     console.log('Getting current location weather...')
//   }

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, mt: 10 }} dir="rtl">
//       <Paper
//         component="form"
//         onSubmit={handleSearch}
//         sx={{
//           p: '4px 8px',
//           display: 'flex',
//           alignItems: 'center',
//           width: '100%',
//           maxWidth: 500,
//           borderRadius: 8,
//           boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//         }}
//       >
//         <IconButton sx={{ p: '10px' }} aria-label="search" type="submit">
//           <SearchIcon />
//         </IconButton>

//         <InputBase
//           sx={{ ml: 1, mr: 1, flex: 1, fontSize: '1.1rem', fontFamily: 'inherit' }}
//           placeholder="ابحث عن مدينة..."
//           inputProps={{ 'aria-label': 'search for a city' }}
//         />

//         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

//         <IconButton
//           color="primary"
//           sx={{ p: '10px' }}
//           aria-label="current location"
//           onClick={handleCurrentLocation}
//           title="استخدم موقعي الحالي"
//         >
//           <MyLocationIcon />
//         </IconButton>
//       </Paper>
//     </Box>
//   )
// }
