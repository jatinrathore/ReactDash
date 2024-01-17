import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box textAlign="center" padding="20px 10px">
      <Typography
        variant="h4"
        component="h4"
        fontFamily="cursive"
        fontWeight="600"
      >
        ReactDash
      </Typography>
    </Box>
  );
};

export default NavBar;
