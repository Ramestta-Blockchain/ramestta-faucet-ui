import { Box, Button, Typography } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Link from "next/link";
const index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
      }}
      bgcolor={"white"}
      borderRadius={2}
      padding={2}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <AllInclusiveIcon />
        <Typography sx={{ minWidth: 100 }} fontSize={18} fontWeight={800}>
          Ramestta Faucet
        </Typography>
      </Link>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ minWidth: 100 }}>Other Faucets</Typography>
        </Link>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ minWidth: 100 }}>Build on Ramestta</Typography>
        </Link>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ minWidth: 100 }}>Report issue</Typography>
        </Link>{" "}
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <Button>Connect Wallet</Button>
        </Link>
      </Box>
    </Box>
  );
};
export default index;
