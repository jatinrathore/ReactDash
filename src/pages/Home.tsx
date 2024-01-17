import { Box } from "@mui/material";
import CollapsibleMenu from "../components/CollapsibleMenu";
import DataTable from "../components/DataTable";

const Home = () => {
  return (
    <Box width="80%" margin="50px auto">
      <DataTable />
      <CollapsibleMenu />
    </Box>
  );
};

export default Home;
