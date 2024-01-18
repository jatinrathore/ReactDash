import { useNavigate } from "react-router-dom";
import GitFooter from "../components/GitFooter";
import NavBar from "../components/NavBar";
import RegistrationForm from "../components/RegisterationForm";
import "./css/Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
  //checking if user is registered and attempts to redirect via URL manipulation
  const navigate = useNavigate();

  const Users = "react-dash";
  const isDataInLS = !!localStorage.getItem(Users);

  useEffect(() => {
    if (isDataInLS) navigate("/home");
  }, []);

  return (
    <div className="dashboard--body">
      <NavBar />
      <RegistrationForm />
      <GitFooter />
    </div>
  );
};

export default Dashboard;
