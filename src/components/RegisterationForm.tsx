import { Box, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  //Managing a text field to store values provided by the user in a state variable.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //Function for validating the email provided by the user.
  const isValidEmail = (email: string): boolean => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const Users = "react-dash";

    const customId = "id";
    // Validating the name provided by the user
    if (formData.name.length < 4)
      return toast.warn(
        "Please provide a valid name. It must be at least 4 characters long",
        {
          style: { backgroundColor: "#F24C3D" },
          toastId: customId,
        }
      );

    // Validating the phone provided by the user
    if (formData.phone.length < 10)
      return toast.warn(
        "Please provide a valid phone number. It must be 10 digits long.",
        {
          style: { backgroundColor: "#F24C3D" },
          toastId: customId,
        }
      );

    // Validating the email provided by the user.
    if (!isValidEmail(formData.email))
      return toast.warn("Please provide a valid email address.", {
        style: { backgroundColor: "#F24C3D" },
        toastId: customId,
      });

    //Saving user's details in local storage
    localStorage.setItem(Users, JSON.stringify(formData));
    toast.info("User successfully registered. Welcome aboard!");

    navigate("/home");

    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      spacing={4}
      marginTop={8}
    >
      <Typography variant="h6" component="h6">
        Welcome to React Dash!
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2} width="24rem">
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="name"
            onChange={handleChange}
            fullWidth
            variant="filled"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone"
            name="phone"
            onChange={handleChange}
            fullWidth
            variant="filled"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            onChange={handleChange}
            fullWidth
            variant="filled"
          />
        </Stack>
        <Box textAlign="center" marginTop={5}>
          <ColorButton variant="contained" type="submit">
            Submit
          </ColorButton>
        </Box>
      </form>
    </Stack>
  );
};

export default RegistrationForm;
