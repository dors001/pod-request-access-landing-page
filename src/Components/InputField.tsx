import { Input } from "@chakra-ui/react";

const InputField = () => {
  return (
    <div>
      <Input
        placeholder="Email address"
        _placeholder={{ color: "gray" }}
        size="14px"
        variant="filled"
        color="#2C344B"
        focusBorderColor="#C2CBE5"
        borderRadius="20px"
      />
    </div>
  );
};

export default InputField;
