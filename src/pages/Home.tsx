import { Box, Button } from "@mui/material";
import CollapsibleMenu from "../components/CollapsibleMenu";
import DataTable from "../components/DataTable";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Home = () => {
  //checking if user is not registered and attempts to redirect via URL manipulation
  const navigate = useNavigate();

  const Users = "react-dash";
  const isDataInLS = !!localStorage.getItem(Users);

  useEffect(() => {
    if (!isDataInLS) {
      const customId = "yes";
      toast.warn(
        "Please provide values for all input fields to proceed to the next page.",
        {
          style: { backgroundColor: "#F24C3D" },
          toastId: customId,
        }
      );
      navigate("/");
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem(Users);
    toast.info("Welcome aboard! Please register to proceed.");
    navigate("/");
  };

  return (
    <Box width="80%" margin="50px auto">
      <Button
        variant="contained"
        style={{ marginBottom: "20px" }}
        onClick={handleClick}
      >
        <RiArrowGoBackLine style={{ marginRight: "5px" }} />
        Registration Page
      </Button>
      <DataTable />
      <CollapsibleMenu />
    </Box>
  );
};

export default Home;
