import GitFooter from "../components/GitFooter";
import NavBar from "../components/NavBar";
import RegistrationForm from "../components/RegisterationForm";
import "./css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard--body">
      <NavBar />
      <RegistrationForm />
      <GitFooter />
    </div>
  );
};

export default Dashboard;
