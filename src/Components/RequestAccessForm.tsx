import InputField from "./InputField";
import ButtonField from "./ButtonField";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const RequestAccessForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (value: string) => {
    setEmail(value);
  };

  const validateEmail = (email: string) => {
    if (email.trim() === "") {
      setMessage("Oops! Please add your email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Oops! Please check your email");
    } else {
      setMessage("Registration Successful!");
    }

    setEmail("");
  };

  return (
    <div>
      <Box margin="3rem 0">
        <InputField value={email} onValidate={handleInputChange} onEmailValidation={validateEmail} />
        <ButtonField onEmailValidation={validateEmail} getMessage={email} />
        {message && (
          <Box paddingTop="0.5rem" paddingLeft="0.5rem">
            {message}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default RequestAccessForm;
