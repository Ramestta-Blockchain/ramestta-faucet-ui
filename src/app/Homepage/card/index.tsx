import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Tab } from "../../../../node_modules/@mui/icons-material/index";
import { AppBar, Tabs } from "../../../../node_modules/@mui/material/index";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Get Test Tokens
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={4}>
        This faucet transfers Test Tokens and Gas Tokens on Polygon PoS and
        zkEVM testnets and its parent chain (Goerli). Confirm details before
        submitting
      </Typography>
      <Typography variant="h6" component="div">
        Network
      </Typography>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 600 }} p={4} mx={"auto"}>
      <Card className="glass" variant="outlined">
        {card}
      </Card>
    </Box>
  );
}
