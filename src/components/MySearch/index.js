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

const savedSearches = [
  { id: 1, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
  { id: 2, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
  { id: 3, title: "Brown Brothers", productsCount: 653, query: "Show Query" },
];

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "Capitalize",
}));

export default function CustomizedInputBase() {
  const [tabValue, setTabValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      divider={<Divider orientation="horizontal" />}
    >
      <Stack spacing={2} sx={{ mb: 2, px: 3 }}>
        <Box
          component="form"
          sx={{
            border: "1px solid #dfdcda",
            borderRadius: 1,
            pl: "4px",
            pr: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            type="submit"
            sx={{ p: "10px", my: 0.5 }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 0.5, flex: 1 }}
            placeholder="Search by Title, Barcode, Brand..."
            inputProps={{ "aria-label": "Search by Title, Barcode, Brand..." }}
          />
          <Divider sx={{ height: 52, mx: 2 }} orientation="vertical" />
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
          <StyledButton
            variant="contained"
            size="large"
            sx={{ p: "14px 22px" }}
          >
            Search
          </StyledButton>
          <StyledButton
            variant="outlined"
            size="large"
            sx={{
              ml: 1,
              p: "14px 22px",
              border: "1px solid #d1d1d1",
              color: "text.primary",
            }}
          >
            Save Search
          </StyledButton>
        </div>
      </Stack>
      <Box
        sx={{
          typography: "body1",
          "& > .MuiTabPanel-root": { p: 0 },
          px: 3,
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
                        "& th": { p: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="right">
                        <Link href="#" underline="hover" color="secondary">
                          View Products({item.productsCount})
                        </Link>
                      </TableCell>
                      <TableCell align="right">
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
            <TableContainer sx={{ maxHeight: "140px" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {savedSearches.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "& th": { p: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="right">
                        <Link href="#" underline="hover" color="secondary">
                          View Products({item.productsCount})
                        </Link>
                      </TableCell>
                      <TableCell align="right">
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
