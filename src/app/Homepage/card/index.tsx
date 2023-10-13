"use client";
import { Divider, InputBase, Paper, TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material/index";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "next/link";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Cardz = () => {
  const [rama, setRama] = React.useState();
  const { connectModalOpen, openConnectModal } = useConnectModal();
  const { address } = useAccount();
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h4" component="div">
          Get Test Tokens
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={4}>
          This faucet transfers Test Tokens and Gas Tokens on Ramascan PoS and
          chain (Ramestta Testnet). Confirm details before submitting
        </Typography>
        <Typography variant="h6" component="div">
          Network
        </Typography>
        <Button variant="contained" disableElevation fullWidth>
          RAMESTTA
        </Button>
        <Typography variant="h6" component="div">
          Select Token
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">RAMESTTA</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rama}
            label="RAMESTTA"
            onChange={(e) => {
              setRama(e.target.value);
            }}
          >
            <MenuItem value={"RAMA"}>RAMA</MenuItem>
            <MenuItem value={"TEST-RAMA"}>TEST-RAMA</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="h6" component="div" marginTop={2}>
          Wallet Address
        </Typography>
        <Box
          sx={{
            width: 600,
            maxWidth: "100%",
            display: "flex",
          }}
        >
          <TextField fullWidth />
          <Button variant="contained">Paste</Button>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          {!address ? (
            <Button
              variant="contained"
              disableElevation
              fullWidth
              onClick={openConnectModal}
            >
              Connect Wallet to Get Tokens
            </Button>
          ) : (
            <Button
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => {}}
            >
              Claim
            </Button>
          )}
        </Box>
      </CardContent>
    </React.Fragment>
  );
};

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 600 }} p={4} mx={"auto"}>
      <Card className="glass" variant="outlined">
        <Cardz />
      </Card>

      <Card className="glass" variant="outlined" sx={{ marginTop: 10 }}>
        <Typography variant="h4" component="div">
          How can I get bulk Test Tokens?{" "}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={4}>
          The Ramestta Faucet only dispenses a small number of test tokens every
          day. To request in bulk, please complete
          <Link href="/">this form.</Link>
        </Typography>
      </Card>
    </Box>
  );
}
