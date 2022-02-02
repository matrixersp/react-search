import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import { StyledSwitch } from "./StyledSwitch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useMediaQuery } from "@mui/material";

const savedSearches = [
  { id: 1, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
  { id: 2, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
  { id: 3, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: "#efefef",
  width: "fit-content",
  "& > .MuiToggleButton-root": {
    textTransform: "capitalize",
    fontWeight: "Bold",
    padding: "7px 28px",
  },
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.3),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&.Mui-selected": {
      backgroundColor: "#fff",
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
      marginRight: 4,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "Capitalize",
}));

export default function CustomizedInputBase() {
  const [tabValue, setTabValue] = React.useState("1");
  const [brand, setBrand] = React.useState("my-brand");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBrand = (event, newBrand) => {
    setBrand(newBrand);
  };

  return (
    <Stack spacing={1} direction="column">
      <Stack spacing={2} sx={{ mb: 2, px: isMobile ? 2 : 3 }}>
        <StyledToggleButtonGroup
          value={brand}
          exclusive
          onChange={handleBrand}
          aria-label="type of brand"
        >
          <ToggleButton value="my-brand">My Brand</ToggleButton>
          <ToggleButton value="all-brands">All Brands</ToggleButton>
        </StyledToggleButtonGroup>
        <Box
          component="form"
          sx={{
            border: "1px solid #dfdcda",
            borderRadius: 1,
            p: isMobile ? "10px 6px" : "0px 18px 0px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Stack sx={{ flex: 1, width: "100%" }} direction="row">
            <IconButton
              type="submit"
              sx={{ m: 0.5 }}
              aria-label="search"
              size="small"
            >
              <SearchIcon fontSize="inherit" />
            </IconButton>
            <InputBase
              sx={{ ml: 0.5, flex: 1 }}
              placeholder="Search by Title, Barcode, Brand..."
              inputProps={{
                "aria-label": "Search by Title, Barcode, Brand...",
              }}
            />
          </Stack>
          {isMobile ? (
            <Divider sx={{ width: "100%", my: 1 }} orientation="horizontal" />
          ) : (
            <Divider sx={{ height: 40, mx: 2 }} orientation="vertical" />
          )}
          <Stack direction="row" spacing={1} alignItems="center">
            <StyledSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography
              variant="body1"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Advanced search
            </Typography>
          </Stack>
        </Box>
        <div>
          <StyledButton variant="contained" size="medium">
            Search
          </StyledButton>
          <StyledButton
            variant="outlined"
            size="medium"
            sx={{
              ml: 1,
              border: "1px solid #d1d1d1",
              color: "text.primary",
            }}
          >
            Save Search
          </StyledButton>
        </div>
      </Stack>
      <Divider orientation="horizontal" />
      <Box
        sx={{
          typography: "body1",
          "& > .MuiTabPanel-root": { p: 0 },
          px: isMobile ? 2 : 3,
        }}
      >
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                "& .MuiTab-root": { px: 0, pb: 2, textTransform: "capitalize" },
              }}
            >
              <Tab
                sx={{ fontWeight: "bold" }}
                label="Saved Searches"
                value="1"
              />
              <Tab
                sx={{ fontWeight: "bold", ml: 2 }}
                label="My Past Searches"
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 140 }}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableBody>
                  {savedSearches.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "& th, & td": { pl: 0, py: "6px" },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="center">
                        <Link href="#" underline="hover" color="secondary">
                          View Products({item.productsCount})
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link href="#" underline="hover" color="secondary">
                          Show Query
                        </Link>
                      </TableCell>
                      <TableCell align="right" sx={{ py: 0 }}>
                        <StyledButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          sx={{
                            p: 0,
                            minWidth: 42,
                            border: "1px solid #d1d1d1",
                          }}
                        >
                          Edit
                        </StyledButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="2">
            <TableContainer sx={{ maxHeight: 140 }}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableBody>
                  {savedSearches.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "& th, & td": { pl: 0, py: "6px" },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="center">
                        <Link href="#" underline="hover" color="secondary">
                          View Products({item.productsCount})
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link href="#" underline="hover" color="secondary">
                          Show Query
                        </Link>
                      </TableCell>
                      <TableCell align="right" sx={{ py: 0 }}>
                        <StyledButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          sx={{ p: 0, minWidth: 42 }}
                        >
                          Edit
                        </StyledButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
}
