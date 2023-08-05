import {
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Button,
} from "@chakra-ui/react";

const InputField = () => {
  return (
    <div>
      <Show breakpoint="(max-width: 767px)">
        <Input
          placeholder="Email address"
          _placeholder={{ color: "white", opacity: "50%", paddingLeft: "1rem" }}
          width="100%"
          height="46px"
          fontWeight="bold"
          fontSize="14px"
          variant="filled"
          color="#2C344B"
          focusBorderColor="#C2CBE5"
          borderRadius="25px"
          marginBottom="1rem"
        />
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <InputGroup>
          <Input
            placeholder="Email address"
            _placeholder={{
              color: "white",
              opacity: "50%",
              paddingLeft: "1rem",
            }}
            width="100%"
            height="56px"
            fontWeight="bold"
            fontSize="14px"
            variant="filled"
            color="#2C344B"
            focusBorderColor="#C2CBE5"
            borderRadius="25px"
            marginBottom="1rem"
          />
          <InputRightElement
            width="162px"
            height="46px"
            marginTop="0.3rem"
            marginRight="0.3rem"
          >
            <Button
              width="100%"
              height="46px"
              color="#121725"
              fontWeight="bold"
              backgroundColor="#54E6AF"
              borderRadius="25px"
              padding="0 1rem"
            >
              Request Access
            </Button>
          </InputRightElement>
        </InputGroup>
      </Show>
    </div>
  );
};

export default InputField;
