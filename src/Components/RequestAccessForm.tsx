import InputField from "./InputField";
import ButtonField from "./ButtonField";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

const RequestAccessForm = () => {
  return (
    <div>
      <Box margin="1.5rem">
        <InputField />
        <ButtonField />
      </Box>
    </div>
  );
};

export default RequestAccessForm;
