import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Boxes from "./components/Boxes";

function App() {
  return (
    <Grid component="div" item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Box sx={{ m: 2 }}>
        <Boxes />
      </Box>
    </Grid>
  );
}

export default App;
