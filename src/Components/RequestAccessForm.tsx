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
      <Box margin="3rem 0">
        <InputField />
        <ButtonField />
      </Box>
    </div>
  );
};

export default RequestAccessForm;
